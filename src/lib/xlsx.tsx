import xlsx, { IJsonSheet } from "json-as-xlsx"
import getDeviceData from "@/actions/getDevicesData"

export async function downloadToExcel() {
  const data = await getDeviceData()

  //   provider: string
  //   customer: string
  //   iccid: number
  //   imei: number
  //   ip: string
  //   mac: string
  //   license: string
  //   mfg: string
  //   status: "Active" | "Suspended" | "Deactive"
  //   lastconnect: string

  let columns: IJsonSheet[] = [
    {
      sheet: "Persons",
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
      content: data,
    },
  ]

  let settings = {
    fileName: "Device_Management_Inventory_Excel",
  }

  xlsx(columns, settings)
}
