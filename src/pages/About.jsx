import React from "react";
import {
  FaTruck,
  FaShieldAlt,
  FaRecycle,
  FaHeart,
  FaStar,
  FaUsers,
  FaShoppingBag,
  FaGlobe,
} from "react-icons/fa";
import {
  MdGroups,
  MdLocalShipping,
  MdHandshake,
  MdDiversity3,
} from "react-icons/md";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-2xl py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Redefining online shopping with quality, sustainability, and
            customer-first values since 2015
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Our Story */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              From Garage to Global:{" "}
              <span className="text-blue-600">Our Journey</span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Founded in 2015 by three college friends, StyleCart began as a
                small online boutique selling handmade accessories. What started
                as a passion project quickly grew into one of the
                fastest-growing e-commerce platforms.
              </p>
              <p className="text-lg">
                Today, we serve over 2 million customers worldwide, offering
                carefully curated products that blend quality, style, and
                sustainability. Our mission remains unchanged: to make premium
                products accessible while maintaining ethical business
                practices.
              </p>
              <p className="text-lg">
                Every product in our catalog undergoes rigorous quality checks
                and sustainability assessments. We believe in transparent
                pricing, fair wages, and minimal environmental impact.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-96 md:h-125 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Our team working together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2M+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-blue-600">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaShieldAlt className="w-8 h-8" />,
                title: "Quality First",
                desc: "Every product undergoes 3-stage quality checks",
              },
              {
                icon: <FaRecycle className="w-8 h-8" />,
                title: "Sustainability",
                desc: "Eco-friendly packaging & carbon-neutral shipping",
              },
              {
                icon: <FaHeart className="w-8 h-8" />,
                title: "Customer Love",
                desc: "24/7 support with 30-day hassle-free returns",
              },
              {
                icon: <MdHandshake className="w-8 h-8" />,
                title: "Fair Trade",
                desc: "Ethical sourcing & fair wages for all partners",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2M+", label: "Happy Customers", icon: <FaUsers /> },
              { number: "50K+", label: "Products", icon: <FaShoppingBag /> },
              { number: "120+", label: "Countries Served", icon: <FaGlobe /> },
              { number: "4.8★", label: "Average Rating", icon: <FaStar /> },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-blue-600 text-3xl mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Meet Our <span className="text-blue-600">Leadership</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "CEO & Founder",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Maria Garcia",
                role: "Head of Operations",
                img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "David Chen",
                role: "Product Director",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 mt-3">
                    Passionate about creating exceptional shopping experiences
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Be part of our journey to revolutionize online shopping. Sign up for
            exclusive offers and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="grow px-6 py-3 rounded-full text-white  outline focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
