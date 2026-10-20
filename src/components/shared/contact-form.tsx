"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { Check, Loader2, Send } from "lucide-react";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs text-error">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "", company: "" },
  });

  // The site is static (GitHub Pages), so the form opens the visitor's email app
  // with the message filled in instead of posting to a server.
  const onSubmit = async (values: ContactValues) => {
    setServerError(null);
    if (values.company) return; // honeypot filled: a bot
    const subject = values.subject || `Portfolio enquiry from ${values.name}`;
    const body = `${values.message}

— ${values.name} (${values.email})`;
    window.location.assign(
      `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
    setSent(true);
    reset();
  };

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex min-h-[22rem] flex-col items-center justify-center gap-4 text-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="flex size-16 items-center justify-center rounded-full border border-success/40 bg-success-soft text-success"
          >
            <Check className="size-8" />
          </motion.span>
          <p className="text-lg font-semibold text-fg-strong">
            Your email app should open now
          </p>
          <p className="max-w-xs text-sm text-fg-muted">
            Press send there and I&apos;ll get back to you soon. If nothing opened, email me at {siteConfig.email}.
          </p>
          <Button variant="ghost" size="sm" onClick={() => setSent(false)}>
            Write another message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name")}
              />
              <FieldError id="name-error" message={errors.name?.message} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
              />
              <FieldError id="email-error" message={errors.email?.message} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="subject">
              Subject <span className="text-fg-subtle">(optional)</span>
            </Label>
            <Input id="subject" placeholder="What's this about?" {...register("subject")} />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell me a bit about what you're working on..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              {...register("message")}
            />
            <FieldError id="message-error" message={errors.message?.message} />
          </div>

          {/* Honeypot — visually hidden, off the tab order */}
          <div aria-hidden className="sr-only">
            <label htmlFor="company">Leave this field empty</label>
            <input
              id="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("company")}
            />
          </div>

          {serverError && (
            <p role="alert" className="text-sm text-error">
              {serverError}
            </p>
          )}

          <Button type="submit" size="lg" disabled={isSubmitting} className="mt-1">
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" /> Opening...
              </>
            ) : (
              <>
                <Send /> Send message
              </>
            )}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
