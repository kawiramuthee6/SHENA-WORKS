import { Link } from "react-router-dom";
import logo from "@/assets/shena-works-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-cream">
      {/* Massive editorial wordmark */}
      <div className="container-custom pt-20 pb-12 border-b border-cream/15">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-cream/50 mb-4">Let's build —</p>
            <h2 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-tight text-cream">
              shenaworksltd
              <br />
              <span className="text-cream/40">@gmail.com</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:text-right">
            <a href="mailto:shenaworksltd@gmail.com" className="inline-block border-b border-cream pb-1 font-mono text-xs uppercase tracking-[0.2em] text-cream hover:text-cream/70 transition-colors">
              Start a project →
            </a>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <img src={logo} alt="" className="h-10 w-auto mb-5 brightness-0 invert opacity-70" />
            <p className="text-cream/60 text-sm leading-relaxed max-w-sm">
              A construction and design firm based in Kenya. We build roads, buildings, and the systems that connect them.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-4">Pages</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-cream/80 hover:text-cream">Index</Link></li>
              <li><Link to="/about" className="text-cream/80 hover:text-cream">Studio</Link></li>
              <li><Link to="/services" className="text-cream/80 hover:text-cream">Practice</Link></li>
              <li><Link to="/portfolio" className="text-cream/80 hover:text-cream">Work</Link></li>
              <li><Link to="/contact" className="text-cream/80 hover:text-cream">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-4">Practice</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services/road-construction" className="text-cream/80 hover:text-cream">Road Construction</Link></li>
              <li><Link to="/services/general-construction" className="text-cream/80 hover:text-cream">General Construction</Link></li>
              <li><Link to="/services/architecture" className="text-cream/80 hover:text-cream">Architecture</Link></li>
              <li><Link to="/services/interior-design" className="text-cream/80 hover:text-cream">Interior Design</Link></li>
              <li><Link to="/services/bills-of-quantities" className="text-cream/80 hover:text-cream">Bills of Quantities</Link></li>
              <li><Link to="/services/project-management" className="text-cream/80 hover:text-cream">Project Management</Link></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-cream/40 mb-4">Offices</p>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-cream">Meru</p>
                <a href="tel:+254718971896" className="text-cream/60 hover:text-cream block">+254 718 971 896</a>
              </div>
              <div>
                <p className="text-cream">Nairobi</p>
                <a href="tel:+254707243053" className="text-cream/60 hover:text-cream block">+254 707 243 053</a>
              </div>
              <a href="https://www.instagram.com/shenaworksltd" target="_blank" rel="noopener noreferrer" className="inline-block text-cream/60 hover:text-cream pt-2">
                Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Baseline */}
      <div className="border-t border-cream/15">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] tracking-[0.18em] uppercase text-cream/40">
          <p>© {currentYear} Shena Works Limited</p>
          <p>Roads & Building Construction Contractors</p>
          <p>Kenya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
