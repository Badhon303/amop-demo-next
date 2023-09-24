import { Device } from "@/app/device-management/columns"

export default async function getData(): Promise<Device[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/inventory/list`,
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
  return res.json()
}
