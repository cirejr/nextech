import { ContactFormEmail } from "@/components/global/contact-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  console.log("formData", email, message);
  try {
    const { data, error } = await resend.emails.send({
      from: "Vetra <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Contact Form Submission",
      react: ContactFormEmail({ email, message }),
    });

    console.log(data, error);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
