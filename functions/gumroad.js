export async function onRequestPost(context) {
  const { request, env } = context;

  const text = await request.text();
  const params = new URLSearchParams(text);
  const data = Object.fromEntries(params.entries());

  const email = data.email || data.purchaser_email;

  if (!email) {
    return new Response("Missing email", { status: 400 });
  }

  const brevoPayload = {
    email,
    listIds: [Number(env.BREVO_LIST_ID)],
    updateEnabled: true,
    attributes: {
      SOURCE: "Gumroad",
    },
  };

  const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": env.BREVO_API_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(brevoPayload),
  });

  const brevoText = await brevoRes.text();

  if (!brevoRes.ok) {
    return new Response(`Brevo error: ${brevoText}`, { status: 500 });
  }

  return new Response("OK", { status: 200 });
}
