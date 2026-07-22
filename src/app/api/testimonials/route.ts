import { NextResponse } from "next/server";
import { MOCK_TESTIMONIALS } from "@/data/testimonials";

export async function GET(): Promise<NextResponse> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return NextResponse.json({ success: true, data: MOCK_TESTIMONIALS }, { status: 200 });
}
