import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";

import { ApiRresponse } from "@/types/ApiResponse";
import { error } from "console";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiRresponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "user@gmail.com",
      subject: " HFeedback |Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: false, message: " Sent verification email" };
  } catch (emailError) {
    console.error("Error sending Verification Email", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
}
