import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, businessName, service, city, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    // If webhook URL is set in environment, forward payload to Google Apps Script / Sheet Webhook
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
          body: JSON.stringify({
            timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            name,
            phone,
            email: email || "",
            businessName: businessName || "",
            service: service || "Complete Digital Growth Setup",
            city: city || "",
            message: message || "",
            source: "Home Page Contact Form",
          }),
        });
      } catch (err) {
        console.error("Failed to forward lead to Google Sheet webhook:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead received successfully.",
    });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
