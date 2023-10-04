"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSearchParams, usePathname } from "next/navigation"
import { downloadToExcel } from "@/lib/xlsx"

import { useQuery } from "@tanstack/react-query"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  PaginationState,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
}

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import getData from "@/actions/getDevicesData"

export function DataTable<TData, TValue>({
  columns,
}: // data,
DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [filtering, setFiltering] = useState("")

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  })

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )

  const fetchDataOptions = {
    pageIndex,
    pageSize,
  }

  const defaultData = useMemo(() => [], [])

  const dataQuery = useQuery(
    ["data", fetchDataOptions],
    async () => await getData(fetchDataOptions),
    { keepPreviousData: true }
  )

  console.log("dataQuery: ", dataQuery.data)

  const table = useReactTable({
    data: dataQuery.data?.results ?? defaultData,
    pageCount: dataQuery.data?.totalPages ?? 1,
    columns,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      pagination,
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  })

  const searchParams = useSearchParams()
  const pathname = usePathname()

  //Changes the page number in the url
  const pageSetTo = (pageNumber: string) => {
    history.pushState(
      null,
      "",
      `${pathname}?${createQueryString({ page: pageNumber })}`
    )
  }

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair

  const createQueryString = useCallback(
    (searchParams: { [name: string]: string }) => {
      const params = new URLSearchParams()
      for (const key in searchParams) {
        params.set(key, searchParams[key])
      }
      return params.toString()
    },
    [searchParams]
  )

  console.log("pageIndex: ", table.getState().pagination.pageIndex)

  // const createQueryString = useCallback(
  //   (name: string, value: string) => {
  //     const params = new URLSearchParams(searchParams)
  //     params.set(name, value)

  //     return params.toString()
  //   },
  //   [searchParams]
  // )

  // Sets the page with given page number in the url
  // useEffect(() => {
  //   const initialPageNumber = pageNumber ? pageNumber - 1 : 0
  // if (initialPageNumber <= 1) {
  //   table.setPageIndex(0)
  //   // pageSetTo("1", "10")
  // } else if (initialPageNumber >= table.getPageCount()) {
  //   table.setPageIndex(table.getPageCount() - 1)
  //   // pageSetTo(
  //   //   `${table.getPageCount()}`,
  //   //   `${table.getState().pagination.pageSize}`
  //   // )
  // } else {
  //   table.setPageIndex(initialPageNumber)
  // }
  // }, [])
  const pageNumber = Number(searchParams.get("page"))

  useEffect(() => {
    // if (pageNumber <= 1) {
    //   table.setPageIndex(2)
    // } else if (pageNumber >= table.getPageCount()) {
    //   table.setPageIndex(table.getPageCount())
    // } else {
    //   table.setPageIndex(pageNumber)
    // }
    pageSetTo(`${table.getState().pagination.pageIndex}`)
  }, [pagination])

  const getSelectedRowData = table.getSelectedRowModel()
  const visibleColumns = table.getVisibleLeafColumns()

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          type="text"
          placeholder="Filter..."
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          className="max-w-sm"
        />
        <Button
          onClick={() =>
            downloadToExcel(
              getSelectedRowData.flatRows as [],
              visibleColumns as []
            )
          }
          className="ml-auto"
        >
          Export
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-4">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value: boolean) => {
                      column.toggleVisibility(!!value)
                      column.setFilterValue("")
                    }}
                    onSelect={(e) => e.preventDefault()}
                  >
                    <div className="cursor-pointer">
                      {column.id === "iccid"
                        ? "ICCID"
                        : column.id === "imei"
                        ? "IMEI"
                        : column.id === "ip"
                        ? "IP Address"
                        : column.id === "mac"
                        ? "MAC Address"
                        : column.id === "license"
                        ? "License Status"
                        : column.id === "manufacturer"
                        ? "Device Manufacturer"
                        : column.id === "lastconnect"
                        ? "Last Connect"
                        : column.id}
                    </div>
                  </DropdownMenuCheckboxItem>
                )
              })}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => table.toggleAllColumnsVisible(true)}
              onSelect={(e) => e.preventDefault()}
            >
              <div className="cursor-pointer">Select All</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  id="table-row"
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow id="table-row">
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex flex-col md:flex-row items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <button
            className="border rounded p-1"
            onClick={() => {
              table.setPageIndex(1)
            }}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => {
              table.previousPage()
            }}
            disabled={table.getState().pagination.pageIndex === 1}
          >
            {"<"}
          </button>
          <button
            className="border rounded p-1"
            id="next-page"
            onClick={() => {
              table.nextPage()
            }}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => {
              table.setPageIndex(table.getPageCount())
            }}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
        </div>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex} of{" "}
            {table.getPageCount() - 1}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            min="1"
            onKeyDown={(e) => {
              if (e.key === "-") {
                e.preventDefault()
              }
            }}
            placeholder={`${table.getState().pagination.pageIndex}`}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) : 1
              if (page < 1) {
                return false
              } else if (page >= table.getPageCount()) {
                table.setPageIndex(table.getPageCount())
              } else {
                table.setPageIndex(page)
              }
            }}
            onBlur={(e) => (e.target.value = "")}
            className="border p-1 rounded w-16 cursor-pointer"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
            table.setPageIndex(0)
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
