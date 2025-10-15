"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ApplyForm({ jobTitle }: { jobTitle: string }) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    // Simulate submit then redirect to thank-you page
    setTimeout(() => {
      router.push("/careers/thank-you")
    }, 700)
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <Card>
        <CardContent className="pt-6 grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" name="fullName" placeholder="Jane Doe" required />
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+1 555 000 1234" required />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="resume">Resume</Label>
            <Input
              id="resume"
              name="resume"
              type="file"
              accept="application/pdf,.doc,.docx"
              required
              aria-describedby="resume-help"
            />
            <p id="resume-help" className="text-xs text-muted-foreground">
              Accepted formats: PDF, DOC, DOCX
            </p>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              placeholder={`Briefly share why you're a great fit for ${jobTitle}`}
              className="min-h-32"
              required
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-end">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  )
}
