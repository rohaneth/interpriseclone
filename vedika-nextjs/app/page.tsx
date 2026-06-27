"use client";

import { Phone, Mail, MapPin, Clock, CheckCircle2, Star, ArrowRight, Wrench, Truck, ShieldCheck, Users, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const PHONE = "+91 89568 72937";
const PHONE_TEL = "tel:+918956872937";
const EMAIL = "vedikaenterprises0809@gmail.com";

const services = [
  { title: "Mini Excavator", img: "/service-mini-excavator.jpg", blurb: "Reliable mini excavator rental in Pune for tight access sites and quick excavation work." },
  { title: "Mini Poclain", img: "/service-poclain.jpg", blurb: "Affordable poclain rentals for trenching, earthmoving and rock breaking jobs." },
  { title: "Compact Excavator", img: "/service-compact.jpg", blurb: "Perfect for residential, commercial and industrial projects of any size." },
  { title: "Mini Bobcat", img: "/service-bobcat.jpg", blurb: "Power, precision and a compact footprint for fast, clean material handling." },
];

const features = [
  { icon: ShieldCheck, title: "18+ Years Experience", text: "Trusted earthmovers since 2007." },
  { icon: Truck, title: "Prompt Delivery", text: "Machines on your site, on time." },
  { icon: Users, title: "Certified Operators", text: "Skilled, safety-trained crew." },
  { icon: Wrench, title: "24x7 Breakdown Support", text: "Backup machine within 24 hours." },
];

const testimonials = [
  { name: "Kunal Rathod", role: "Civil Engineer", text: "Quick service and well-maintained machines. The mini excavator was perfect for our tight site." },
  { name: "Sameer Thodkar", role: "Site Manager", text: "Professional team and timely delivery. Finished the job faster without any hassle." },
  { name: "Arun Mane", role: "Builder", text: "Affordable rates and smooth operation. The machine handled tough soil effortlessly." },
  { name: "Ravi Shinde", role: "Site Contractor", text: "Excellent service and reliable equipment. Trenching was finished faster than expected." },
];

const faqs = [
  { q: "What is the minimum rental duration?", a: "One full day, which is 8 hours of machine work." },
  { q: "Is the operator included in the rent?", a: "Yes, our standard packages include a trained operator." },
  { q: "What if the machine breaks down?", a: "We arrange alternate machine support within 24 hours." },
  { q: "Which locations do you serve?", a: "Pune city and surrounding regions across Maharashtra." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="hidden md:block bg-[var(--ink)] text-[oklch(0.9_0.01_70)] text-sm">
      <div className="container-x flex items-center justify-between py-2">
        <div className="flex items-center gap-6">
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-[var(--brand)] transition-colors">
            <Mail className="h-4 w-4" /> {EMAIL}
          </a>
          <a href={PHONE_TEL} className="flex items-center gap-2 hover:text-[var(--brand)] transition-colors">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" /> Mon – Sun · 7:00 AM – 9:00 PM
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "#home"], ["About", "#about"], ["Services", "#services"],
    ["Why Us", "#why"], ["Testimonials", "#testimonials"], ["Contact", "#contact"],
  ] as const;
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container-x flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-md bg-[var(--gradient-brand)] grid place-items-center text-primary-foreground font-bold shadow-[var(--shadow-elegant)]">
            VE
          </div>
          <div className="leading-tight">
            <div className="font-display text-2xl text-[var(--ink)]">Vedika Enterprises</div>
            <div className="text-xs text-muted-foreground">Mini Excavator on Rent · Pune</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-[var(--ink-soft)] hover:text-[var(--brand)] transition-colors">{l}</a>
          ))}
        </nav>
        <a href={PHONE_TEL} className="hidden md:inline-flex items-center gap-2 rounded-md bg-[var(--brand)] text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-[var(--shadow-elegant)] hover:brightness-110 transition">
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <button onClick={() => setOpen(v => !v)} className="lg:hidden p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-1 text-[var(--ink-soft)]">{l}</a>
            ))}
            <a href={PHONE_TEL} className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--brand)] text-primary-foreground px-5 py-2.5 text-sm font-semibold">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <img src="/hero-excavator.jpg" alt="Mini excavator working on a construction site at dusk" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative container-x py-28 md:py-40 text-white">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)]/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" /> Trusted since 2007
          </span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05]">
            Mini Excavators<br />on Hire in Pune
          </h1>
          <p className="mt-5 text-lg text-white/90 max-w-xl">
            Flexible daily, weekly and monthly rental plans for mini excavators, poclain, compact and bobcat machines — delivered with certified operators.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={PHONE_TEL} className="inline-flex items-center gap-2 rounded-md bg-[var(--brand)] px-6 py-3 font-semibold shadow-[var(--shadow-elegant)] hover:brightness-110 transition">
              <Phone className="h-4 w-4" /> Call for Quote
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 backdrop-blur px-6 py-3 font-semibold hover:bg-white/20 transition">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src="/about-side.jpg" alt="Vedika Enterprises operator giving a thumbs up from the excavator cabin" loading="lazy" width={800} height={900} className="rounded-xl shadow-[var(--shadow-elegant)] w-full object-cover aspect-[4/5]" />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-[var(--brand)] text-primary-foreground rounded-xl p-5 shadow-xl">
            <div className="font-display text-4xl leading-none">18+</div>
            <div className="text-xs uppercase tracking-widest mt-1">Years on the ground</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-widest text-[var(--brand)]">Welcome To</div>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-[var(--ink)]">Vedika Enterprises</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Initiated in 2007 and headquartered in Balewadi-Baner, Pune, Vedika Enterprises has grown into a trusted name in the earthmovers on hire industry. We serve a diverse clientele across Pune and nearby regions with consistency, integrity and customer focus.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From urban builds to infrastructure projects, our team delivers reliable machines and skilled operators that keep your timelines on track.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {["Trained certified operators","Well maintained fleet","Same day delivery","Transparent pricing"].map(t => (
              <li key={t} className="flex items-center gap-2 text-sm text-[var(--ink-soft)]">
                <CheckCircle2 className="h-5 w-5 text-[var(--brand)]" /> {t}
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--ink)] text-white px-6 py-3 font-semibold hover:bg-[var(--ink-soft)] transition">
            Request a Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[var(--muted)]">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest text-[var(--brand)]">What We Offer</div>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-[var(--ink)]">Our Services</h2>
          <p className="mt-4 text-muted-foreground">A full fleet of compact earthmoving machines, available with operator, for any project across Pune.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(s => (
            <article key={s.title} className="group bg-card rounded-xl overflow-hidden border hover:shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={800} height={600} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-[var(--ink)]">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:gap-2.5 transition-all">
                  Enquire <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-sm font-semibold uppercase tracking-widest text-[var(--brand)]">Why Choose Us</div>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-[var(--ink)]">Built for Indian Job Sites</h2>
          <p className="mt-4 text-muted-foreground">From narrow city lanes to muddy infrastructure plots, our machines and crew are tuned for the realities of Pune projects.</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {features.map(f => (
              <div key={f.title} className="flex gap-4 p-5 rounded-xl border bg-card">
                <div className="h-12 w-12 grid place-items-center rounded-lg bg-[var(--brand)]/10 text-[var(--brand)] shrink-0">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-[var(--ink)]">{f.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/service-poclain.jpg" alt="Poclain at work" loading="lazy" width={800} height={600} className="rounded-xl aspect-square object-cover" />
          <img src="/service-compact.jpg" alt="Compact excavator" loading="lazy" width={800} height={600} className="rounded-xl aspect-square object-cover mt-10" />
          <img src="/service-bobcat.jpg" alt="Bobcat mini" loading="lazy" width={800} height={600} className="rounded-xl aspect-square object-cover" />
          <img src="/service-mini-excavator.jpg" alt="Mini excavator" loading="lazy" width={800} height={600} className="rounded-xl aspect-square object-cover mt-10 bg-white" />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: "4.9★", l: "Google Rating" },
    { v: "18+", l: "Years of Experience" },
    { v: "1599+", l: "Happy Clients" },
    { v: "24/7", l: "On-call Support" },
  ];
  return (
    <section className="py-16 bg-[var(--ink)] text-white">
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map(i => (
          <div key={i.l} className="text-center">
            <div className="font-display text-5xl md:text-6xl text-[var(--brand)]">{i.v}</div>
            <div className="mt-2 text-sm uppercase tracking-widest text-white/70">{i.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[var(--muted)]">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest text-[var(--brand)]">Client's Feedback</div>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-[var(--ink)]">Testimonials</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(t => (
            <figure key={t.name} className="bg-card rounded-xl p-6 border flex flex-col">
              <div className="flex gap-1 text-[var(--brand)]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-[var(--ink-soft)] text-sm leading-relaxed flex-1">"{t.text}"</blockquote>
              <figcaption className="mt-5 pt-4 border-t">
                <div className="font-semibold text-[var(--ink)]">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28">
      <div className="container-x max-w-3xl">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-[var(--brand)]">Questions</div>
          <h2 className="mt-2 font-display text-4xl md:text-5xl text-[var(--ink)]">Frequently Asked</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="border rounded-xl bg-card overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[var(--ink)]">
                {f.q}
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-muted-foreground text-sm">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "Mini Excavator",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", location: "", service: "Mini Excavator", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[var(--brand)] text-primary-foreground">
      <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl">Ready to dig in?</h2>
          <p className="mt-4 text-primary-foreground/90 max-w-md">Tell us about your site and we'll send a machine — and an operator — at the right time, every time.</p>
          <div className="mt-8 space-y-4 text-sm">
            <a href={PHONE_TEL} className="flex items-center gap-3 hover:underline"><Phone className="h-5 w-5" /> {PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:underline"><Mail className="h-5 w-5" /> {EMAIL}</a>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5" /> Balewadi-Baner, Pune, Maharashtra</div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white text-foreground rounded-xl p-6 shadow-xl">
          <h3 className="font-display text-2xl text-[var(--ink)]">Request a Quote</h3>
          {submitStatus === "success" && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-sm">
              Thank you! We'll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-md text-sm">
              Something went wrong. Please try again or call us directly.
            </div>
          )}
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            <input 
              required 
              placeholder="Your name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="px-4 py-3 rounded-md border bg-background outline-none focus:ring-2 ring-[var(--brand)]" 
            />
            <input 
              required 
              type="tel" 
              placeholder="Phone number" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="px-4 py-3 rounded-md border bg-background outline-none focus:ring-2 ring-[var(--brand)]" 
            />
          </div>
          <input 
            placeholder="Project location" 
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            className="mt-3 w-full px-4 py-3 rounded-md border bg-background outline-none focus:ring-2 ring-[var(--brand)]" 
          />
          <select 
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
            className="mt-3 w-full px-4 py-3 rounded-md border bg-background outline-none focus:ring-2 ring-[var(--brand)]"
          >
            <option>Mini Excavator</option><option>Mini Poclain</option><option>Compact Excavator</option><option>Mini Bobcat</option>
          </select>
          <textarea 
            rows={3} 
            placeholder="Tell us about your work" 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="mt-3 w-full px-4 py-3 rounded-md border bg-background outline-none focus:ring-2 ring-[var(--brand)]" 
          />
          <button 
            disabled={isSubmitting}
            className="mt-4 w-full rounded-md bg-[var(--brand)] text-primary-foreground py-3 font-semibold hover:brightness-110 transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white/80 pt-16 pb-8">
      <div className="container-x grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-3xl text-white">Vedika Enterprises</div>
          <p className="mt-3 text-sm text-white/70 max-w-md">A trusted name for mini excavator, poclain, compact and bobcat rentals across Pune and Maharashtra since 2007.</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Services</div>
          <ul className="space-y-2 text-sm">
            {services.map(s => <li key={s.title}><a href="#services" className="hover:text-[var(--brand)]">{s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li><a href={PHONE_TEL} className="hover:text-[var(--brand)]">{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-[var(--brand)] break-all">{EMAIL}</a></li>
            <li>Balewadi-Baner, Pune</li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
        <div>© {new Date().getFullYear()} Vedika Enterprises. All rights reserved.</div>
        <div>Mini Excavator on Hire · Pune, Maharashtra</div>
      </div>
    </footer>
  );
}
