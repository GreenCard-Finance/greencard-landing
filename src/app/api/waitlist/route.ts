import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const getEmailHtml = (firstName: string) => `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Welcome to GreenCard Finance</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse:collapse;}
</style>
<![endif]-->
<style>
  :root { color-scheme: light; supported-color-schemes: light; }
  body, table, td { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
</style>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4;" bgcolor="#f4f4f4">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;" bgcolor="#f4f4f4">
<tr>
<td align="center" style="padding:24px 16px;">

<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#ffffff;" bgcolor="#ffffff">

  <tr>
    <td align="center" style="background-color:#000000; padding:32px 40px;" bgcolor="#000000">
      <img src="https://www.greencardfinance.com/images/logo-green.svg" alt="GreenCard Finance" width="140" style="display:block; border:0; outline:none; text-decoration:none;" />
    </td>
  </tr>

  <tr>
    <td align="center" style="padding:40px 40px 24px; background-color:#ffffff;" bgcolor="#ffffff">
      <table role="presentation" cellpadding="0" cellspacing="0">
        <tr>
          <td style="background-color:#EAF6EF; color:#2E8B57; font-family: Arial, sans-serif; font-size:12px; font-weight:700; letter-spacing:0.5px; padding:6px 14px; border-radius:100px; text-transform:uppercase;" bgcolor="#EAF6EF">
            You're on the list
          </td>
        </tr>
      </table>
      <div style="height:20px; line-height:20px; font-size:1px;">&nbsp;</div>
      <div style="font-family: Arial, sans-serif; font-size:26px; line-height:1.3; color:#1a1a1a; font-weight:700;">
        Welcome to GreenCard Finance, ${firstName}!
      </div>
      <div style="height:12px; line-height:12px; font-size:1px;">&nbsp;</div>
      <div style="font-family: Arial, sans-serif; font-size:15px; line-height:1.6; color:#555555;">
        Thanks for joining the waitlist. We're building a clearer, simpler way to handle foreign online payments and you'll be one of the first to know when we launch.
      </div>
    </td>
  </tr>

  <tr>
    <td style="padding:0 40px; background-color:#ffffff;" bgcolor="#ffffff">
      <div style="border-top:1px solid #eeeeee; font-size:1px; line-height:1px;">&nbsp;</div>
    </td>
  </tr>

  <tr>
    <td style="padding:32px 40px; background-color:#ffffff;" bgcolor="#ffffff">
      <div style="font-family: Arial, sans-serif; font-size:13px; font-weight:700; letter-spacing:0.5px; text-transform:uppercase; color:#2E8B57; margin:0 0 16px;">
        What happens next
      </div>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
        <tr>
          <td width="28" valign="top" style="padding-top:2px;">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td width="20" height="20" align="center" valign="middle" style="background-color:#2E8B57; border-radius:50%; color:#ffffff; font-family: Arial, sans-serif; font-size:11px; font-weight:700;" bgcolor="#2E8B57">1</td>
              </tr>
            </table>
          </td>
          <td style="font-family: Arial, sans-serif; font-size:14px; line-height:1.5; color:#333333; padding-left:8px;">
            We'll email you as soon as early access opens up.
          </td>
        </tr>
      </table>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
        <tr>
          <td width="28" valign="top" style="padding-top:2px;">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td width="20" height="20" align="center" valign="middle" style="background-color:#2E8B57; border-radius:50%; color:#ffffff; font-family: Arial, sans-serif; font-size:11px; font-weight:700;" bgcolor="#2E8B57">2</td>
              </tr>
            </table>
          </td>
          <td style="font-family: Arial, sans-serif; font-size:14px; line-height:1.5; color:#333333; padding-left:8px;">
            If you shared your WhatsApp details, we may reach out to add you to our community.
          </td>
        </tr>
      </table>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td width="28" valign="top" style="padding-top:2px;">
            <table role="presentation" cellpadding="0" cellspacing="0">
              <tr>
                <td width="20" height="20" align="center" valign="middle" style="background-color:#2E8B57; border-radius:50%; color:#ffffff; font-family: Arial, sans-serif; font-size:11px; font-weight:700;" bgcolor="#2E8B57">3</td>
              </tr>
            </table>
          </td>
          <td style="font-family: Arial, sans-serif; font-size:14px; line-height:1.5; color:#333333; padding-left:8px;">
            Follow along on Instagram for behind-the-scenes progress.
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td align="center" style="padding:0 40px 40px; background-color:#ffffff;" bgcolor="#ffffff">
      <table role="presentation" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="background-color:#2E8B57; border-radius:100px;" bgcolor="#2E8B57">
            <a href="https://www.instagram.com/usegreencard" style="display:inline-block; color:#ffffff; text-decoration:none; font-family: Arial, sans-serif; font-size:14px; font-weight:600; padding:14px 32px;">
              Follow us on Instagram
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td align="center" style="background-color:#000000; padding:28px 40px;" bgcolor="#000000">
      <div style="font-family: Arial, sans-serif; font-size:12px; color:#999999; margin:0 0 8px;">
        © 2026 GreenCard Finance. All rights reserved.
      </div>
      <div style="font-family: Arial, sans-serif; font-size:12px; color:#666666;">
        You're receiving this because you joined our waitlist.
      </div>
    </td>
  </tr>

</table>

</td>
</tr>
</table>
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
      try {
        await resend.emails.send({
          from: "GreenCard Finance <hello@greencardfinance.com>",
          to: email,
          subject: "You're on the GreenCard Finance waitlist!",
          html: getEmailHtml(firstName),
        });

        // if (error) {
        //   console.error("Resend returned an error:", error);
        // } else {
        //   console.log("Email sent successfully:", data);
        // }
      } catch (emailErr) {
        // console.error("Failed to send confirmation email (threw):", emailErr);
      }
    } catch (emailErr) {
      // console.error("Failed to send confirmation email:", emailErr);
    }

    return Response.json({ success: true });
  } catch (err) {
    // console.error("Failed to submit to Google Forms:", err);
    return Response.json(
      { success: false, error: "Failed to submit form" },
      { status: 500 },
    );
  }
}
