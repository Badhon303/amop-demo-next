import { columns } from "@/app/device/columns"
import { DataTable } from "@/app/device/data-table"
import getDeviceData from "@/actions/getDevicesData"

export default async function DeviceManagement() {
  const data = await getDeviceData()

  return (
    <div className="bg-white p-8 rounded-2xl">
      <h1 className="text-xl font-bold mb-5">Device Management Inventory</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
