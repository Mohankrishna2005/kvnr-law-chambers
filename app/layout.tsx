import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
  {/* Bar Council Disclaimer */}
  <div className="bg-gray-900 text-white text-xs text-center p-2">
    As per the rules of the Bar Council of India, this website does not advertise or solicit work.
    The information provided is for general awareness only.
  </div>

  {/* Header */}
  <header className="border-b bg-white sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <h1 className="text-2xl font-heading font-bold">
        KVNR Law Chambers
      </h1>

      <nav className="space-x-6 text-sm font-medium">
        <a href="/" className="hover:text-blue-700">Home</a>
        <a href="#practice" className="hover:text-blue-700">Practice Areas</a>
        <a href="/consult" className="hover:text-blue-700">Consultation</a>
      </nav>
    </div>
  </header>

  <main>{children}</main>
</body>

