import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { allCourseNames } from "@/data/courses";

/**
 * Enquiry submission handler.
 * Replace this single function to connect email, Google Sheets, CRM or a backend API.
 */
async function submitEnquiry(payload: Record<string, string>) {
  console.info("Enquiry submission", payload);
  await new Promise((resolve) => setTimeout(resolve, 500));
}

export function ContactForm() {
  const [course, setCourse] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    await submitEnquiry({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      course,
      message: String(data.get("message") ?? ""),
    });
    setSubmitting(false);
    setDone(true);
    form.reset();
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card grid gap-5 rounded-2xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" required placeholder="+91 00000 00000" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="course">Interested Course</Label>
          <Select value={course} onValueChange={setCourse}>
            <SelectTrigger id="course">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              {allCourseNames.map((name) => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} placeholder="How can we help you?" />
      </div>
      <Button type="submit" variant="gold" size="lg" disabled={submitting}>
        <Send className="size-4" />
        {submitting ? "SUBMITTING..." : "SUBMIT ENQUIRY"}
      </Button>
      {done ? (
        <p className="rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-primary">
          Thank you for your interest in AUM IT Training Institute. Our team will contact you
          shortly.
        </p>
      ) : null}
    </form>
  );
}
