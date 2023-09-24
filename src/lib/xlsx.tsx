import xlsx, { IJsonSheet, IContent } from "json-as-xlsx"
import { Row } from "@tanstack/react-table"
import getData from "@/actions/getDevicesData"

export async function downloadToExcel<TData extends IContent>(
  getSelectedRowData: Row<TData>[],
  visibleColumns: Row<TData>[]
) {
  const data = await getData()
  const getRowData = getSelectedRowData.map((row) => row.original)
  const values = visibleColumns.map((value) => value.id)

  const rowData = getRowData.length === 0 ? data : getRowData

  console.log("data: ", data)

  const columnsBySelect = values
    .filter((value) => value !== "select" && value !== "actions") // Exclude 'select' and 'actions'
    .map((value) => ({
      label:
        value === "lastconnect"
          ? "Last Connect"
          : value === "iccid"
          ? "ICCID"
          : value === "imei"
          ? "IMEI"
          : value === "ip"
          ? "IP Address"
          : value === "mac"
          ? "MAC Address"
          : value === "license"
          ? "License Status"
          : value === "manufacturer"
          ? "Device Manufacturer"
          : value.charAt(0).toUpperCase() + value.slice(1),
      value: value,
    }))

  let columns: IJsonSheet[] = [
    {
      sheet: "Inventory",
      columns: columnsBySelect,
      content: rowData,
    },
  ]

  let settings = {
    fileName: `${new Date().toJSON().slice(0, 19)}`,
  }

  xlsx(columns, settings)
}
