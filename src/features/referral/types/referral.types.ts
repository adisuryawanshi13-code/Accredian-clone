export interface ReferralPayload {
  referrerName: string;
  referrerEmail: string;
  refereeName: string;
  refereeEmail: string;
  program: string;
  notes?: string;
}

export interface ReferralSuccessData {
  referrerName: string;
  referrerEmail: string;
  refereeName: string;
  refereeEmail: string;
  program: string;
  rewardAmount: string;
  createdAt: string;
}

export interface SubmittedReferralState {
  refereeEmail: string;
  referralId?: string;
}
