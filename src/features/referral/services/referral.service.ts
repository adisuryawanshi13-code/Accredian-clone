import { ApiResponse } from "@/shared/types/common.types";
import { ReferralFormData } from "../validations/referral.schema";
import { ReferralSuccessData } from "../types/referral.types";

export class ReferralApiService {
  /**
   * Submit a new referral payload to the backend API endpoint
   */
  public async submitReferral(
    data: ReferralFormData
  ): Promise<ApiResponse<ReferralSuccessData>> {
    const response = await fetch("/api/referral", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result: ApiResponse<ReferralSuccessData> = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || result.error || "Failed to submit referral"
      );
    }

    return result;
  }
}

export const referralApiService = new ReferralApiService();
