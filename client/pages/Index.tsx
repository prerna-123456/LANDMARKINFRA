import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
/* import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdPolicy } from "react-icons/md"; */

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - 20;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="absolute -top-10 left-0 w-full z-50 bg-transparent -ml-2 md:-ml-4">
        <div className="container mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[300px] h-[200px] rounded-lg flex items-center justify-center z-50">
                <a href="/">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-[300px] h-[200px] object-contain"
                  />
                </a>
              </div>
              {/* <div>
                <h1 className="font-serif text-lg font-bold text-gold-400">
                  LUXURIA
                </h1>
                <p className="text-xs text-gold-300">Luxury to cherish</p>
              </div> */}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {["About", "Projects", "Our Process", "Our Strengths", "Investment", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-gray-300 hover:text-gold-400 transition relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gold-400" />
              ) : (
                <Menu className="w-6 h-6 text-gold-400" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-white border-t border-gold-500/20 pt-4 flex flex-col gap-4">
              {["About", "Projects", "Our Process", "Our Strengths", "Investment", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-black hover:text-gold-400"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Smooth Slide Up */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <section
          id="home"
          className="relative h-screen overflow-hidden"
        >
          {/* Background Image */}
          <img
            src="/hero-bg.png"
            alt="Landmark Infra"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55"></div>

          {/* Golden Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center mt-0 md:mt-10">
            <div className="container mx-auto px-6 text-center max-w-5xl">

              {/* Desktop Badge */}
              <div className="hidden md:inline-block mb-8 px-5 py-2 bg-gold-500/15 border border-gold-500/30 rounded-full backdrop-blur-sm">
                <span className="text-gold-400 text-sm font-semibold">
                  ✨ Premium Luxury Living
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-serif text-5xl sm:text-4xl md:text-7xl font-bold text-white leading-tight mb-4 md:mb-6">
                Discover <span className="text-gold-400">Comfort</span>
                <br />
                Living
              </h1>

              {/* Description */}
              <p className="text-white/90 text-sm sm:text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 md:mb-10">
                Discover Landmark Infra, where vision meets excellence.
                We build modern homes and commercial spaces with quality,
                innovation, and trust, creating landmarks that stand the
                test of time.
              </p>

              {/* Buttons */}
              <div className="flex flex-row justify-center gap-3 flex-wrap">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-5 md:px-8 py-3 md:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition group"
                >
                  Explore Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>

                <button
                  onClick={() => scrollToSection("projects")}
                  className="border-2 border-gold-400 text-gold-300 hover:bg-gold-500/20 px-5 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition"
                >
                  View Projects
                </button>
              </div>

            </div>
          </div>
        </section>
      </motion.div>

      {/* About Section - Smooth Slide Up */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <section id="about" className="py-12 md:pt-28 md:pb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent"></div>
          <div className="container mx-auto px-8 md:px-12 relative z-10">
            <div className="grid md:grid-cols-2 md:gap-20 items-center">
              <div className="relative order-2 md:order-1">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/20 to-transparent rounded-3xl blur-xl"></div>
                <img
                  src="/about-image.jpeg"
                  alt="Modern Living Room"
                  className="relative w-full h-full rounded-3xl shadow-2xl object-cover"
                />
              </div>

              <div className="order-1 md:order-2">
                <div className="inline-block mb-6 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full">
                  <span className="text-gold-400 text-sm font-semibold">
                    About Landmark Infra
                  </span>
                </div>

                <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
                  Building <span className="text-gold-400">Trust & Excellence</span>
                </h2>

                <p className="text-[16px] text-white mb-6 leading-relaxed">
                  Landmark Infra is dedicated to delivering exceptional residential
                  and commercial developments built on trust, quality, and innovation.
                  Our commitment is to create spaces that enhance lifestyles and
                  stand the test of time.
                </p>

                <div className="space-y-2 mb-8">
                  {[
                    "Trusted Real Estate Developer",
                    "Premium Quality Construction",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>

                {/* <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button> */}
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Projects Section - Smooth Slide Up */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <section id="projects" className="py-20 md:py-32">
          <div className="container mx-auto px-5 md:px-12">

            {/* Heading */}
            <div className="text-center mb-10 md:mb-16">
              <div className="inline-block mb-6 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full">
                <span className="text-gold-400 text-sm font-semibold">
                  Featured Projects
                </span>
              </div>

              <h2 className="font-serif text-5xl sm:text-4xl md:text-6xl font-bold mb-4">
                Redefining <span className="text-gold-400">Luxury</span>
              </h2>

              <p className="text-base md:text-xl text-white max-w-2xl mx-auto">
                Each project is a masterpiece of design and comfort
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">

              {/* Project Card */}
              <div className="group relative overflow-hidden rounded-2xl">

                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center relative z-10 bg-gradient-to-r from-gray-900 to-gray-900/50 p-5 md:p-8 rounded-2xl border border-gold-500/20 group-hover:border-gold-500/50 transition">

                  {/* Left Content */}
                  <div className="order-2 md:order-1 text-center md:text-left">

                    <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                      Luxuria
                    </h3>

                    <span className="text-gold-400 text-[16px] font-semibold">
                      Site Address: Landmark Luxuria, Keshwapur, Behind Leelavati Hotel, Hubli - 580023
                    </span>

                    <p className="text-[18px] md:text-base text-white mb-6 mt-6 leading-relaxed">
                      Premium 2, 3 & 4 BHK apartments with world-class amenities.
                      Experience luxury living at its finest in the heart of the city.
                    </p>

                    {/* Amenities */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">

                      {[
                        { image: "/hall.png", text: "Community Hall" },
                        { image: "/temple1.png", text: "Jain Temple & Upashraya" },
                        { image: "/gym.png", text: "Gymnasium" },
                        { image: "/reception1.png", text: "Lavish Lobby" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 md:gap-4"
                        >
                          <img
                            src={item.image}
                            alt={item.text}
                            className="w-6 h-6 md:w-8 md:h-8 object-contain"
                          />

                          <span className="text-[17px] md:text-sm text-white">
                            {item.text}
                          </span>
                        </div>
                      ))}

                    </div>

                    <a
                      href="/luxuria"
                      className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-black px-5 md:px-6 py-3 rounded-lg font-semibold transition"
                    >
                      View Project
                    </a>

                  </div>

                  {/* Right Image */}
                  <div className="order-1 md:order-2 flex items-center justify-center overflow-hidden rounded-xl">

                    <img
                      src="/project3.png"
                      alt="Luxuria Keshwapur"
                      className="w-full h-auto md:h-[430px] object-contain md:object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <section id="our process" className="py-20 md:py-16 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">

            {/* Heading */}
            <div className="text-center mb-20">
              <div className="inline-block mb-6 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full">
                <span className="text-gold-400 text-sm font-semibold">
                  Our Process
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mt-4">
                From <span className="text-gold-400">Vision</span> to Reality
              </h2>

              <p className="text-white/70 max-w-2xl mx-auto mt-5">
                Every Landmark Infra project follows a carefully planned process
                to ensure quality, transparency, and customer satisfaction.
              </p>
            </div>

            {/* Process */}
            <div className="space-y-24">

              {/* Step 1 */}
              <div className="grid md:grid-cols-2 items-center gap-12">
                <div>
                  <span className="text-gold-500 text-7xl font-bold opacity-20">
                    01
                  </span>

                  <h3 className="text-3xl font-bold text-white mt-2">
                    Planning
                  </h3>

                  <p className="text-white/70 mt-5 leading-8">
                    Every successful project begins with thoughtful planning,
                    ensuring every detail is carefully considered before
                    construction starts.
                  </p>
                </div>

                <div className="rounded-3xl overflow-hidden">
                  <img
                    src="/planning.png"
                    alt="Planning"
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 items-center gap-12">
                <div className="order-2 md:order-1 rounded-3xl overflow-hidden">
                  <img
                    src="/design.png"
                    alt="Design"
                    className="w-full h-[350px] object-cover"
                  />
                </div>

                <div className="order-1 md:order-2">
                  <span className="text-gold-500 text-7xl font-bold opacity-20">
                    02
                  </span>

                  <h3 className="text-3xl font-bold text-white mt-2">
                    Design
                  </h3>

                  <p className="text-white/70 mt-5 leading-8">
                    Our architects create modern, functional, and elegant spaces
                    that perfectly balance comfort, style, and practicality.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 items-center gap-12">
                <div>
                  <span className="text-gold-500 text-7xl font-bold opacity-20">
                    03
                  </span>

                  <h3 className="text-3xl font-bold text-white mt-2">
                    Construction
                  </h3>

                  <p className="text-white/70 mt-5 leading-8">
                    With premium materials and expert craftsmanship, every
                    Landmark Infra project is built to deliver lasting strength
                    and exceptional quality.
                  </p>
                </div>

                <div className="rounded-3xl overflow-hidden">
                  <img
                    src="/construction.png"
                    alt="Construction"
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid md:grid-cols-2 items-center gap-12">
                <div className="order-2 md:order-1 rounded-3xl overflow-hidden">
                  <img
                    src="/delivery.png"
                    alt="Delivery"
                    className="w-full h-[350px] object-cover"
                  />
                </div>

                <div className="order-1 md:order-2">
                  <span className="text-gold-500 text-7xl font-bold opacity-20">
                    04
                  </span>

                  <h3 className="text-3xl font-bold text-white mt-2">
                    Delivery
                  </h3>

                  <p className="text-white/70 mt-5 leading-8">
                    We deliver every project on time with complete transparency,
                    ensuring customer satisfaction and long-term value.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <section
          id="our strengths"
          className="pt-10 pb-24 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="container mx-auto px-6 md:px-12">

            {/* Heading */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full">
                <span className="text-gold-400 text-sm font-semibold">
                  Why Choose Us
                </span>
              </div>

              <h2 className="mt-4 text-6xl font-serif font-bold text-white">
                Crafting Spaces for
                <span className="text-gold-400"> Better Living</span>
              </h2>

              <p className="mt-6 max-w-4xl mx-auto text-gray-300 text-xl leading-relaxed">
                At Landmark Infra, we combine quality construction, innovative
                design, premium locations, and timely delivery to create homes
                and commercial spaces that exceed expectations.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                {
                  number: "01",
                  title: "Premium Quality",
                  text: "Built with superior materials and modern construction standards for lasting value."
                },
                {
                  number: "02",
                  title: "Prime Locations",
                  text: "Projects strategically located with excellent connectivity and essential amenities nearby."
                },
                {
                  number: "03",
                  title: "On-Time Delivery",
                  text: "Committed to completing every project within the promised timeline."
                },
                {
                  number: "04",
                  title: "Trusted Builder",
                  text: "Known for transparency, customer satisfaction, and delivering exceptional developments."
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group relative overflow-hidden rounded-2xl border border-gold-500/20 bg-gray-900/60 backdrop-blur-sm p-8 hover:border-gold-500 transition-all duration-500 hover:-translate-y-2"
                >

                  <h1 className="text-6xl font-bold text-gold-200/10 group-hover:text-gold-500/20 transition">
                    {item.number}
                  </h1>

                  <h3 className="mt-6 text-2xl font-semibold text-white font-serif">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {item.text}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold-500 group-hover:w-full transition-all duration-500"></div>

                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>

      {/* Investment Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <section id="investment" className="py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-12">

            {/* Heading */}
            <div className="text-center mb-20">
              <span className="inline-block px-5 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-semibold">
                Investment Benefits
              </span>

              <h2 className="mt-6 text-5xl md:text-6xl font-serif font-bold text-white">
                Why Invest with <span className="text-gold-400">Landmark Infra?</span>
              </h2>

              <p className="mt-6 text-white/70 max-w-3xl mx-auto text-lg">
                A trusted investment destination that combines quality construction,
                premium locations, and long-term value.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid lg:grid-cols-2 gap-16">

              {/* Left Side */}
              <div className="space-y-8">
                {[
                  {
                    image: "/recognition.png",
                    title: "Excellent Appreciation",
                    text: "High-growth locations with excellent future value potential.",
                  },
                  {
                    image: "/healthy-lifestyle-logo.png",
                    title: "Premium Lifestyle",
                    text: "Modern homes thoughtfully designed for comfortable living.",
                  },
                  {
                    image: "/home-security.png",
                    title: "Smart Living Spaces",
                    text: "Intelligent layouts crafted to maximize space, natural light, comfort, and everyday convenience.",
                  },
                  {
                    image: "/growth.png",
                    title: "Secure Investment",
                    text: "Transparent dealings and quality construction you can trust.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-5 bg-gray-900/60 border border-gold-500/20 rounded-2xl p-6 hover:border-gold-500 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-white/70 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side */}
              <div className="space-y-8">
                {[
                  {
                    image: "/quality-assurance.png",
                    title: "Quality Construction",
                    text: "Built with premium materials and superior craftsmanship.",
                  },
                  {
                    image: "/integration.png",
                    title: "Built with Integrity",
                    text: "Committed to building homes with integrity and trust.",
                  },
                  {
                    image: "/hotel.png",
                    title: "Modern Amenities",
                    text: "Spaces designed with comfort, convenience, and lifestyle in mind.",
                  },
                  {
                    image: "/customer-review.png",
                    title: "Customer First",
                    text: "Dedicated support from booking to project handover.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-5 bg-gray-900/60 border border-gold-500/20 rounded-2xl p-6 hover:border-gold-500 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-white/70 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Contact Section - Smooth Slide Up */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <section id="contact" className="py-20 md:py-26 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/10 to-transparent"></div>

          <div className="container mx-auto px-8 md:px-12 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-6 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full">
                <span className="text-gold-400 text-sm font-semibold">
                  Get In Touch
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4">
                Ready to Find <span className="text-gold-400">Home?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+91 934 340 4424",
                  link: "tel:+919343404424",
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "landmarkluxuria@gmail.com",
                  link: "mailto:landmarkluxuria@gmail.com",
                },
                {
                  icon: MapPin,
                  title: "Office Address",
                  value: "K-NEXUS shop no. 205 at SECOND Floor, Keshwapur, Kusugal Road Hubballi-580023.",
                  link: "https://www.google.com/maps/search/?api=1&query=Keshwapur+Hubli",
                },
              ].map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={i}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gold-500/20 hover:border-gold-500/50 transition duration-300 group text-center hover:bg-gradient-to-br hover:from-gold-500/10 hover:to-gray-900/50"
                  >
                    <Icon className="w-12 h-12 text-gold-400 mx-auto mb-4 group-hover:scale-110 transition" />
                    <h4 className="font-semibold text-lg text-white mb-2">
                      {contact.title}
                    </h4>
                    <p className="text-white text-sm">{contact.value}</p>
                  </a>
                );
              })}
            </div>

            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/30 text-center">
              <Star className="w-8 h-8 text-gold-400 mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-4">Schedule Your Visit</h3>
              <p className="text-gray-300 mb-6">
                Contact us today to explore our premium properties and find your dream
                home at Landmark Luxuria.
              </p>
              <a href="tel:+919343404424">
                <button
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black py-3 rounded-lg font-semibold transition"
                >
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Footer - Smooth Slide Up */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <footer className="border-t border-gold-500/20 py-8 relative">
          <div className="container mx-auto px-8 md:px-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center">
                  <a href="/">
                    <img
                      src="/logo.png" // ya jo bhi image ka naam hai
                      alt="Luxuria Logo"
                      className="w-[300px] h-auto object-contain -ml-4 md:-ml-4"
                    />
                  </a>
                </div>
                <p className="text-ehite text-sm">
                  Premium apartments for those who demand <br />the extraordinary.
                </p>
              </div>

              <div className="md:ml-20">
                <h5 className="font-semibold text-white mb-4">Navigation</h5>
                <ul className="space-y-3 text-sm">
                  {["About", "Projects", "Our Process", "Our Strengths", "Investment", "Contact"].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-white hover:text-gold-400 transition"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-white mb-4">Contact</h5>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="tel:+919343404424"
                      className="flex items-center gap-3 text-white hover:text-gold-400 transition"
                    >
                      <img
                        src="/call.png"
                        alt="Phone"
                        className="w-3.5 h-3.5 object-contain"
                      />
                      <span>+91 934 340 4424</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:landmarkluxuria@gmail.com"
                      className="flex items-center gap-3 text-white hover:text-gold-400 transition"
                    >
                      <img
                        src="/email.png"
                        alt="Email"
                        className="w-3.5 h-3.5 object-contain"
                      />
                      <span>landmarkluxuria@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-white mb-4">Legal</h5>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="flex items-center gap-3 text-sm text-white hover:text-gold-400 transition"
                >
                  <img
                    src="/insurance.png"
                    alt="Privacy Policy"
                    className="w-4 h-4 object-contain"
                  />
                  <span>Privacy Policy</span>
                </button>
              </div>
            </div>

            <div className="border-t border-gold-500/20 pt-8 text-center">
              <p className="text-sm text-white">
                &copy; 2026 Landmark Infra. Where luxury meets lifestyle. Powered By{" "}
                <a
                  href="https://www.spitel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition underline"
                >
                  Spitel
                </a>
              </p>
            </div>
          </div>
        </footer>
      </motion.div>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gold-500/30 rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto p-8 relative">
            <button
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gold-400 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="font-serif text-3xl font-bold text-gold-400 mb-6">
              Privacy Policy
            </h2>

            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <section>
                <h3 className="font-semibold text-gold-300 mb-2">1. Introduction</h3>
                <p>
                  Landmark Luxuria ("we," "us," or "our") operates the Luxuria
                  website. This Privacy Policy outlines how we collect, use, and
                  protect your personal information.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-gold-300 mb-2">2. Information We Collect</h3>
                <p>
                  We collect information you provide directly to us, such as your
                  name, email, phone number, and inquiry details when you contact
                  us.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-gold-300 mb-2">
                  3. WhatsApp Communication
                </h3>
                <p>
                  We use WhatsApp, a Meta-owned messaging platform, to communicate
                  with prospective customers. By providing your WhatsApp number, you
                  consent to our use of WhatsApp Business API. Communication is
                  subject to Meta's Privacy Policy.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-gold-300 mb-2">
                  4. How We Use Your Information
                </h3>
                <p>
                  We use your information to respond to inquiries, provide project
                  updates, schedule visits, and comply with legal obligations. We do
                  not sell your personal information.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-gold-300 mb-2">5. Data Security</h3>
                <p>
                  We implement appropriate technical measures to protect your personal
                  information against unauthorized access or disclosure.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-gold-300 mb-2">6. Contact Us</h3>
                <p>
                  For questions about this Privacy Policy, contact us at
                  landmarkluxuria@gmail.com or +91 934 340 4424.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
