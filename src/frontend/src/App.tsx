import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const AFFILIATE_URL =
  "https://www.nutrisystem.com/diet-plans/nutrisystem-program";

function AffiliateButton({
  children,
  className = "",
  "data-ocid": dataOcid,
}: {
  children: React.ReactNode;
  className?: string;
  "data-ocid"?: string;
}) {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid={dataOcid}
      className={`inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 cursor-pointer no-underline ${className}`}
    >
      {children}
    </a>
  );
}

function LeafIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17 8C8 10 5.9 16.17 3.82 19.34C3.1 20.4 4.18 21.5 5.16 20.7C8.16 18.27 11 14.91 21 8C21 8 19 7 17 8Z"
        fill="oklch(0.52 0.16 145)"
      />
      <path
        d="M3.82 19.34C5.9 16.17 8 10 17 8C19 7 21 8 21 8C16 14 12.42 17.26 8.5 19.84"
        stroke="oklch(0.52 0.16 145)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LeafIconWhite() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M17 8C8 10 5.9 16.17 3.82 19.34C3.1 20.4 4.18 21.5 5.16 20.7C8.16 18.27 11 14.91 21 8C21 8 19 7 17 8Z"
        fill="white"
      />
      <path
        d="M3.82 19.34C5.9 16.17 8 10 17 8C19 7 21 8 21 8C16 14 12.42 17.26 8.5 19.84"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function PlusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="oklch(0.52 0.16 145)"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
      style={{
        transition: "transform 0.2s ease",
        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
        flexShrink: 0,
      }}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

const BENEFITS = [
  {
    emoji: "🚚",
    title: "Meal Delivery",
    desc: "Freshly prepared, portion-controlled meals shipped directly to your door. No grocery shopping stress.",
  },
  {
    emoji: "🥗",
    title: "Balanced Nutrition",
    desc: "Every meal is dietitian-designed with the right balance of protein, carbs, and healthy fats for your goals.",
  },
  {
    emoji: "⭐",
    title: "Proven Results",
    desc: "Thousands of success stories. Members lose an average of 1–2 lbs per week consistently on the program.",
  },
  {
    emoji: "👨‍🍳",
    title: "No Cooking Required",
    desc: "Meals are pre-made and ready in minutes. Just heat and eat — no recipes, no prep work needed.",
  },
  {
    emoji: "👩‍⚕️",
    title: "Dietitian Support",
    desc: "Access to certified dietitians and counselors to guide your weight loss journey every single step.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Choose Your Plan",
    desc: "Browse flexible plans designed for your goals — whether you want to lose 10 lbs or 100 lbs, there's a plan for you.",
    img: "/assets/generated/step1-choose-plan.dim_400x300.jpg",
  },
  {
    step: "2",
    title: "Meals Delivered",
    desc: "Your personalized meal box ships straight to your front door. Over 100 chef-crafted meals and snacks to pick from.",
    img: "/assets/generated/step2-meals-delivered.dim_400x300.jpg",
  },
  {
    step: "3",
    title: "Lose the Weight",
    desc: "Follow the simple program, enjoy delicious food, and watch the pounds drop off. Real results, guaranteed.",
    img: "/assets/generated/step3-lose-weight.dim_400x300.jpg",
  },
];

const TESTIMONIALS = [
  {
    initials: "SM",
    bg: "#2E7D32",
    name: "Sarah M.",
    location: "Austin, TX",
    quote:
      "I was skeptical at first, but Nutrisystem completely changed my relationship with food. The meals are delicious and I never felt deprived. Best decision I've ever made!",
    lostLbs: "28 lbs",
  },
  {
    initials: "MR",
    bg: "#1B5E20",
    name: "Mike R.",
    location: "San Diego, CA",
    quote:
      "As a busy professional, I had no time to meal prep. Nutrisystem solved everything. The food arrives, I heat it up, and I've lost 42 pounds in 6 months. Incredible!",
    lostLbs: "42 lbs",
  },
  {
    initials: "JK",
    bg: "#388E3C",
    name: "Jennifer K.",
    location: "Miami, FL",
    quote:
      "The dietitian support is what really set Nutrisystem apart for me. Having a real person to guide my journey made all the difference. I feel amazing and healthy!",
    lostLbs: "35 lbs",
  },
];

const FAQS = [
  {
    q: "How does Nutrisystem work?",
    a: "Nutrisystem delivers pre-portioned, calorie-controlled meals directly to your door. You follow a structured eating plan combining Nutrisystem meals with fresh grocery add-ins. The program removes guesswork by providing balanced nutrition automatically.",
  },
  {
    q: "How much weight can I expect to lose?",
    a: "Most members lose 1–2 pounds per week on average. In the first week, many experience rapid initial weight loss of up to 13 lbs, primarily water weight. Consistent results depend on following the program and staying active.",
  },
  {
    q: "Are the meals tasty?",
    a: "Absolutely! Nutrisystem offers over 100 menu items including burgers, pizza, pasta, muffins, and more. Meals are designed to satisfy cravings while keeping calories in check. Most members are pleasantly surprised by how good the food tastes.",
  },
  {
    q: "Is Nutrisystem safe?",
    a: "Yes, Nutrisystem is a clinically studied program. All meal plans are designed by registered dietitians and meet FDA nutritional guidelines. However, as with any diet program, we recommend consulting your doctor if you have any underlying medical conditions.",
  },
  {
    q: "Can I eat my own food too?",
    a: "Yes! Nutrisystem encourages you to supplement with fresh 'PowerFuels' and 'SmartCarbs' from your grocery store. The program teaches you how to incorporate everyday foods alongside your Nutrisystem meals for a balanced, sustainable approach.",
  },
  {
    q: "How long does delivery take?",
    a: "Standard delivery takes 5–10 business days. Expedited shipping options are available at checkout. Orders come in an insulated box with ice packs to ensure freshness. You'll receive a tracking number so you can follow your shipment.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Nutrisystem offers a 14-day money-back guarantee on your first order. If you're not completely satisfied, contact customer service within 14 days of receiving your order for a full refund, no questions asked.",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Plans", href: AFFILIATE_URL, external: true },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMenuOpen(false);
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-xs border-b border-[#E6E6E6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#hero"
              data-ocid="nav.link"
              className="flex items-center gap-2 text-brand-green font-bold text-xl font-heading no-underline"
            >
              <LeafIcon />
              <span>Nutrisystem</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="nav.link"
                    className="text-sm font-medium text-[#444] hover:text-brand-green transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    data-ocid="nav.link"
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-[#444] hover:text-brand-green transition-colors no-underline"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </nav>

            <div className="flex items-center gap-3">
              <AffiliateButton
                data-ocid="header.primary_button"
                className="hidden md:inline-flex bg-brand-orange hover:bg-brand-orange-hover text-white text-sm px-5 py-2.5 shadow-sm"
              >
                START TODAY
              </AffiliateButton>
              <button
                type="button"
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                data-ocid="nav.toggle"
              >
                {menuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="md:hidden overflow-hidden bg-white border-t border-[#E6E6E6]"
            >
              <div className="px-4 py-4 flex flex-col gap-2">
                {NAV_LINKS.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="nav.link"
                      onClick={() => setMenuOpen(false)}
                      className="text-base font-medium text-[#333] py-2 hover:text-brand-green transition-colors no-underline"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      data-ocid="nav.link"
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-base font-medium text-[#333] py-2 hover:text-brand-green transition-colors no-underline"
                    >
                      {link.label}
                    </a>
                  ),
                )}
                <AffiliateButton
                  data-ocid="nav.primary_button"
                  className="mt-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-base px-6 py-3 w-full"
                >
                  START TODAY
                </AffiliateButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                <div className="inline-flex items-center gap-2 bg-brand-light-green rounded-full px-4 py-1.5 w-fit">
                  <span className="text-brand-green text-sm font-semibold">
                    ✓ #1 Rated Weight Loss Program
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight tracking-tight text-[#111]">
                  LOSE WEIGHT THE EASY WAY WITH{" "}
                  <span className="text-brand-green">NUTRISYSTEM</span>
                </h1>

                <p className="text-lg text-[#555] leading-relaxed max-w-lg">
                  The nation's most trusted meal delivery diet program. Lose
                  weight without cooking, counting calories, or giving up the
                  foods you love. Start today and see real results in your first
                  week.
                </p>

                <AffiliateButton
                  data-ocid="hero.primary_button"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-fit"
                >
                  Get Started Now →
                </AffiliateButton>

                <div className="flex flex-wrap gap-5 pt-1">
                  {[
                    "Over 4M Customers Served",
                    "Avg. 13 lbs in First Month",
                    "Money-Back Guarantee",
                  ].map((stat) => (
                    <div
                      key={stat}
                      className="flex items-center gap-1.5 text-sm text-[#555]"
                    >
                      <span className="text-brand-green font-bold">✓</span>
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-md lg:max-w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EAF5EA] to-[#c8e6c9] rounded-3xl" />
                  <img
                    src="/assets/generated/hero-nutrisystem-meals.dim_800x900.jpg"
                    alt="Nutrisystem healthy meal delivery program"
                    className="relative w-full h-[420px] lg:h-[520px] object-cover object-center rounded-3xl shadow-card"
                    loading="eager"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card-hover px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-light-green rounded-full flex items-center justify-center text-lg">
                      🎯
                    </div>
                    <div>
                      <div className="text-xs text-[#666] font-medium">
                        Average loss
                      </div>
                      <div className="text-base font-extrabold text-brand-green">
                        13 lbs in Week 1
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section
          id="benefits"
          className="bg-white border-t border-[#E6E6E6] py-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="text-brand-orange font-bold text-sm tracking-widest uppercase">
                Why Choose Nutrisystem
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold font-heading text-[#111] uppercase tracking-tight">
                KEY BENEFITS
              </h2>
              <p className="mt-3 text-[#666] max-w-xl mx-auto">
                Everything you need to succeed on your weight loss journey —
                built right into the program.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BENEFITS.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  data-ocid={`benefits.item.${i + 1}`}
                  className="bg-white border border-[#E6E6E6] rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-brand-light-green rounded-xl flex items-center justify-center mb-4 text-2xl">
                    {benefit.emoji}
                  </div>
                  <h3 className="font-bold text-[#111] text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: BENEFITS.length * 0.08 }}
                className="bg-brand-light-green rounded-2xl p-6 shadow-card flex flex-col justify-between border border-[oklch(0.52_0.16_145/0.15)]"
              >
                <div>
                  <div className="text-3xl mb-3">🏆</div>
                  <h3 className="font-bold text-brand-green text-lg mb-2">
                    Ready to Start?
                  </h3>
                  <p className="text-[#444] text-sm leading-relaxed">
                    Join over 4 million Americans who've transformed their
                    health with Nutrisystem.
                  </p>
                </div>
                <AffiliateButton
                  data-ocid="benefits.primary_button"
                  className="mt-5 bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 text-sm shadow-sm"
                >
                  View Plans →
                </AffiliateButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-[#EAF5EA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="text-brand-orange font-bold text-sm tracking-widest uppercase">
                Simple & Easy
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold font-heading text-[#111] uppercase tracking-tight">
                HOW IT WORKS
              </h2>
              <p className="mt-3 text-[#555] max-w-xl mx-auto">
                Three simple steps are all it takes to start losing weight with
                Nutrisystem.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HOW_IT_WORKS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-ocid={`how-it-works.item.${i + 1}`}
                  className="bg-white rounded-3xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                      <span className="text-white font-extrabold text-xl">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#111] text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-center mt-12"
            >
              <AffiliateButton
                data-ocid="how-it-works.primary_button"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white text-lg px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get My Plan →
              </AffiliateButton>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="bg-white py-20 border-t border-[#E6E6E6]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="text-brand-orange font-bold text-sm tracking-widest uppercase">
                Real People, Real Results
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold font-heading text-[#111] uppercase tracking-tight">
                SUCCESS STORIES
              </h2>
              <p className="mt-3 text-[#666] max-w-xl mx-auto">
                Thousands of Nutrisystem members have transformed their lives.
                Here are just a few of their stories.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-ocid={`testimonials.item.${i + 1}`}
                  className="bg-white border border-[#E6E6E6] rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                      style={{ backgroundColor: t.bg }}
                    >
                      {t.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-[#111]">{t.name}</div>
                      <div className="text-sm text-[#888]">{t.location}</div>
                    </div>
                    <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      Lost {t.lostLbs}!
                    </span>
                  </div>

                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg
                        key={s}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#E67E22"
                        aria-hidden="true"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[#555] text-sm leading-relaxed italic flex-1">
                    "{t.quote}"
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-center mt-12"
            >
              <AffiliateButton
                data-ocid="testimonials.primary_button"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white text-lg px-10 py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                JOIN THEIR SUCCESS
              </AffiliateButton>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[#EAF5EA] py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <span className="text-brand-orange font-bold text-sm tracking-widest uppercase">
                Got Questions?
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold font-heading text-[#111] uppercase tracking-tight">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </motion.div>

            <div className="flex flex-col gap-2" data-ocid="faq.list">
              {FAQS.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  data-ocid={`faq.item.${i + 1}`}
                  className="bg-white rounded-2xl border border-[#E6E6E6] overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === i ? null : i)
                    }
                    data-ocid="faq.toggle"
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-brand-light-green transition-colors cursor-pointer bg-transparent"
                    aria-expanded={openFaqIndex === i}
                  >
                    <span className="font-semibold text-[#111] text-base pr-4">
                      {faq.q}
                    </span>
                    <PlusIcon isOpen={openFaqIndex === i} />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaqIndex === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-[#555] text-sm leading-relaxed border-t border-[#E6E6E6]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-12"
            >
              <p className="text-[#666] mb-5">
                Still have questions? Visit the official Nutrisystem website for
                more details.
              </p>
              <AffiliateButton
                data-ocid="faq.primary_button"
                className="bg-brand-green hover:opacity-90 text-white px-8 py-3 text-base shadow-sm"
              >
                Learn More at Nutrisystem.com →
              </AffiliateButton>
            </motion.div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-[#1B5E20] py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <div className="text-5xl mb-6">🌿</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight mb-4">
              Ready to Start Your{" "}
              <span style={{ color: "#FFA726" }}>Weight Loss Journey?</span>
            </h2>
            <p className="text-[#c8e6c9] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Join over 4 million people who have already changed their lives
              with Nutrisystem. Your transformation starts with one click.
            </p>
            <AffiliateButton
              data-ocid="cta-banner.primary_button"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xl px-12 py-5 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              GET STARTED HERE →
            </AffiliateButton>
            <p className="mt-6 text-[#a5d6a7] text-sm">
              14-Day Money-Back Guarantee · No Contracts · Cancel Anytime
            </p>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1B5E20] border-t border-[oklch(0.40_0.12_145)] pt-10 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-2">
              <LeafIconWhite />
              <span className="text-white font-bold text-xl font-heading">
                Nutrisystem
              </span>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="#disclosure"
                className="text-[#a5d6a7] hover:text-white text-sm transition-colors no-underline"
              >
                Disclosure
              </a>
              <a
                href="#privacy"
                className="text-[#a5d6a7] hover:text-white text-sm transition-colors no-underline"
              >
                Privacy Policy
              </a>
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.link"
                className="text-[#a5d6a7] hover:text-white text-sm transition-colors no-underline"
              >
                Visit Nutrisystem
              </a>
            </nav>
          </div>

          <div className="border-t border-[oklch(0.40_0.12_145)] pt-6 flex flex-col gap-3">
            <p className="text-[#c8e6c9] text-sm text-center">
              © {new Date().getFullYear()} Nutrisystem Affiliate Site. All
              rights reserved. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                caffeine.ai
              </a>
            </p>
            <p className="text-[#81c784] text-xs text-center max-w-3xl mx-auto leading-relaxed">
              <strong>Affiliate Disclaimer:</strong> This site contains
              affiliate links to Nutrisystem. We may earn a commission when you
              click links and make a purchase, at no additional cost to you.
              Results may vary. Nutrisystem is a registered trademark of
              Nutrisystem, Inc. This site is not affiliated with or endorsed by
              Nutrisystem, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
