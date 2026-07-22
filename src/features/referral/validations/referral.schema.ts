import { z } from "zod";

export const referralSchema = z
  .object({
    referrerName: z
      .string()
      .min(2, { message: "Referrer name must be at least 2 characters" })
      .max(50, { message: "Referrer name is too long" }),
    referrerEmail: z
      .string()
      .email({ message: "Please enter a valid referrer email address" }),
    refereeName: z
      .string()
      .min(2, { message: "Referee name must be at least 2 characters" })
      .max(50, { message: "Referee name is too long" }),
    refereeEmail: z
      .string()
      .email({ message: "Please enter a valid referee email address" }),
    program: z
      .string()
      .min(1, { message: "Please select a target program" }),
    notes: z.string().optional(),
  })
  .refine((data) => data.referrerEmail !== data.refereeEmail, {
    message: "Referee email cannot be the same as referrer email",
    path: ["refereeEmail"],
  });

export type ReferralFormData = z.infer<typeof referralSchema>;
