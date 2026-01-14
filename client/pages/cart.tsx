import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/lib/cart";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

export default function CartPage() {
  const { items, count, updateQty, removeItem, clearCart, subtotal } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const navigate = useNavigate();

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SAVE10") {
      setDiscountAmount(Math.round(subtotal * 0.1));
    } else {
      setDiscountAmount(0);
      alert("Invalid coupon code");
    }
  };

  const totalPayable = subtotal - discountAmount;

  return (
    <div className="min-h-screen pt-[150px] bg-background">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Items and actions */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Cart ({count} item{count !== 1 ? "s" : ""})</h2>
              <div className="flex gap-3">
                <button onClick={clearCart} className="text-sm text-red-600 font-semibold border border-red-200 px-4 py-2 rounded">Clear Cart</button>
                <button onClick={() => navigate(-1)} className="text-sm bg-brand-yellow px-4 py-2 rounded text-brand-blue font-semibold">Continue Shopping</button>
              </div>
            </div>

            {items.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-lg">Your cart is empty.</p>
                <Link to="/" className="inline-block mt-4 bg-brand-yellow px-6 py-3 rounded text-brand-blue font-bold">Go Shopping</Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((it) => (
                  <div key={it.id} className="flex items-center gap-4 border rounded p-4">
                    <img src={it.image} alt={it.title} className="w-28 h-28 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{it.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{it.size}</p>
                      <div className="flex items-center gap-3">
                        <div className="inline-flex items-center rounded-md bg-[#FFF8EC] p-2">
                          <button onClick={() => updateQty(it.id, it.quantity - 1)} className="px-3 py-2 text-lg text-brand-blue font-bold"><FiMinus /></button>
                          <div className="mx-3 bg-white px-6 py-2 rounded-md border shadow-sm">{it.quantity.toString().padStart(2, '0')}</div>
                          <button onClick={() => updateQty(it.id, it.quantity + 1)} className="px-3 py-2 text-lg text-brand-blue font-bold"><FiPlus /></button>
                        </div>

                        <div className="ml-auto text-right">
                          <div className="text-sm text-gray-700">Price: ₹{it.price}</div>
                          <div className="text-sm text-gray-500 line-through">{it.originalPrice ? `₹${it.originalPrice}` : ''}</div>
                          <div className="text-lg font-bold">₹{it.price * it.quantity}</div>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => removeItem(it.id)} className="text-red-500"><FiTrash2 /></button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Summary */}
          <aside className="rounded border p-6 bg-white">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Discount</span>
              <span>-₹{discountAmount}</span>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Coupon</label>
              <div className="flex gap-2">
                <input value={coupon} onChange={(e) => setCoupon(e.target.value)} className="flex-1 border px-3 py-2 rounded" placeholder="Enter coupon code" />
                <button onClick={applyCoupon} className="bg-brand-blue text-white px-4 pl-0 py-2 rounded">Apply Coupon</button>
              </div>
            </div>

            <div className="flex justify-between items-center border-t pt-4 mt-4">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-lg">₹{totalPayable}</span>
            </div>

            <button className="w-full bg-brand-yellow text-brand-blue font-bold py-3 rounded mt-6">Checkout</button>
          </aside>
        </div>
      </div>
    </div>
  );
}
