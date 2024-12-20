import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Store data in db
    const newMessage = {
      email,
      name,
      message,
    };

    // Database connection
    let client;
    try {
      client = await MongoClient.connect(process.env.DATABASE_URL); // Assign the result to client
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Couldn't connect to database" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      console.error(error);
      client.close();
      res.status(500).json({ message: "Storing message failed" });
      return;
    }

    client.close();

    res.status(200).json({
      message: "Message stored successfully",
      message: newMessage,
    });
  }
}
