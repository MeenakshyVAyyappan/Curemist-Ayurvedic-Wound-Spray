import React, { useState } from 'react';
import { useAuth } from "@/lib/auth";

const AuthPopup = ({ onClose }: { onClose: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();

  // Toggle between login and register forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.querySelector('#email') as HTMLInputElement).value;
    const name = email.split('@')[0];
    // Simple mock login
    login({ name: name.charAt(0).toUpperCase() + name.slice(1), email, avatar: undefined });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        {/* X Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-2xl text-purple-900 font-bold text-center mb-4">{isLogin ? "Login" : "Register"}</h2>

        {/* Login Form */}
        {isLogin ? (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-purple-900 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm text-purple-900 font-semibold">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="mb-4 flex justify-end">
              <button
                type="submit"
                className="w-[100px] bg-[#F2B705] text-purple-900 p-2 rounded hover:bg-[#816306]"
              >
                Login
              </button>
            </div>
          </form>
        ) : (
          // Registration Form (if needed)
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-purple-900 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm text-purple-900 font-semibold">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your password"
                required
              />
            </div>


             <div className="mb-4">
              <label htmlFor="password" className="block text-sm text-purple-900 font-semibold">Comfirm Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="mb-4 flex justify-end">
              <button
                type="submit"
                className="w-[100px] bg-[#F2B705] text-purple-900 p-2 rounded hover:bg-[#816306]"
              >
                Register
              </button>
            </div>
          </form>
        )}

        {/* Don't have an account? Register now / Already have an account? Login here */}
        <div className="text-center text-sm mt-4">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-purple-900 font-bold hover:underline"
              >
                Register now
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={toggleForm}
                className="text-purple-900 font-bold hover:underline"
              >
                Login here
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPopup;

