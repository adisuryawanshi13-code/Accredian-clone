import { NextResponse } from "next/server";
import { referralSchema } from "@/lib/validations/referral";
import { ApiResponse } from "@/types";

export async function POST(request: Request): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();

    // Validate request body with Zod
    const validationResult = referralSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { referrerName, referrerEmail, refereeName, refereeEmail, program } =
      validationResult.data;

    // Simulate database transaction delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Generate mock referral code & ID
    const referralId = `REF-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json(
      {
        success: true,
        message: `Referral submitted successfully! Bonus will be credited upon ${refereeName}'s enrollment.`,
        referralId,
        data: {
          referrerName,
          referrerEmail,
          refereeName,
          refereeEmail,
          program,
          rewardAmount: "₹15,000",
          createdAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Something went wrong while processing referral";

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}
