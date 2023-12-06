"use client";
import { usePathname } from "next/navigation";

export default function PageName() {
  const path = usePathname();
  return <span>{path !== "/" && decodeURIComponent(path)}</span>;
}
