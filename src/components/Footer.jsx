import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "react-feather";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="w-full px-6 py-16 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img src="/logo.png" alt="Arigato" className="h-12 mb-4" />
            <p className="text-sm text-primary/70 mb-6 max-w-xs">
              Gracious hospitality. Effortless luxury. Unforgettable
              impressions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/arigatoevents/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/70 hover:text-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:hello@arigato.com"
                className="text-primary/70 hover:text-primary transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+919284749367"
                className="text-primary/70 hover:text-primary transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-primary">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/memberships"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  Memberships
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-primary">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  Event Concierge
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  Destination Venue Curation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  Wedding Content Creation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  Private Jets & Choppers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-primary">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-primary/70">
                1, Modi House, Veera Desai
              </li>
              <li className="text-sm text-primary/70">Andheri West, Mumbai</li>
              <li className="text-sm text-primary/70">+91 92847 49367</li>
              <li className="text-sm text-primary/70">+91 93566 66633</li>
              <li>
                <a
                  href="mailto:hello@arigato.com"
                  className="text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  hello@arigato.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-primary/70">
            &copy; {currentYear} Arigato Luxury Concierge. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              to="/privacy"
              className="text-xs text-primary/70 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-primary/70 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
