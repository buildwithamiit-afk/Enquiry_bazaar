import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, issueType, timezone, preferredSlot, notes } = body;

    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { error: "Name and at least one contact method (Phone or Email) are required." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
          body: JSON.stringify({
            timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            name,
            phone: phone || "",
            email: email || "",
            businessName: `Host Consultation (${issueType || "General"})`,
            service: `Hosting & Email Consultation - ${issueType || "Setup"} [Timezone: ${timezone || "Auto"}, Slot: ${preferredSlot || "Flexible"}]`,
            city: timezone || "Global",
            message: notes || `Requested 15-min call for ${issueType}. Preferred Slot: ${preferredSlot}`,
            source: "Hosting Guidance Booking Form",
          }),
        });
      } catch (err) {
        console.error("Failed to forward hosting booking lead to webhook:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Consultation booked successfully. Our technical team will reach out to confirm your session.",
    });
  } catch (error) {
    console.error("Error in hosting-booking API:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
