import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const getEmailHtml = (firstName: string) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Welcome</title></head>
<body style="margin:0; padding:0; background-color:#f4f4f4;">
<div style="max-width:600px; margin:0 auto; background-color:#ffffff; font-family: -apple-system, 'Lato', Arial, sans-serif;">

  <div style="background-color:#000000; padding:32px 40px; text-align:center;">
    <img src="https://www.greencardfinance.com/images/GCF%20Alt%20Logo.png" alt="GreenCard Finance" width="140" style="display:block; margin:0 auto;" />
  </div>

  <div style="padding:40px 40px 24px; text-align:center;">
    <div style="display:inline-block; background-color:#EAF6EF; color:#2E8B57; font-size:12px; font-weight:600; letter-spacing:0.5px; padding:6px 14px; border-radius:100px; text-transform:uppercase; margin-bottom:20px;">
      You're on the list
    </div>
    <h1 style="font-size:26px; line-height:1.3; color:#1a1a1a; margin:0 0 12px; font-weight:700;">
      Welcome to GreenCard Finance, ${firstName}!
    </h1>
    <p style="font-size:15px; line-height:1.6; color:#555555; margin:0;">
      Thanks for joining the waitlist. We're building a clearer, simpler way to handle foreign online payments — and you'll be one of the first to know when we launch.
    </p>
  </div>

  <div style="padding:0 40px;">
    <hr style="border:none; border-top:1px solid #eeeeee; margin:0;" />
  </div>

  <div style="padding:32px 40px;">
    <p style="font-size:13px; font-weight:700; letter-spacing:0.5px; text-transform:uppercase; color:#2E8B57; margin:0 0 16px;">
      What happens next
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
      <tr>
        <td width="28" valign="top" style="padding-top:2px;">
          <div style="width:20px; height:20px; background-color:#2E8B57; border-radius:50%; text-align:center; line-height:20px; color:#ffffff; font-size:11px; font-weight:700;">1</div>
        </td>
        <td style="font-size:14px; line-height:1.5; color:#333333; padding-left:8px;">
          We'll email you as soon as early access opens up.
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
      <tr>
        <td width="28" valign="top" style="padding-top:2px;">
          <div style="width:20px; height:20px; background-color:#2E8B57; border-radius:50%; text-align:center; line-height:20px; color:#ffffff; font-size:11px; font-weight:700;">2</div>
        </td>
        <td style="font-size:14px; line-height:1.5; color:#333333; padding-left:8px;">
          If you shared your WhatsApp details, we may reach out to add you to our community.
        </td>
      </tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td width="28" valign="top" style="padding-top:2px;">
          <div style="width:20px; height:20px; background-color:#2E8B57; border-radius:50%; text-align:center; line-height:20px; color:#ffffff; font-size:11px; font-weight:700;">3</div>
        </td>
        <td style="font-size:14px; line-height:1.5; color:#333333; padding-left:8px;">
          Follow along on Instagram for behind-the-scenes progress.
        </td>
      </tr>
    </table>
  </div>

  <div style="padding:0 40px 40px; text-align:center;">
    <a href="https://www.instagram.com/usegreencard" style="display:inline-block; background-color:#2E8B57; color:#ffffff; text-decoration:none; font-size:14px; font-weight:600; padding:14px 32px; border-radius:100px;">
      Follow us on Instagram
    </a>
  </div>

  <div style="background-color:#000000; padding:28px 40px; text-align:center;">
    <p style="font-size:12px; color:#999999; margin:0 0 8px;">
      © 2026 GreenCard Finance. All rights reserved.
    </p>
    <p style="font-size:12px; color:#666666; margin:0;">
      You're receiving this because you joined our waitlist.
    </p>
  </div>

</div>
</body>
</html>
`;

export async function POST(request: Request) {
  const { firstName, lastName, email, whatsappUsername, whatsappNumber } =
    await request.json();

  if (!firstName || !lastName || !email) {
    return Response.json(
      { success: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  const formData = new URLSearchParams();
  formData.append("entry.1568036490", firstName);
  formData.append("entry.1002716864", lastName);
  formData.append("entry.819855442", email);
  if (whatsappUsername) {
    formData.append("entry.1767032127", whatsappUsername);
  }
  if (whatsappNumber) {
    formData.append("entry.550348207", whatsappNumber);
  }

  try {
    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScpRaMZA3qjIFxPofvSyAh28NjLmf0rdGpB9L6AS_UEczubMw/formResponse",
      {
        method: "POST",
        body: formData,
      },
    );

    try {
      await resend.emails.send({
        from: "GreenCard Finance <hello@greencardfinance.com>",
        to: email,
        subject: "You're on the GreenCard Finance waitlist!",
        html: getEmailHtml(firstName),
      });
    } catch (emailErr) {
      console.error("Failed to send confirmation email:", emailErr);
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Failed to submit to Google Forms:", err);
    return Response.json(
      { success: false, error: "Failed to submit form" },
      { status: 500 },
    );
  }
}
