import { ContactForm } from "@/components/contact/contact-form";
import Head from "next/head";
import React from "react";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </>
  );
}
