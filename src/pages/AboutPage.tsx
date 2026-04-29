import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import PageHero from "@/components/PageHero";
import aboutImg from "@/assets/hero/hero-4.jpg";

const values = [
  { num: "01", title: "Quality", description: "Premium materials, proven techniques, finishes that age well." },
  { num: "02", title: "Client focus", description: "We work to your brief — not around it." },
  { num: "03", title: "Schedule", description: "Deadlines respected. Project plans we keep to." },
  { num: "04", title: "Safety", description: "Workers, clients and communities protected on every site." },
  { num: "05", title: "Innovation", description: "Modern methods where they make the work better, not louder." },
  { num: "06", title: "Integrity", description: "Honest dealings — the work and the paperwork both." },
];

const team = [
  { title: "Architects", description: "Licensed architects translating vision into structure." },
  { title: "Interior Designers", description: "Functional, considered interiors for every brief." },
  { title: "Civil Engineers", description: "Structural integrity and road infrastructure expertise." },
  { title: "Skilled Tradespeople", description: "Masons, carpenters, electricians, plumbers, finishers." },
  { title: "Plant Operators", description: "Certified operators for excavators, rollers, dozers and more." },
];

const stats = [
  { value: "50+", label: "Projects" },
  { value: "100+", label: "Clients" },
  { value: "5+", label: "Years" },
  { value: "02", label: "Offices" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        eyebrow="№02 — Studio"
        title="A practice built on the ground."
        subtitle="Shena Works Limited is a registered Kenyan firm in road construction, building, architecture, interior design and project management — with offices in Meru and Nairobi."
        image={aboutImg}
      />

      {/* Story */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">Origin</p>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-6 text-foreground/80 text-[16px] leading-[1.65]">
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-[1.25] tracking-tight text-balance">
                Founded with a clear brief — to become Kenya's most trusted construction and design partner.
              </p>
              <p>
                From a small contracting outfit, we have grown into an integrated firm offering everything from road construction to architectural design. Civil engineering, architecture, interior design and project management sit under the same roof, so projects move through one team rather than four.
              </p>
              <p>
                Today we serve clients across Kenya from offices in Meru and Nairobi — committed to building the infrastructure that connects communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — minimal numeric ledger */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-6 md:py-8 ${i !== stats.length - 1 ? "md:border-r border-[hsl(var(--rule))]" : ""} ${i % 2 === 0 ? "border-r border-[hsl(var(--rule))] md:border-r" : ""} ${i < 2 ? "border-b md:border-b-0 border-[hsl(var(--rule))]" : ""} md:px-8 px-2`}
              >
                <p className="font-serif text-5xl md:text-6xl text-foreground tracking-tight">{s.value}</p>
                <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground mt-3">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <div className="col-span-12 md:col-span-3">
              <p className="eyebrow">Principles</p>
            </div>
            <h2 className="col-span-12 md:col-span-8 display-md text-foreground text-balance">
              Six things we don't compromise on.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.05 }}
                className={`grid grid-cols-12 gap-4 py-8 border-t border-[hsl(var(--rule))] ${i === values.length - 1 || (values.length % 2 === 0 && i === values.length - 2) ? "border-b" : ""} ${i % 2 === 0 ? "md:pr-12" : "md:pl-12 md:border-l"} `}
              >
                <p className="col-span-2 font-mono text-[11px] text-muted-foreground pt-1">{v.num}</p>
                <div className="col-span-10">
                  <h3 className="font-serif text-2xl text-foreground mb-2">{v.title}</h3>
                  <p className="text-foreground/70 text-[15px] leading-[1.55]">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-b border-[hsl(var(--rule))]">
        <div className="container-custom py-20 md:py-28">
          <div className="grid grid-cols-12 gap-6 mb-14">
            <p className="col-span-12 md:col-span-3 eyebrow">Leadership</p>
            <h2 className="col-span-12 md:col-span-8 display-md text-foreground text-balance">
              Two directors, one site.
            </h2>
          </div>

          {/* Newton */}
          <div className="grid grid-cols-12 gap-6 py-10 border-t border-[hsl(var(--rule))]">
            <div className="col-span-2 font-mono text-[11px] text-muted-foreground">01</div>
            <div className="col-span-12 md:col-span-4">
              <h3 className="font-serif text-3xl text-foreground tracking-tight">Newton M. Muthee</h3>
              <p className="text-muted-foreground text-sm mt-1">Director & Lead Civil Engineer · Meru</p>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-7 space-y-4 text-foreground/75 text-[15px] leading-[1.65]">
              <p>
                A qualified Civil Engineer with over 5 years of hands-on experience in road construction, building projects, and infrastructure across Kenya. Founding director of Shena Works Limited.
              </p>
              <p>
                Technical expertise across road construction, drainage, structural engineering and project management. Has overseen successful delivery for both private clients and government agencies.
              </p>
            </div>
          </div>

          {/* Sharon */}
          <div className="grid grid-cols-12 gap-6 py-10 border-t border-b border-[hsl(var(--rule))]">
            <div className="col-span-2 font-mono text-[11px] text-muted-foreground">02</div>
            <div className="col-span-12 md:col-span-4">
              <h3 className="font-serif text-3xl text-foreground tracking-tight">Sharon K. Muthee</h3>
              <p className="text-muted-foreground text-sm mt-1">Co-Director · Nairobi</p>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-7 text-foreground/75 text-[15px] leading-[1.65]">
              <p>
                Co-Director of Shena Works Limited, leading strategic direction and business operations from Nairobi. Manages client relations and oversees administrative coordination across all projects.
              </p>
            </div>
          </div>

          {/* Team */}
          <div className="grid grid-cols-12 gap-6 mt-14">
            <p className="col-span-12 md:col-span-3 eyebrow">The team</p>
            <div className="col-span-12 md:col-span-9">
              {team.map((t, i) => (
                <div key={t.title} className={`grid grid-cols-12 gap-4 py-5 border-t border-[hsl(var(--rule))] ${i === team.length - 1 ? "border-b" : ""}`}>
                  <p className="col-span-2 font-mono text-[11px] text-muted-foreground pt-1">{String(i + 1).padStart(2, "0")}</p>
                  <h4 className="col-span-12 md:col-span-4 font-serif text-xl text-foreground">{t.title}</h4>
                  <p className="col-span-12 md:col-span-6 text-foreground/70 text-[14px] leading-[1.55]">{t.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default AboutPage;
