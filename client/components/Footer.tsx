const FacebookIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.9997 11.7269V13.2883C24.9242 13.5692 24.9339 13.8906 24.8949 14.184C24.1677 19.6809 19.6872 24.1764 14.1813 24.8948C13.8877 24.9333 13.5668 24.9248 13.2855 24.9991H11.7237L10.2015 24.7886C4.97692 23.8192 0.80374 19.4664 0.113636 14.184C0.0752244 13.8906 0.0836879 13.5692 0.00881813 13.2883C0.0309535 12.7719 -0.0211298 12.2413 0.00881813 11.7269C0.405302 4.95753 6.39163 -0.330088 13.1631 0.0160747C19.4118 0.335509 24.6345 5.48102 24.9997 11.7269Z" fill="currentColor"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.286 0L14.5653 0.160645C19.9052 1.0332 24.1937 5.44873 24.8959 10.8223C24.9344 11.1157 24.9257 11.437 25.0004 11.7188V13.2812C24.9252 13.5625 24.9344 13.8843 24.8959 14.1777C24.1825 19.561 19.9149 23.9546 14.5653 24.8394L13.286 25H11.724C11.4427 24.9248 11.1215 24.9341 10.828 24.8955C5.31677 24.1646 0.835815 19.6987 0.114624 14.1777C0.0760498 13.8843 0.0848389 13.563 0.0101319 13.2812C0.0325928 12.7646 -0.0201416 12.2339 0.0101319 11.7188C0.372437 5.51855 5.52722 0.362793 11.724 0H13.286Z" fill="currentColor"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6443 14.6345L14.3558 12.4999L10.6443 10.3652V14.6345Z" fill="currentColor"/>
    <path d="M12.5 0C5.59615 0 0 5.59615 0 12.5C0 19.4038 5.59615 25 12.5 25C19.4038 25 25 19.4038 25 12.5C25 5.59615 19.4038 0 12.5 0Z" fill="currentColor"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 14.6566C12.919 14.6566 12.8414 14.6364 12.7672 14.5993L7.43291 11.8292V17.3896H18.5637V11.8292L13.2294 14.5993C13.1552 14.6364 13.0776 14.6566 12.9966 14.6566H13Z" fill="currentColor"/>
    <path d="M13 0C5.82014 0 0 5.82014 0 13C0 20.1799 5.82014 26 13 26C20.1799 26 26 20.1799 26 13C26 5.82014 20.1799 0 13 0Z" fill="currentColor"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.0015 0C20.1806 0 26.0031 5.81942 26.0031 13.0015C26.0031 20.1837 20.1837 26.0031 13.0015 26.0031C5.81942 26.0031 0 20.1806 0 13.0015C0 5.82251 5.81942 0 13.0015 0Z" fill="currentColor"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45 20C42.9 17.9 40.3 16.3 37.5 15.3C34.6 14.3 31.6 13.8 28.5 14C17.4 14.5 8.5 23.6 8.5 34.7C8.5 38.1 9.4 41.4 11 44.4L8.3 56.7L20.9 54C23.8 55.5 27 56.3 30.3 56.3C41.5 56.3 50.7 47.1 50.7 35.9C50.7 30.4 48.5 25.3 45 21.8V20Z" fill="currentColor"/>
  </svg>
);

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
                <PhoneIcon />
              </span>
              <span className="text-lg font-medium text-black">+91 88488 15296</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center bg-brand-blue text-white rounded-full p-2">
                <EmailIcon />
              </span>
              <span className="text-lg font-medium text-black">support@curemist.in</span>
            </div>
            <div>
              <p className="text-base font-medium text-black mb-3">Follow us :</p>
              <div className="flex items-center gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <span className="inline-flex items-center justify-center bg-brand-blue text-white rounded-full p-2">
                    <FacebookIcon />
                  </span>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <span className="inline-flex items-center justify-center bg-brand-blue text-white rounded-full p-2">
                    <InstagramIcon />
                  </span>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <span className="inline-flex items-center justify-center bg-brand-blue text-white rounded-full p-2">
                    <YoutubeIcon />
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
        <WhatsAppIcon />
      </a>
    </footer>
  );
}
