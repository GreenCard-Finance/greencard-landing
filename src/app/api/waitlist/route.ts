export async function POST(request: Request) {
  const { name, email } = await request.json();

  const formData = new URLSearchParams();
  formData.append("entry.1568036490", name);
  formData.append("entry.819855442", email);

  await fetch(
    "https://docs.google.com/forms/d/e/1FAIpQLScpRaMZA3qjIFxPofvSyAh28NjLmf0rdGpB9L6AS_UEczubMw/formResponse",
    {
      method: "POST",
      body: formData,
      mode: "no-cors",
    },
  );

  return Response.json({ success: true });
}
