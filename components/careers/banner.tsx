import type * as React from "react"

export function CareersBanner() {
  // Local token overrides for banner only:
  // #006FFD (primary) ≈ hsl(214 100% 50%), #004297 (accent) ≈ hsl(214 100% 30%)
  const themeVars = {
    ["--primary" as any]: "214 100% 50%",
    ["--primary-foreground" as any]: "0 0% 100%",
    ["--accent" as any]: "214 100% 30%",
  } as React.CSSProperties

  return (
    <section
      style={themeVars}
      className="relative w-full rounded-xl bg-primary text-primary-foreground"
      aria-labelledby="careers-hero-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24">
        <h1 id="careers-hero-title" className="text-balance text-3xl font-bold leading-tight md:text-5xl">
          Build your future with us
        </h1>
        <p className="mt-3 text-sm leading-6 opacity-90 md:mt-4 md:text-lg md:leading-relaxed">
          Explore roles by department, type, and location — then apply in minutes.
        </p>
      </div>
      <div aria-hidden="true" className="h-2 w-full" style={{ backgroundColor: "hsl(var(--accent))" }} />
    </section>
  )
}

export default CareersBanner
