import { ROUTE_ARTICLES } from "@/constants/route";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(ROUTE_ARTICLES);
}
