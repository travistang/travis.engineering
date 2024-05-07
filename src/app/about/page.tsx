import { ROUTE_ABOUT } from "@/constants/route";
import { redirect } from "next/navigation";

export default async function AboutPage() {
  redirect(ROUTE_ABOUT);
}
