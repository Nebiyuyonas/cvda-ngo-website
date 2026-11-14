import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Common Vision for Development Association (CVDA) in Addis Ababa, Ethiopia.",
};

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-heading" className="bg-green">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <h1 id="contact-heading" className="text-paper">Contact us</h1>
          <p className="mt-6 max-w-prose text-xl text-paper">
            Questions about our work, partnerships, or supporting CVDA? Send us a message.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 lg:grid-cols-[3fr_2fr]">
        <section aria-labelledby="form-heading">
          <h2 id="form-heading">Send a message</h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </section>

        <section aria-labelledby="details-heading">
          <h2 id="details-heading">Our details</h2>
          <address className="mt-8 space-y-5 not-italic">
            <p className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-green" />
              <span>
                <span className="block font-bold">Address</span>
                Addis Ababa, Ethiopia
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-green" />
              <span>
                <span className="block font-bold">Email</span>
                <a href="mailto:commonvision@ethionet.et" className="text-green underline underline-offset-4">
                  commonvision@ethionet.et
                </a>
              </span>
            </p>
          </address>
          <div className="mt-10 rounded-md bg-green-tint p-6">
            <h3>Looking for a job?</h3>
            <p className="mt-2 text-base">See what it is like to work at CVDA.</p>
            <div className="mt-5">
              <CTAButton href="/careers" variant="outline">View careers</CTAButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}