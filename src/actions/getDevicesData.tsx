import { Device } from "@/app/[lang]/device-management/columns"

export default async function getData(options: {
  pageIndex: number
  pageSize: number
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/inventory/list?page=${options.pageIndex}&limit=${options.pageSize}`,
    {
      cache: "no-store",
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
  const jsonResponse = await res.json()
  return jsonResponse
}
