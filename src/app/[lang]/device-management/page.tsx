import { columns } from "@/app/[lang]/device-management/columns"
import { DataTable } from "@/app/[lang]/device-management/data-table"
// import getData from "@/actions/getDevicesData"
import getDeviceDataLocal from "@/actions/getDevicesDataLocal"

export default async function DeviceManagement() {
  // const data = await getData()
  const data = await getDeviceDataLocal()
  return <DataTable columns={columns} data={data} />
}
