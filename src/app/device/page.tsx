import { columns } from "@/app/device/columns"
import { DataTable } from "@/app/device/data-table"
import getDeviceData from "@/actions/getDevicesData"

export default async function DeviceManagement() {
  const data = await getDeviceData()

  return (
    <div className="mx-10 mt-5">
      <h1 className="text-3xl font-bold mb-5">Device Management Inventory</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
