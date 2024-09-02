"use server";

import { redirect } from "next/navigation";
import { ActionResult } from "@/types";



export async function SignIn(_: unknown, formData: FormData): Promise<ActionResult> {
  return redirect("/dashboard/sign-in");
}
