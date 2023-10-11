"use client"

import { NextUIProvider } from "@nextui-org/react"
import { ReactNode } from "react"

interface MyProps {
  children?: ReactNode
}
export function Providers({ children }: MyProps) {
  return <NextUIProvider>{children}</NextUIProvider>
}
