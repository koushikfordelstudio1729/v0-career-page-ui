import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ThankYouPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-20">
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-pretty text-primary">Thank you for your application!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            We’ve received your application. A confirmation email would be sent automatically in a real setup. Our team
            will review your profile and get back to you soon.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button asChild>
              <Link href="/careers">Back to Job Listings</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
