export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-2 h-screen">
      <h1 className="text-3xl text-primary font-bold mb-3 sm:mb-6 text-center">
        Contact Us
      </h1>
      <div className="bg-white rounded-2xl shadow shadow-secondary p-5 mt-5 sm:mt-20">
        <h2 className="text-primary font-medium text-lg">Send us a message</h2>
        <p className="text-gray-700 mb-8">
          Have questions or feedback? Reach out to us using the form below or
          send an email to{" "}
          <span className="text-secondary font-semibold">
            support@shopora.com
          </span>
          .
        </p>

        <form className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:border-primary outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:border-primary outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-secondary cursor-pointer transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
