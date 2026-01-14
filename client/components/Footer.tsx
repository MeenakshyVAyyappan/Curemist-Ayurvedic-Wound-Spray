import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-brand-yellow py-16 relative">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo and Address */}
          <div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d73fc794110572fa295e54d871082a55e45fcda5?width=380"
              alt="Cure Mist Logo"
              className="h-[62px] w-auto mb-6"
            />
            <div className="space-y-2">
              <p className="text-lg font-extrabold text-black">Altus Pharma</p>
              <p className="text-base font-medium text-black leading-relaxed">
                13/223 B,C ,sukapuram Complex,<br />
                Near Chambaramanam Temple Naduvattom,<br />
                Sugapuram po, Edappal, Kerala 679576
              </p>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block"></div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center bg-brand-blue text-white rounded-full p-2">
                <FiPhone size={18} />
              </span>
              <span className="text-lg font-medium text-black">+91 88488 15296</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center bg-brand-blue text-white rounded-full p-2">
                <FiMail size={18} />
              </span>
              <span className="text-lg font-medium text-black">support@curemist.in</span>
            </div>
            <div>
              <p className="text-base font-medium text-black mb-3">Follow us :</p>
              <div className="flex items-center gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <span className="inline-flex items-center justify-center bg-brand-blue text-white rounded-full p-2">
                    <FaFacebookF size={16} />
                  </span>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <span className="inline-flex items-center justify-center bg-brand-blue text-white rounded-full p-2">
                    <FaInstagram size={16} />
                  </span>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <span className="inline-flex items-center justify-center bg-brand-blue text-white rounded-full p-2">
                    <FaYoutube size={16} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#BE8F00] mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-lg font-medium text-black">
            © 2025 Cure Mist. All rights reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918848815296"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 z-50 hover:scale-110 transition-transform bg-[#25D366] text-white rounded-full p-3 shadow-lg"
      >
        <FaWhatsapp size={20} />
      </a>
    </footer>
  );
}
