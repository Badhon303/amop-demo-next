"use client"

import { useState, useEffect } from "react"
import { columns, Device } from "@/app/device-management/columns"
import { DataTable } from "@/app/device-management/data-table"

// import getDeviceData from "@/actions/getDevicesData"

export default function DeviceManagement() {
  const [data, setData] = useState<Device[]>([])

  useEffect(() => {
    const getData = async () => {
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
      const data = await res.json()
      setData(data)
    }
    getData()
  }, [])
  return <DataTable columns={columns} data={data} />
}
