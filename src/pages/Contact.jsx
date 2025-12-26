export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-2 min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-2xl py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Have questions or feedback? Reach out to us using the form below or
            send an email to{" "}
            <span className="text-gray-950 font-semibold">
              support@shopora.com
            </span>
          </p>
        </div>
      </section>
      <div className="bg-white ring ring-purple-800 rounded-2xl p-5 my-5 sm:mt-20">
        <h2 className="text-primary font-medium text-lg mb-5">
          Send us a message
        </h2>
        <form className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-xl border border-gray-300 focus:border-primary outline-none"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:border-primary outline-none"
          />
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-3 rounded-xl hover:bg-purple-500 cursor-pointer transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
