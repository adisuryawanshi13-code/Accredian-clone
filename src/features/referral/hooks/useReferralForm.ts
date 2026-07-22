import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { referralSchema, ReferralFormData } from "../validations/referral.schema";
import { referralApiService } from "../services/referral.service";
import { SubmittedReferralState } from "../types/referral.types";

export interface UseReferralFormOptions {
  onClose?: () => void;
}

export function useReferralForm(options?: UseReferralFormOptions) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<SubmittedReferralState | null>(null);

  const formMethods = useForm<ReferralFormData>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      referrerName: "",
      referrerEmail: "",
      refereeName: "",
      refereeEmail: "",
      program: "Product Management",
    },
  });

  const onSubmit = async (data: ReferralFormData) => {
    try {
      const result = await referralApiService.submitReferral(data);

      toast.success("Referral Submitted Successfully!", {
        description: `Invitation sent to ${data.refereeEmail}. Reward ID: ${result.referralId}`,
      });

      setSubmittedData({
        refereeEmail: data.refereeEmail,
        referralId: result.referralId,
      });

      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Please check your input and try again.";
      toast.error("Referral Submission Failed", { description: msg });
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    formMethods.reset();
    if (options?.onClose) {
      options.onClose();
    }
  };

  return {
    isSubmitted,
    submittedData,
    formMethods,
    onSubmit: formMethods.handleSubmit(onSubmit),
    handleReset,
    isSubmitting: formMethods.formState.isSubmitting,
    errors: formMethods.formState.errors,
    register: formMethods.register,
  };
}
