import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/lib/cart';
import { useAuth } from '@/lib/auth';
import { toast } from '@/components/ui/use-toast';

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export default function Checkout() {
  const { items, subtotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Customer Information
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    email: user?.email || '',
    phone: '',
  });

  // Shipping Address
  const [shippingAddress, setShippingAddress] = useState<Address>({
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  // Billing Address
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [billingAddress, setBillingAddress] = useState<Address>({
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  // Payment Information
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Tax and Shipping Calculation
  // GST is already included in the product price, so we extract it for display purposes only
  const gstRate = 0.18; // 18% GST
  const gstAmount = Math.round(subtotal * (gstRate / (1 + gstRate))); // Extract GST from the inclusive subtotal
  const shippingFee = subtotal > 500 ? 0 : 100;
  const totalPrice = subtotal + shippingFee; // No additional GST since it's already in the subtotal

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!customerInfo.firstName || !customerInfo.lastName || !customerInfo.email || !customerInfo.phone) {
      toast({ title: 'Error', description: 'Please fill in all customer information' });
      return;
    }

    if (!shippingAddress.street || !shippingAddress.city || !shippingAddress.state || !shippingAddress.zip || !shippingAddress.country) {
      toast({ title: 'Error', description: 'Please fill in all shipping address fields' });
      return;
    }

    if (!sameAsBilling) {
      if (!billingAddress.street || !billingAddress.city || !billingAddress.state || !billingAddress.zip || !billingAddress.country) {
        toast({ title: 'Error', description: 'Please fill in all billing address fields' });
        return;
      }
    }

    if (!paymentInfo.cardNumber || !paymentInfo.expiryDate || !paymentInfo.cvv) {
      toast({ title: 'Error', description: 'Please fill in all payment information' });
      return;
    }

    // Store order in localStorage
    const order = {
      id: Date.now().toString(),
      customerInfo,
      shippingAddress,
      billingAddress: sameAsBilling ? shippingAddress : billingAddress,
      items,
      subtotal,
      gstAmount,
      shippingFee,
      totalPrice,
      date: new Date().toISOString(),
    };

    try {
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders.push(order);
      localStorage.setItem('orders', JSON.stringify(orders));
    } catch {}

    toast({ title: 'Success', description: 'Order placed successfully!' });
    setTimeout(() => navigate('/profile'), 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-[150px] flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-lg mb-4">Your cart is empty.</p>
          <button onClick={() => navigate('/')} className="bg-brand-yellow text-brand-blue px-6 py-3 rounded font-bold">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[110px] md:pt-[145px] bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-24 py-6 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-curemist-purple mb-6 md:mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handlePlaceOrder} className="space-y-8">
              {/* Customer Information */}
              <section className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-bold text-curemist-purple mb-4">Customer Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      value={customerInfo.firstName}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, firstName: e.target.value })}
                      className="w-full border p-3 rounded"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={customerInfo.lastName}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, lastName: e.target.value })}
                      className="w-full border p-3 rounded"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full border p-3 rounded"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full border p-3 rounded"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
              </section>

              {/* Shipping Address */}
              <section className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-bold text-curemist-purple mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Street Address *</label>
                    <input
                      type="text"
                      value={shippingAddress.street}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value })}
                      className="w-full border p-3 rounded"
                      placeholder="Street Address"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City/Town *</label>
                      <input
                        type="text"
                        value={shippingAddress.city}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                        className="w-full border p-3 rounded"
                        placeholder="City/Town"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">State/Province *</label>
                      <input
                        type="text"
                        value={shippingAddress.state}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                        className="w-full border p-3 rounded"
                        placeholder="State/Province"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">ZIP/Postal Code *</label>
                      <input
                        type="text"
                        value={shippingAddress.zip}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, zip: e.target.value })}
                        className="w-full border p-3 rounded"
                        placeholder="ZIP/Postal Code"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Country *</label>
                      <input
                        type="text"
                        value={shippingAddress.country}
                        onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                        className="w-full border p-3 rounded"
                        placeholder="Country"
                        required
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Billing Address */}
              <section className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-bold text-curemist-purple mb-4">Billing Address</h2>
                <div className="mb-4 flex items-center">
                  <input
                    type="checkbox"
                    id="sameAddress"
                    checked={sameAsBilling}
                    onChange={(e) => setSameAsBilling(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <label htmlFor="sameAddress" className="ml-2 text-sm font-medium">
                    Billing address is the same as shipping address
                  </label>
                </div>

                {!sameAsBilling && (
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Street Address *</label>
                      <input
                        type="text"
                        value={billingAddress.street}
                        onChange={(e) => setBillingAddress({ ...billingAddress, street: e.target.value })}
                        className="w-full border p-3 rounded"
                        placeholder="Street Address"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">City/Town *</label>
                        <input
                          type="text"
                          value={billingAddress.city}
                          onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}
                          className="w-full border p-3 rounded"
                          placeholder="City/Town"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">State/Province *</label>
                        <input
                          type="text"
                          value={billingAddress.state}
                          onChange={(e) => setBillingAddress({ ...billingAddress, state: e.target.value })}
                          className="w-full border p-3 rounded"
                          placeholder="State/Province"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">ZIP/Postal Code *</label>
                        <input
                          type="text"
                          value={billingAddress.zip}
                          onChange={(e) => setBillingAddress({ ...billingAddress, zip: e.target.value })}
                          className="w-full border p-3 rounded"
                          placeholder="ZIP/Postal Code"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Country *</label>
                        <input
                          type="text"
                          value={billingAddress.country}
                          onChange={(e) => setBillingAddress({ ...billingAddress, country: e.target.value })}
                          className="w-full border p-3 rounded"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Payment Information */}
              <section className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-bold text-curemist-purple mb-4">Payment Information</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Card Number *</label>
                    <input
                      type="text"
                      value={paymentInfo.cardNumber}
                      onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value.replace(/\D/g, '').slice(0, 16) })}
                      className="w-full border p-3 rounded"
                      placeholder="1234 5678 9012 3456"
                      maxLength={16}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiration Date (MM/YY) *</label>
                      <input
                        type="text"
                        value={paymentInfo.expiryDate}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          if (val.length >= 2) {
                            setPaymentInfo({ ...paymentInfo, expiryDate: `${val.slice(0, 2)}/${val.slice(2, 4)}` });
                          } else {
                            setPaymentInfo({ ...paymentInfo, expiryDate: val });
                          }
                        }}
                        className="w-full border p-3 rounded"
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV/CVC *</label>
                      <input
                        type="text"
                        value={paymentInfo.cvv}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) })}
                        className="w-full border p-3 rounded"
                        placeholder="123"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Place Order Button */}
              <button
                type="submit"
                className="w-full bg-brand-yellow text-brand-blue font-bold py-4 rounded-lg text-lg hover:bg-[#816306] transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <aside className="bg-white rounded-lg border p-4 md:p-6 h-fit lg:sticky lg:top-40">
            <h2 className="text-lg md:text-xl font-bold text-curemist-purple mb-4">Order Summary</h2>

            {/* Itemized List */}
            <div className="space-y-3 mb-6 pb-6 border-b max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="flex-1">{item.title} x {item.quantity}</span>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal (Inc. GST)</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>GST Included (18%)</span>
                <span>₹{gstAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className={shippingFee === 0 ? 'text-green-600 font-semibold' : ''}>
                  {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t pt-4 mt-4">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-xl text-brand-blue">₹{totalPrice}</span>
            </div>

            {shippingFee === 0 && (
              <p className="text-green-600 text-xs mt-2 text-center">Free shipping applied!</p>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
