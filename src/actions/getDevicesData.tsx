// import { Device } from "@/app/[lang]/device-management/columns"

// export default async function getData(): Promise<Device[]> {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/inventory/list/page=1&limit=500`,
//     {
//       cache: "no-store",
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//     }
//   )
//   if (!res.ok) {
//     throw new Error("Failed to fetch data")
//   }
//   return res.json()
// }
