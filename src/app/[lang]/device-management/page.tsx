import { columns } from "@/app/device-management/columns"
import { DataTable } from "@/app/device-management/data-table"
import getData from "@/actions/getDevicesData"
// import

export default async function DeviceManagement() {
  const data = await getData()
  return <DataTable columns={columns} data={data} />
}
