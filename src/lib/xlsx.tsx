import xlsx, { IJsonSheet, IContent } from "json-as-xlsx"
import { Row } from "@tanstack/react-table"

export async function downloadToExcel<TData extends IContent>(
  getSelectedRowData: Row<TData>[]
) {
  const rowData = getSelectedRowData.map((row) => row.original)

  let columns: IJsonSheet[] = [
    {
      sheet: "Inventory",
      columns: [
        { label: "Provider", value: "provider" },
        { label: "Customer", value: "customer" },
        { label: "ICCID", value: "iccid" },
        { label: "IMEI", value: "imei" },
        { label: "IP Address", value: "ip" },
        { label: "MAC Address", value: "mac" },
        { label: "License Status", value: "license" },
        { label: "Device Mfg", value: "mfg" },
        { label: "Status", value: "status" },
        { label: "Last Connect", value: "lastconnect" },
      ],
      content: rowData,
    },
  ]

  let settings = {
    fileName: `${new Date().toJSON().slice(0, 19)}`,
  }

  xlsx(columns, settings)
}
