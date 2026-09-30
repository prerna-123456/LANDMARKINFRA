import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
export default function Luxuria() {
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
    <div className="bg-black">
      <nav className="absolute -top-10 left-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[300px] h-[200px] rounded-lg flex items-center justify-center z-50">
                <a href="/">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-[300px] h-[200px] object-contain -ml-2 md:-ml-6"
                  />
                </a>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="/">
                <button
                  className="text-sm font-medium text-gray-300 hover:text-gold-400 transition relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              </a>
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
            <div className="md:hidden bg-white mt-4 border-t border-gold-500/20 pt-4 flex flex-col gap-4 text-center">
              <a href="/">
                <button
                  onClick={() => {
                    scrollToSection("home");
                    setMobileMenuOpen(false);
                  }}
                  className="text-sm font-medium text-black hover:text-gold-400"
                >
                  Home
                </button>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* About Section - Smooth Slide Up */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <section id="luxuria" className="py-12 pt-40 md:pt-48 md:pb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-transparent"></div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

              {/* Image */}
              <div className="relative order-1 md:order-1">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/20 to-transparent rounded-3xl blur-xl"></div>

                <img
                  src="/project3.png"
                  alt="Modern Living Room"
                  className="relative w-full h-[280px] md:h-full rounded-3xl shadow-2xl object-cover"
                />
              </div>

              {/* Content */}
              <div className="order-2 md:order-2 text-center md:text-left">

                <div className="inline-block mb-6 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full">
                  <span className="text-gold-400 text-[16px] font-semibold">
                    Site Address: Landmark Luxuria, Keshwapur, Behind Leelavati Hotel, Hubli - 580023
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-10 text-white mt-8">
                  Experience Luxury{" "}
                  <span className="text-gold-400">Living at Luxuria</span>
                </h2>

                <p className="text-[15px] md:text-[16px] text-white leading-relaxed">
                  Luxuria is thoughtfully designed to offer a perfect balance of
                  elegance, comfort, and functionality. Every residence is crafted
                  with premium finishes, spacious layouts, and abundant natural
                  light, creating a home that reflects your lifestyle. With
                  world-class amenities, secure surroundings, and a prime location,
                  Luxuria provides an elevated living experience for you and your
                  family.
                </p>
              </div>

            </div>
          </div>
        </section>
      </motion.div>

      {/* Amenities Section - Smooth Slide Up */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <section id="amenities" className="py-20 md:py-28 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 via-transparent to-gold-500/5"></div>

          <div className="container mx-auto px-8 md:px-16 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block mb-6 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full">
                <span className="text-gold-400 text-sm font-semibold">
                  World Class Facilities
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white">
                Premium <span className="text-gold-400">Amenities</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image: "/temple.png",
                  title: "Jain Temple & Upashraya",
                  desc: "Spiritual sanctuary",
                },
                {
                  image: "/hall1.png",
                  title: "Community Hall",
                  desc: "Events & gatherings",
                },
                {
                  image: "/stadium1.png",
                  title: "Sports Arena",
                  desc: "Outdoor activities",
                },
                {
                  image: "/exercise.png",
                  title: "Gymnasium",
                  desc: "State-of-the-art fitness",
                },
                {
                  image: "/gardening.png",
                  title: "Open Lawn & Garden",
                  desc: "Green spaces",
                },
                {
                  image: "/city-park.png",
                  title: "Children's Play Area",
                  desc: "Safe recreation",
                },
                {
                  image: "/reception.png",
                  title: "Lavish Lobby",
                  desc: "Grand entrance",
                },
                {
                  image: "/elevator.png",
                  title: "Premium Elevators",
                  desc: "Fast & reliable",
                },
                {
                  image: "/power-supply.png",
                  title: "100% DG Backup",
                  desc: "Uninterrupted power",
                },
              ].map((amenity, i) => (
                <div
                  key={i}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20 hover:border-gold-500/50 transition duration-300 cursor-pointer hover:bg-gradient-to-br hover:from-gold-500/20 hover:to-transparent text-center md:text-left"
                >
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-14 h-14 object-contain mb-4 mx-auto md:mx-0 group-hover:scale-110 transition duration-300"
                  />

                  <h4 className="font-semibold text-lg text-white mb-2">
                    {amenity.title}
                  </h4>

                  <p className="text-white text-sm">
                    {amenity.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>

      {/* Floor Plans Section - Smooth Slide Up */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <section id="plans" className="py-20 md:py-26 bg-black">
          <div className="container mx-auto px-8 md:px-12">

            <div className="text-center mb-16">
              <div className="inline-block mb-6 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full">
                <span className="text-gold-400 text-sm font-semibold">
                  Master Layout
                </span>
              </div>

              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-5 text-white">
                Floor <span className="text-gold-400">Plans</span>
              </h2>

              <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
                Thoughtfully designed layouts that maximize space, comfort, and
                functionality. Explore each floor plan to visualize your future
                home with precision and elegance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              <div className="overflow-hidden rounded-2xl border border-gold-500/20 hover:border-gold-500/60 transition duration-300">
                <img
                  src="/amenities1.png"
                  alt="Ground Floor Plan"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="overflow-hidden rounded-2xl border border-gold-500/20 hover:border-gold-500/60 transition duration-300">
                <img
                  src="/amenities2.png"
                  alt="First Floor Plan"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="overflow-hidden rounded-2xl border border-gold-500/20 hover:border-gold-500/60 transition duration-300">
                <img
                  src="/amenities3.png"
                  alt="Second Floor Plan"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="overflow-hidden rounded-2xl border border-gold-500/20 hover:border-gold-500/60 transition duration-300">
                <img
                  src="/amenities4.png"
                  alt="Typical Floor Plan"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
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
                <p className="text-white text-sm">
                  Premium apartments for those who demand <br />the extraordinary.
                </p>
              </div>

              <div className="md:ml-20">
                <h5 className="font-semibold text-white mb-4">Navigation</h5>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="/"
                      className="text-white hover:text-gold-400 transition"
                    >
                      Home
                    </a>
                  </li>
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
    </div>
  )
}