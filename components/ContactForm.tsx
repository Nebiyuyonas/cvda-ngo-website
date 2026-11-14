"use client";

import { useRef, useState } from "react";

const EMAIL = "commonvision@ethionet.et";

type Fields = "name" | "email" | "subject" | "message";
type Errors = Partial<Record<Fields, string>>;

const inputClass =
  "mt-2 block w-full rounded border-2 border-green/60 bg-white px-4 py-3 text-ink";

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const v = (k: Fields) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    if (!v("name")) next.name = "Enter your name.";
    if (!v("email")) next.email = "Enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(v("email")))
      next.email = "Enter an email address like name@example.org.";
    if (!v("subject")) next.subject = "Enter a subject.";
    if (!v("message")) next.message = "Enter your message.";

    setErrors(next);
    setStatus("");

    const firstInvalid = (Object.keys(next) as Fields[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // No server endpoint yet: open the visitor's email app with the message filled in.
    const body = `${v("message")}\n\n${v("name")}\n${v("email")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(v("subject"))}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with your message ready to send. If it does not, write to " + EMAIL + ".");
  }

  const field = (id: Fields, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label htmlFor={id} className="block font-bold">
        {label} <span className="font-normal">(required)</span>
      </label>
      <input
        id={id}
        name={id}
        required
        aria-invalid={errors[id] ? true : undefined}
        aria-describedby={errors[id] ? `${id}-error` : undefined}
        className={inputClass}
        {...props}
      />
      {errors[id] && (
        <p id={`${id}-error`} className="mt-2 font-bold text-[#8A1C1C]">{errors[id]}</p>
      )}
    </div>
  );

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6">
      {field("name", "Name", { autoComplete: "name" })}
      {field("email", "Email", { type: "email", autoComplete: "email" })}
      {field("subject", "Subject")}
      <div>
        <label htmlFor="message" className="block font-bold">
          Message <span className="font-normal">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 font-bold text-[#8A1C1C]">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex min-h-[48px] items-center justify-center rounded bg-ochre px-6 py-3 font-bold text-ink transition-colors hover:bg-ochre-dark"
      >
        Send message
      </button>

      <p role="status" aria-live="polite" className="text-base">{status}</p>
    </form>
  );
}