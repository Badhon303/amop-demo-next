import { columns, Device } from "@/app/device-management/columns"
import { DataTable } from "@/app/device-management/data-table"

// import getDeviceData from "@/actions/getDevicesData"

async function getData(): Promise<Device[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/inventory/list`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

export default async function DeviceManagement() {
  const data = await getData()
  return <DataTable columns={columns} data={data} />
}
