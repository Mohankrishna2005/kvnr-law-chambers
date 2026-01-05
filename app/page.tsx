export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-12">

      {/* HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-heading font-bold mb-4">
          KVNR Law Chambers
        </h1>

        <p className="text-lg font-medium mb-2">
          25+ Years of Experience in Criminal and Civil Matters
        </p>

        <p className="text-gray-600">
          Trusted legal representation across Andhra Pradesh,
          delivering principled advocacy, strategic litigation,
          and client-focused legal solutions.
        </p>
      </section>

      {/* PRACTICE AREAS */}
      <section id="practice" className="mt-16">
        <h2 className="text-3xl font-heading font-bold text-center mb-10">
          Core Practice Domains
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2">Criminal Law</h3>
            <p className="text-sm text-gray-600">
              Defence and prosecution including trials, appeals,
              bail, and anticipatory bail.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2">Civil Law</h3>
            <p className="text-sm text-gray-600">
              Property disputes, injunctions, recovery suits,
              and civil litigation.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2">Family Law</h3>
            <p className="text-sm text-gray-600">
              Divorce, maintenance, custody, domestic violence,
              and mediation.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2">Corporate & Commercial Law</h3>
            <p className="text-sm text-gray-600">
              Contracts, compliance, advisory services,
              and commercial disputes.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-2">Constitutional Law</h3>
            <p className="text-sm text-gray-600">
              Writ petitions, PILs, and matters involving
              fundamental rights.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 border-t pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} KVNR Law Chambers.  
        All information is provided as per Bar Council of India guidelines.
      </footer>

    </div>
  );
}
