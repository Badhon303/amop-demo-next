import { ColumnDef } from "@tanstack/react-table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
}

async function selectAllRowsFromAllPages<TData, TValue>({
  columns,
}: DataTableProps<TData, TValue>): Promise<Element[]> {
  return new Promise<Element[]>((resolve) => {
    const nextPageButton =
      document.querySelector<HTMLButtonElement>("#next-page") // Replace with the actual selector for your "Next" button
    const tableRows: Element[] = []

    async function processPage() {
      // Select all the rows on the current page and add them to the tableRows array
      const currentPageRows = document.querySelectorAll("#table-row") // Replace with the actual selector for your table rows
      currentPageRows.forEach((row) => {
        tableRows.push(row)
      })

      // Check if there is a "Next" button to go to the next page
      const hasNextPage = nextPageButton && !nextPageButton?.disabled

      if (hasNextPage) {
        // Click the "Next" button to go to the next page
        nextPageButton.click()

        // Wait for the table to load the next page (you may need to adjust the delay)
        await new Promise((resolve) => setTimeout(resolve, 1000)) // Adjust the delay as needed

        // Recursively process the next page
        await processPage()
      } else {
        // All pages have been processed; resolve the promise with the selected rows
        resolve(tableRows)
      }
    }

    // Start the process by clicking on the "Next" button to load the first page
    processPage()
  })
}

export default selectAllRowsFromAllPages
