import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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

type EnrollContextValue = { openEnroll: (course?: string) => void };

const EnrollContext = createContext<EnrollContextValue>({ openEnroll: () => {} });

export const useEnroll = () => useContext(EnrollContext);

/**
 * Enrollment submission handler.
 * Swap this single function later for email, Google Sheets, CRM or a backend API.
 */
async function submitEnrollment(payload: Record<string, string>) {
  console.info("Enrollment submission", payload);
  await new Promise((resolve) => setTimeout(resolve, 500));
}

export function EnrollProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  const [schedule, setSchedule] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const openEnroll = useCallback((preselected?: string) => {
    setDone(false);
    setCourse(preselected ?? "");
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openEnroll }), [openEnroll]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    await submitEnrollment({
      fullName: String(data.get("fullName") ?? ""),
      email: String(data.get("email") ?? ""),
      mobile: String(data.get("mobile") ?? ""),
      course,
      batch,
      timing: String(data.get("timing") ?? ""),
      schedule,
      message: String(data.get("message") ?? ""),
    });
    setSubmitting(false);
    setDone(true);
    form.reset();
  };

  return (
    <EnrollContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-primary/30 bg-popover sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Enroll with <span className="text-gradient-gold">AUM IT</span>
            </DialogTitle>
            <DialogDescription>
              Share your details and our team will help you choose the right batch.
            </DialogDescription>
          </DialogHeader>

          {done ? (
            <div className="py-8 text-center">
              <CheckCircle2 className="mx-auto size-14 text-primary" />
              <p className="mt-6 text-lg leading-relaxed font-medium">
                Thank you for your interest in AUM IT Training Institute. Our team will contact you
                shortly.
              </p>
              <Button variant="gold" size="lg" className="mt-8" onClick={() => setOpen(false)}>
                CLOSE
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="fullName" required placeholder="Your full name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="enroll-email">Email</Label>
                <Input
                  id="enroll-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input id="mobile" name="mobile" required placeholder="+91 00000 00000" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="enroll-course">Course Interested In</Label>
                <Select value={course} onValueChange={setCourse}>
                  <SelectTrigger id="enroll-course">
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
              <div className="grid gap-2">
                <Label htmlFor="batch">Preferred Batch</Label>
                <Select value={batch} onValueChange={setBatch}>
                  <SelectTrigger id="batch">
                    <SelectValue placeholder="Select batch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Morning">Morning</SelectItem>
                    <SelectItem value="Afternoon">Afternoon</SelectItem>
                    <SelectItem value="Evening">Evening</SelectItem>
                    <SelectItem value="Night">Night</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="timing">Preferred Timing</Label>
                <Input id="timing" name="timing" placeholder="e.g. 7:00 PM – 8:30 PM" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="schedule">Weekdays / Weekends</Label>
                <Select value={schedule} onValueChange={setSchedule}>
                  <SelectTrigger id="schedule">
                    <SelectValue placeholder="Select schedule" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Weekdays">Weekdays</SelectItem>
                    <SelectItem value="Weekends">Weekends</SelectItem>
                    <SelectItem value="Flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="enroll-message">Message</Label>
                <Textarea
                  id="enroll-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your goals or questions"
                />
              </div>
              <Button
                type="submit"
                variant="gold"
                size="lg"
                disabled={submitting}
                className="sm:col-span-2"
              >
                {submitting ? "SUBMITTING..." : "SUBMIT ENROLLMENT"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </EnrollContext.Provider>
  );
}
