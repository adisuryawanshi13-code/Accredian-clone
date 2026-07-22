import { NextResponse } from "next/server";
import { MOCK_FAQS } from "@/data/faqs";

export async function GET(): Promise<NextResponse> {
  // Simulate network latency for API fetch demonstration
  await new Promise((resolve) => setTimeout(resolve, 300));
  return NextResponse.json({ success: true, data: MOCK_FAQS }, { status: 200 });
}
