import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/lib/cart";
import React, { useState } from "react";
import AuthPopup from "./Authpopup";
import { useAuth } from "@/lib/auth";
import { Avatar } from "./ui/avatar";

// Cart Count Component
function CartCount() {
  const { count } = useCart();
  return <span>Cart ({count})</span>;
}

export default function Header() {
  // State for showing/hiding profile popup
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  // toggle profile popup visibility
  const toggleProfilePopup = () => setShowProfilePopup(!showProfilePopup);

  // auth
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top Scrolling Banner */}
      <div className="bg-brand-blue h-[50px] overflow-hidden relative">
        <div className="absolute inset-0 flex items-center">
          <div className="flex animate-scroll whitespace-nowrap">
            <span className="text-white text-sm font-medium tracking-wider px-4">
              Instant Protection • Faster Healing • 100% Ayurvedic Care •
            </span>
            <span className="text-white text-sm font-medium tracking-wider px-4">
              Instant Protection • Faster Healing • 100% Ayurvedic Care •
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
          {/* Profile Button / Login */}
          {!user ? (
            <button
              onClick={toggleProfilePopup}
              className="hidden md:flex items-center gap-2 text-brand-blue text-sm font-medium hover:opacity-80"
            >
              <User className="w-[17px] h-[22px]" />
              <span>Login</span>
            </button>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link to="/profile" className="flex items-center gap-2 text-brand-blue text-sm font-medium hover:opacity-80">
                <Avatar>
                  {user?.avatar ? (
                    <img src={user.avatar} className="h-full w-full object-cover" alt={user.name} />
                  ) : (
                    <div className="text-sm font-semibold text-brand-blue">{user?.name?.slice(0,1).toUpperCase()}</div>
                  )}
                </Avatar>
                <span>My Profile</span>
              </Link>
            </div>
          )}
          <Link to="/cart" className="flex items-center gap-2 text-brand-blue text-sm font-medium hover:opacity-80">
            <ShoppingCart className="w-[26px] h-[23px]" />
            <CartCount />
          </Link>
        </div>
      </div>

      {/* Render Profile Popup if visible */}
       {showProfilePopup && <AuthPopup onClose={toggleProfilePopup} />}
    </header>
  );
}
