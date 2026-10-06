"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Copy, Mail, Plus } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { CONTACT_INFO } from "@/data/company";
import { Reveal } from "@/components/Reveal";
import styles from "@/app/contact/contact.module.css";

type Inquiry = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};
type FieldErrors = Partial<Record<keyof Inquiry, string>>;

const faqs = [
  {
    question: "I have an idea, but no technical brief. Can we still talk?",
    answer: "Absolutely. Tell us who the product is for, the problem it should solve, and what success would look like. We can work through the technical details together.",
  },
  {
    question: "Can you work with our existing product or team?",
    answer: "Yes. Share your current stack, where the team needs support, and any delivery constraints. We can discuss improving an existing product, building new features, or supporting your engineers.",
  },
  {
    question: "What should I include in my project inquiry?",
    answer: "A short description of your goals, an approximate timeline, and any useful references are a great start. A budget range helps us suggest a realistic scope, but it is optional.",
  },
  {
    question: "How do we agree on scope and cost?",
    answer: "We start by understanding your requirements and priorities. From there, we can discuss deliverables, milestones, and an estimate before you decide to move forward.",
  },
];

export function Contact({ preselectedService }: { preselectedService?: string }) {
  const initialService = SERVICES_DATA.find(
    (service) => service.name === preselectedService || service.id === preselectedService,
  )?.name ?? "";
  const [formData, setFormData] = useState<Inquiry>({
    name: "", email: "", company: "", service: initialService, budget: "", message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [prepared, setPrepared] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const summaryHeading = useRef<HTMLHeadingElement>(null);
  const summaryText = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (prepared) summaryHeading.current?.focus();
  }, [prepared]);

  function updateField(field: keyof Inquiry, value: string) {
    setFormData((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FieldErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.service) nextErrors.service = "Choose a service, or select Help me decide.";
    if (!formData.message.trim()) nextErrors.message = "Tell us a little about your project.";
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }
    setCopyStatus("");
    setPrepared(true);
  }

  const inquiryText = [
    "Hello Alhawaij Tech,",
    "",
    "I'd like to discuss a project with your team.",
    "",
    `Name: ${formData.name.trim()}`,
    `Email: ${formData.email.trim()}`,
    `Company: ${formData.company.trim() || "Not specified"}`,
    `Service: ${formData.service}`,
    `Budget (USD): ${formData.budget || "Let's discuss"}`,
    "",
    "About the project:",
    formData.message.trim(),
  ].join("\n");
  const emailHref = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(`Project inquiry: ${formData.service}`)}&body=${encodeURIComponent(inquiryText)}`;

  async function copyInquiry() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(inquiryText);
      setCopyStatus("Inquiry copied. Paste it into an email to our team.");
    } catch {
      summaryText.current?.focus();
      summaryText.current?.select();
      setCopyStatus("Select and copy the highlighted inquiry, then paste it into your email.");
    }
  }

  const fieldProps = (field: keyof Inquiry) => ({
    id: `contact-${field}`,
    name: field,
    value: formData[field],
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => updateField(field, event.target.value),
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
  });

  function fieldError(field: keyof Inquiry) {
    return errors[field] ? <p className={styles.error} id={`contact-${field}-error`}>{errors[field]}</p> : null;
  }

  return (
    <>
      <section className={`site-container ${styles.contactLayout}`} aria-label="Start a project">
        <Reveal className={styles.contactAside}>
          <div className={styles.asideMark} aria-hidden="true"><ArrowDownRight size={54} strokeWidth={1.3} /></div>
          <p className="eyebrow">A good place to start</p>
          <h2 className={styles.asideTitle}>Big ambition.<br />A simple hello.</h2>
          <p className="body-copy">A fresh idea, a tricky challenge, or a product ready for its next chapter. We&apos;d love to hear about it.</p>
          <a className={styles.emailLink} href={`mailto:${CONTACT_INFO.email}`}>
            {CONTACT_INFO.email}<ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="label mb-2">Call us</dt>
              {CONTACT_INFO.phones.map((phone) => (
                <dd key={phone.href} className="text-[15px] leading-7"><a href={phone.href} className="transition-colors hover:text-brand">{phone.display}</a> <span className="text-sm text-muted">· {phone.label}</span></dd>
              ))}
            </div>
            {CONTACT_INFO.offices.map((office) => (
              <div key={office.label}>
                <dt className="label mb-2">{office.label} office</dt>
                <dd className="text-[15px] leading-7">{office.lines.map((line) => <span key={line} className="block">{line}</span>)}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.nextSteps}>
            <p className="eyebrow">What happens next</p>
            {[
              ["Share your idea", "A few details are all we need to start."],
              ["Find the right approach", "We discuss your goals, scope, and priorities."],
              ["Make a plan together", "Clear next steps, built around your project."],
            ].map(([title, description], index) => (
              <div className={styles.nextStep} key={title}>
                <span className={styles.stepNumber}>0{index + 1}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className={styles.formCard}>
          {prepared ? (
            <div className={styles.summary}>
              <span className={styles.summaryIcon}><Check size={25} aria-hidden="true" /></span>
              <p className="eyebrow">Ready for your inbox</p>
              <h2 ref={summaryHeading} tabIndex={-1}>Your inquiry is ready.</h2>
              <p className="body-copy">Review your draft below, then open your email app to send it to <strong>{CONTACT_INFO.email}</strong>.</p>
              <label htmlFor="inquiry-draft" className={styles.fieldLabel}>Your inquiry draft</label>
              <textarea id="inquiry-draft" ref={summaryText} className={styles.draft} readOnly value={inquiryText} rows={12} />
              <div className={styles.summaryActions}>
                <a href={emailHref} className="button-primary">Open email app <ArrowUpRight size={17} aria-hidden="true" /></a>
                <button type="button" className="button-secondary" onClick={copyInquiry}><Copy size={16} aria-hidden="true" /> Copy inquiry</button>
              </div>
              <p className={styles.formNote}>Nothing has been sent yet. You&apos;ll send the message from your email app. If it doesn&apos;t open, copy your inquiry and email us directly.</p>
              <p className={styles.copyStatus} aria-live="polite">{copyStatus}</p>
              <button type="button" className={`text-link ${styles.editButton}`} onClick={() => setPrepared(false)}>Edit your details <ArrowRight size={16} aria-hidden="true" /></button>
            </div>
          ) : (
            <form onSubmit={prepareInquiry} noValidate>
              <div className={styles.formHeading}>
                <h2>Tell us what you have in mind.</h2>
                <p>Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.</p>
              </div>
              {Object.keys(errors).some((key) => errors[key as keyof Inquiry]) && <p className={styles.errorNotice} role="alert">Please check the highlighted fields below.</p>}
              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label htmlFor="contact-name">Your name <span>*</span></label>
                  <input {...fieldProps("name")} type="text" autoComplete="name" placeholder="Alex Morgan" maxLength={120} required />
                  {fieldError("name")}
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email">Email address <span>*</span></label>
                  <input {...fieldProps("email")} type="email" autoComplete="email" placeholder="alex@company.com" maxLength={254} required />
                  {fieldError("email")}
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-company">Company <span className={styles.optional}>(optional)</span></label>
                  <input {...fieldProps("company")} type="text" autoComplete="organization" placeholder="Your company" maxLength={160} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-budget">Budget in USD <span className={styles.optional}>(optional)</span></label>
                  <select {...fieldProps("budget")}>
                    <option value="">Let&apos;s discuss</option>
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000–$15,000">$5,000–$15,000</option>
                    <option value="$15,000–$50,000">$15,000–$50,000</option>
                    <option value="$50,000+">$50,000+</option>
                  </select>
                </div>
                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label htmlFor="contact-service">What can we help with? <span>*</span></label>
                  <select {...fieldProps("service")} required>
                    <option value="" disabled>Select a service</option>
                    {SERVICES_DATA.map((service) => <option value={service.name} key={service.id}>{service.name}</option>)}
                    <option value="Help me decide">Help me decide</option>
                  </select>
                  {fieldError("service")}
                </div>
                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label htmlFor="contact-message">A little about your project <span>*</span></label>
                  <textarea {...fieldProps("message")} rows={5} placeholder="What are you looking to build? Tell us about your goals, timeline, or the challenge you're solving." maxLength={3000} required />
                  {fieldError("message")}
                </div>
              </div>
              <button type="submit" className={`button-primary ${styles.submitButton}`}>Prepare inquiry <ArrowUpRight size={18} aria-hidden="true" /></button>
              <p className={styles.formNote}><Mail size={15} aria-hidden="true" />This prepares an email draft for you to review and send.</p>
            </form>
          )}
        </Reveal>
      </section>

      <section className={`section-space ${styles.faqSection}`} aria-labelledby="faq-heading">
        <div className={`site-container ${styles.faqLayout}`}>
          <Reveal>
            <p className="eyebrow">A few things you might ask</p>
            <h2 className="section-title" id="faq-heading">Good questions.<br />Clear answers.</h2>
            <p className={`body-copy ${styles.faqIntro}`}>Every project starts somewhere.<br />Let&apos;s make that first step easy.</p>
          </Reveal>
          <Reveal delay={0.1}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.faq}>
                <summary>{faq.question}<Plus size={19} aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
