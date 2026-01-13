import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top Scrolling Banner */}
      <div className="bg-brand-blue h-[50px] overflow-hidden relative">
        <div className="absolute inset-0 flex items-center">
          <div className="flex animate-scroll whitespace-nowrap">
            <span className="text-white text-sm font-medium tracking-wider px-4">
              Instant Protection • Faster Healing • 100% Ayurvedic Care • Instant Protection • Faster Healing • 100% Ayurvedic Care • Instant Protection • Faster Healing • 100% Ayurvedic Care • Instant Protection • Faster Healing • 100% Ayurvedic Care •
            </span>
            <span className="text-white text-sm font-medium tracking-wider px-4">
              Instant Protection • Faster Healing • 100% Ayurvedic Care • Instant Protection • Faster Healing • 100% Ayurvedic Care • Instant Protection • Faster Healing • 100% Ayurvedic Care • Instant Protection • Faster Healing • 100% Ayurvedic Care •
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-brand-yellow h-[95px] flex items-center justify-between px-6 lg:px-24">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/be98dd27d5fc46f36a990500215b312b985d0f4e?width=380"
            alt="Cure Mist Logo"
            className="h-[62px] w-auto"
          />
        </Link>
        {/* Right Actions */}
        
        <div className="flex items-center gap-6">
          <div className="px-6 py-2 rounded-[14px] border border-[#FFF0C3] bg-gradient-to-r from-[#FFE38D] to-[#FFD147]">
              <span className="text-brand-blue text-sm font-bold">Made by Scientists</span>
            </div>
             <div className="px-6 py-2 rounded-[14px] border border-[#FFF0C3] bg-gradient-to-r from-[#FFE38D] to-[#FFD147]">
              <span className="text-brand-blue text-sm font-bold">AYUSH approved</span>
            </div>
          <Link to="/blog" className="hidden md:inline-flex items-center text-brand-blue text-sm font-semibold hover:opacity-80 mr-2">
            BLOG
          </Link>
          <button className="hidden md:flex items-center gap-2 text-brand-blue text-sm font-medium hover:opacity-80">
            <User className="w-[17px] h-[22px]" />
            <span>My Profile</span>
          </button>
          <button className="flex items-center gap-2 text-brand-blue text-sm font-medium hover:opacity-80">
            <ShoppingCart className="w-[26px] h-[23px]" />
            <span>Cart (0)</span>
          </button>
        </div>
      </div>
    </header>
  );
}
