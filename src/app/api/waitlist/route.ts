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
    const response = await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScpRaMZA3qjIFxPofvSyAh28NjLmf0rdGpB9L6AS_UEczubMw/formResponse",
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok && response.status !== 0) {
      console.error("Google Forms responded with status:", response.status);
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
