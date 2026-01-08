import { Button } from "@/components/ui/button";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, Globe, Heart, Hexagon, Leaf } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<"en" | "pt">(() => {
    const saved = localStorage.getItem("language");
    return (saved === "en" || saved === "pt") ? saved : "pt";
  });

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "pt" : "en";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  useEffect(() => {
    // Check IP location if no language is manually saved
    if (!localStorage.getItem("language")) {
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          if (data.country_code === "BR") {
            setLanguage("pt");
            // Optionally stick to it so we don't fetch every time, or leave it valid for session
            // For now, let's just set the state. If user toggles, it saves to localStorage.
          }
        })
        .catch((err) => console.error("Failed to detect location:", err));
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="absolute w-full top-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/images/logo-minimal-site.png" className="h-32" />
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700 items-center">
            <a href="#story" className="hover:text-amber-600 transition">
              {t.nav.story}
            </a>
            <a href="#heritage" className="hover:text-amber-600 transition">
              {t.nav.heritage}
            </a>
            <a href="#products" className="hover:text-amber-600 transition">
              {t.nav.products}
            </a>
            <a href="#contact" className="hover:text-amber-600 transition">
              {t.nav.contact}
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:bg-amber-50 hover:text-amber-700"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-8 z-10">
              <div className="space-y-4">
                <p className="text-amber-600 font-medium tracking-widest uppercase text-sm">
                  {t.hero.subtitle}
                </p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-tight display-font">
                  {t.hero.titlePart1} <br />
                  <span className="text-amber-600">{t.hero.titlePart2}</span>
                </h1>
              </div>
              <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-full font-medium text-lg transition-all hover:scale-105"
                >
                  {t.hero.discover}
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-900 hover:text-amber-600 px-8 py-6 rounded-full font-medium text-lg hover:bg-amber-50"
                >
                  {t.hero.shop}
                </Button>
              </div>
            </div>

            {/* Hero 3D Elements */}
            <div className="relative h-[600px] hidden lg:block w-full">
              <div className="absolute -top-40 right-0 left-[-200px] w-[900px] h-[900px] z-30">
                <img
                  src="/images/just-melting--heart-hero.png"
                  alt="Heartland Mel Hero"
                  className="w-full h-full object-contain"
                />
                {/* Bee Container - Handles Flight Path */}
                <motion.div
                  className="absolute z-40 w-32 pointer-events-none"
                  initial={{ x: -1000, y: -400, opacity: 0, scale: 0.2 }}
                  animate={{
                    x: [-1000, -600, -300, 10],
                    y: [-400, 50, -50, 40],
                    opacity: [0, 1, 1, 1],
                    scale: [0.2, 0.6, 0.9, 1],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    times: [0, 0.4, 0.7, 1],
                    delay: 0.1
                  }}
                  style={{ top: "15%", left: "25%" }}
                >
                  <img
                    src="/images/afteraffects/beewingsmoving.aep_AME/bee-wingless.gif"
                    alt="Flying Bee"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#story"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity z-50"
        >
          <span className="text-xs uppercase tracking-widest text-gray-400">Scroll Down</span>
          <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
        </a>
      </section>

      {/* Story Section */}
      <section id="story" className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Story Image */}
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/product-mockup-1.jpg"
                  alt="Heartland Mel Honey Bottle"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Story Text */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-700 display-font">
                {t.story.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{t.story.p1}</p>
              <p className="text-gray-700 leading-relaxed">{t.story.p2}</p>
              <div className="flex gap-4 pt-4">
                <Heart className="w-6 h-6 text-amber-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {t.story.pure.title}
                  </h3>
                  <p className="text-sm text-gray-600">{t.story.pure.desc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Leaf className="w-6 h-6 text-amber-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {t.story.ethical.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t.story.ethical.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Heritage Section */}
      < section id="heritage" className="py-16 md:py-24 bg-white" >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-700 display-font mb-4">
              {t.heritage.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto display-font tracking-wide">
              {t.heritage.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-amber-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hexagon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-700 display-font mb-3">
                {t.heritage.tradition.title}
              </h3>
              <p className="text-gray-700">{t.heritage.tradition.desc}</p>
            </div>

            {/* Value 2 */}
            <div className="bg-amber-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-700 display-font mb-3">
                {t.heritage.community.title}
              </h3>
              <p className="text-gray-700">{t.heritage.community.desc}</p>
            </div>

            {/* Value 3 */}
            <div className="bg-amber-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-700 display-font mb-3">
                {t.heritage.nature.title}
              </h3>
              <p className="text-gray-700">{t.heritage.nature.desc}</p>
            </div>
          </div>
        </div>
      </section >

      {/* Products Section */}
      < section id="products" className="py-16 md:py-24 bg-stone-50" >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-700 display-font mb-4">
              {t.products.title}
            </h2>
            <p className="text-xl text-gray-600 display-font tracking-wide">{t.products.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/product-mockup-2.jpg"
                alt="Heartland Mel honey jar and packaging"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-amber-700 display-font">
                {t.products.showcase.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t.products.showcase.desc}
              </p>
              <ul className="space-y-3 text-gray-700">
                {t.products.showcase.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold"
                size="lg"
              >
                {t.products.showcase.shop}
              </Button>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-16 md:py-24 bg-gradient-to-r from-amber-700 to-amber-600 text-white" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold display-font">
            {t.cta.title}
          </h2>
          <p className="text-xl text-amber-50">{t.cta.desc}</p>
          <Button
            className="bg-white text-amber-700 hover:bg-amber-50 px-10 py-4 rounded-lg font-bold text-lg"
            size="lg"
          >
            {t.cta.button}
          </Button>
        </div>
      </section >

      {/* Footer */}
      < footer id="contact" className="bg-gray-900 text-gray-300 py-12" >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4 display-font">
                HEARTLAND MEL
              </h3>
              <p className="text-sm">{t.footer.desc}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#story" className="hover:text-amber-400 transition">
                    {t.nav.story}
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-amber-400 transition">
                    {t.nav.products}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    {t.footer.about}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">
                {t.footer.contact}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>Email: hello@heartlandmel.com</li>
                <li>Phone: (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">
                {t.footer.follow}
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-amber-600 text-white shadow-lg hover:bg-amber-700 transition-all duration-300 z-50 ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}
