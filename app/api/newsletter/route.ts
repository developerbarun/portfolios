import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || "";

export async function POST(request: NextRequest) {
  if (!MONGODB_URI) {
    return NextResponse.json(
      { error: "MongoDB connection string not configured" },
      { status: 500 },
    );
  }

  try {
    const body = await request.json();
    const { email } = body;

    // Validation
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Connect to MongoDB
    const client = new MongoClient(MONGODB_URI);
    await client.connect();

    const db = client.db("portfolio");
    const collection = db.collection("newsletter_subscriptions");

    // Check if email already exists
    const existingEmail = await collection.findOne({ email });

    if (existingEmail) {
      client.close();
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 400 },
      );
    }

    // Add email to collection
    await collection.insertOne({
      email,
      subscribedAt: new Date(),
      ip:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip"),
    });

    client.close();

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to newsletter" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
