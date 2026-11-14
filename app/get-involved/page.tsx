import type { Metadata } from "next";
import { Heart, Handshake, Users } from "lucide-react";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Donate to CVDA, partner with us, or volunteer with our community programs.",
};

// TODO: Replace every placeholder below with CVDA's real bank details before launch.
const bankDetails = [
  { label: "Account name", value: "[Account name]" },
  { label: "Bank", value: "[Bank name and branch]" },
  { label: "Account number", value: "[Account number]" },
  { label: "SWIFT / BIC code", value: "[SWIFT code]" },
  { label: "Currency", value: "[ETB / USD]" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <section aria-labelledby="involved-heading" className="bg-green">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <h1 id="involved-heading" className="max-w-3xl text-paper">Get involved</h1>
          <p className="mt-6 max-w-prose text-xl text-paper">
            There are three ways to support communities across Ethiopia: give, partner, or volunteer.
          </p>
        </div>
      </section>

      <section id="donate" aria-labelledby="donate-heading" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Heart aria-hidden="true" className="h-9 w-9 text-green" />
            <h2 id="donate-heading" className="mt-4">Donate</h2>
            <p className="mt-4 max-w-prose">
              Your gift supports CVDA's community-based work in health, education, agriculture, and environmental conservation. You can give by bank transfer using the details here.
            </p>
            <p className="mt-4 max-w-prose">
              After you send a transfer, please email us so we can confirm that we received it.
            </p>
            <div className="mt-8">
              <CTAButton href="mailto:commonvision@ethionet.et?subject=Donation">Tell us about your donation</CTAButton>
            </div>
          </div>

          <div className="rounded-md bg-green-tint p-7">
            <h3>Bank transfer details</h3>
            <dl className="mt-5 space-y-4">
              {bankDetails.map((b) => (
                <div key={b.label}>
                  <dt className="text-base font-bold">{b.label}</dt>
                  <dd className="font-heading text-xl text-green">{b.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="partner" aria-labelledby="partner-heading" className="bg-green-tint">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Handshake aria-hidden="true" className="h-9 w-9 text-green" />
          <h2 id="partner-heading" className="mt-4">Partner with us</h2>
          <p className="mt-4 max-w-prose">
            We work with donors, governments, and international organizations to deliver health, livelihood, and community programs. If your organization would like to work with us, write to us about your goals and the areas you support.
          </p>
          <div className="mt-8">
            <CTAButton href="mailto:commonvision@ethionet.et?subject=Partnership%20inquiry">Start a conversation</CTAButton>
          </div>
        </div>
      </section>

      <section id="volunteer" aria-labelledby="volunteer-heading" className="mx-auto max-w-6xl px-5 py-20">
        <Users aria-hidden="true" className="h-9 w-9 text-green" />
        <h2 id="volunteer-heading" className="mt-4">Volunteer</h2>
        <p className="mt-4 max-w-prose">
          Volunteers are at the heart of our programs. 1,761 community volunteers have worked with CVDA so far. To ask about opportunities near you, send us a message.
        </p>
        <div className="mt-8">
          <CTAButton href="mailto:commonvision@ethionet.et?subject=Volunteering" variant="outline">Ask about volunteering</CTAButton>
        </div>
      </section>
    </>
  );
}