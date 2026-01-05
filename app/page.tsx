export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
            KVNR Law Chambers
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            25+ Years of Experience in Criminal and Civil Matters
          </p>

          <p className="mt-6 max-w-2xl mx-auto text-base text-muted-foreground">
            Trusted legal representation across Andhra Pradesh, delivering
            principled advocacy, strategic litigation, and client-focused legal
            solutions.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="container mx-auto px-6 py-14">
        <h2 className="text-2xl font-heading font-semibold mb-8">
          Core Practice Domains
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold text-lg">Criminal Law</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Defence and prosecution in criminal matters including trials,
              appeals, bail, and anticipatory bail.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold text-lg">Civil Law</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Property disputes, injunctions, recovery suits, and civil
              litigation.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold text-lg">Family Law</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Divorce, maintenance, custody, domestic violence, and mediation.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold text-lg">Corporate & Commercial Law</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Contracts, compliance, legal advisory, and commercial disputes.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold text-lg">Constitutional Law</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Writ petitions, PILs, and matters involving fundamental rights.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} KVNR Law Chambers. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
