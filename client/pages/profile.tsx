import React, { useState } from 'react';
import { useAuth } from '@/lib/auth';  // Custom hook to get the current user
import { useNavigate } from 'react-router-dom';  // For navigating programmatically
import { Button } from '@/components/ui/button';  // Custom button component
import { toast } from '@/components/ui/use-toast';

const tabs = ['Profile Information', 'Order History', 'Saved Cards', 'Address Information'] as const;

const Profile = () => {
  const { user, logout } = useAuth();  // Getting the user and logout from the auth context
  const navigate = useNavigate();
  const [active, setActive] = useState<number>(0);

  // Mock address and order data from localStorage
  const [addresses, setAddresses] = useState<any[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('addresses') || '[]');
    } catch {
      return [];
    }
  });

  const [orders] = useState<any[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('orders') || '[]');
    } catch {
      return [];
    }
  });

  // New address form state
  const [newAddressLine, setNewAddressLine] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("");
  const [newPincode, setNewPincode] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [showAddForm, setShowAddForm] = useState(false); 

  const handleSaveAddress = () => {
    if (!newAddressLine.trim()) {
      toast({ title: "Please enter an address" });
      return;
    }
    const addr = {
      address: `${newAddressLine}${newCity ? ', ' + newCity : ''}${newState ? ', ' + newState : ''}${newPincode ? ' - ' + newPincode : ''}${newCountry ? ', ' + newCountry : ''}`,
      createdAt: new Date().toISOString(),
    };
    const next = [...addresses, addr];
    setAddresses(next);
    try { localStorage.setItem('addresses', JSON.stringify(next)); } catch {}
    setNewAddressLine(""); setNewCity(""); setNewState(""); setNewPincode(""); setNewCountry("");
    toast({ title: 'Address saved' });
  };

  if (!user) {
    return (
      <div className="min-h-screen pt-[150px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg mb-4">You must be logged in to view your profile.</p>
          <Button onClick={() => navigate(-1)} className="bg-brand-yellow text-brand-blue">Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[150px] bg-background">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="mb-6">
          <Button onClick={() => navigate('/')} className="bg-brand-yellow hover:bg-[#816306] text-[#311659]">Back to Home</Button>
        </div>
        <div className="text-2xl font-bold text-curemist-purple mb-6">My Profile</div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <nav className="flex flex-col space-y-2">
              {tabs.map((t, i) => (
                <button
                  key={t}
                  onClick={() => setActive(i)}
                  className={`text-left p-3 rounded ${i === active ? 'bg-brand-yellow text-brand-blue font-semibold' : 'text-muted-foreground'}`}
                >
                  {t}
                </button>
              ))}
            </nav>
          </aside>

          <section className="lg:col-span-3 bg-white rounded border p-6">
            {/* Profile Information Tab */}
            {active === 0 && (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
  {/* Profile Image Section */}
  <div className="flex items-center gap-6 mb-6 lg:col-span-1">
    <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-xl font-bold">
      {user.name.slice(0, 1).toUpperCase()} {/* User's initials */}
    </div>
  </div>

  {/* Input Fields (First Name, Last Name, Phone Number, Email) */}
  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    <div className="flex flex-col">
      <label htmlFor="firstName" className="font-medium mb-1">First Name*</label>
      <input
        id="firstName"
        className="border p-3 rounded"
        placeholder="First Name"
        defaultValue={user.name.split(' ')[0]}
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="lastName" className="font-medium mb-1">Last Name*</label>
      <input
        id="lastName"
        className="border p-3 rounded"
        placeholder="Last Name"
        defaultValue={user.name.split(' ')[1] || ''}
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="phoneNumber" className="font-medium mb-1">Phone Number*</label>
      <input
        id="phoneNumber"
        className="border p-3 rounded"
        placeholder="Phone Number"
        defaultValue=""
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="email" className="font-medium mb-1">Email Address*</label>
      <input
        id="email"
        className="border p-3 rounded"
        placeholder="Email Address"
        defaultValue={user.email}
      />
    </div>
  </div>
</div>
                <div className="mb-6 display">
                  <h3 className="font-bold mb-10 text-[#311659]">Change Password</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col">
                <label htmlFor="oldPassword" className="font-medium mb-1">Old Password*</label>
                <input
                id="oldPassword"
                className="border p-3 rounded"
                placeholder="Old Password"
                type="password"/>
                </div>
  
                <div className="flex flex-col">
                <label htmlFor="newPassword" className="font-medium mb-1">New Password*</label>
                <input
                id="newPassword"
                className="border p-3 rounded"
                placeholder="New Password"
                type="password"
                />
                </div>

                <div className="flex flex-col justify-end">
                <button className="bg-brand-yellow text-brand-blue px-6 py-3 rounded font-semibold">
                UPDATE
                </button>
                </div>
                </div>
                </div>
              </div>
            )}

            {/* Order History Tab */}
            {active === 1 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Order History</h3>
                {orders.length === 0 ? (
                  <div>
                    <p>You don't have any orders yet.</p>
                    <button onClick={() => navigate('/')} className="mt-4 bg-brand-yellow text-brand-blue px-4 py-2 rounded">CONTINUE SHOPPING</button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((ord, idx) => (
                      <div key={idx} className="border p-4 rounded flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{ord.title}</div>
                          <div className="text-sm text-muted-foreground">Order placed: {ord.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">Qty: {ord.quantity}</div>
                          <div className="font-bold">₹{ord.total}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Saved Cards Tab */}
            {active === 2 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Saved Cards</h3>
                <p>No cards saved yet.</p>
              </div>
            )}

            {/* Address Information Tab */}
            {active === 3 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Address Information</h3>
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="bg-brand-yellow text-brand-blue px-4 py-2 rounded"
                  >
                    ADD NEW
                  </button>
                </div>
                {addresses.length === 0 ? (
                  <div className="text-muted-foreground">No addresses yet.</div>
                ) : (
                  <div className="space-y-4">
                    {addresses.map((a, i) => (
                      <div key={i} className="border p-4 rounded">{a.address}</div>
                    ))}
                  </div>
                )}

                {/* Show Address Form */}
                {showAddForm && (
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Add Address</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <input
                        value={newAddressLine}
                        onChange={(e) => setNewAddressLine(e.target.value)}
                        className="border p-3 rounded"
                        placeholder="Address line"
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                          value={newCity}
                          onChange={(e) => setNewCity(e.target.value)}
                          className="border p-3 rounded"
                          placeholder="City"
                        />
                        <input
                          value={newState}
                          onChange={(e) => setNewState(e.target.value)}
                          className="border p-3 rounded"
                          placeholder="State"
                        />
                        <input
                          value={newPincode}
                          onChange={(e) => setNewPincode(e.target.value)}
                          className="border p-3 rounded"
                          placeholder="Pincode"
                        />
                      </div>
                      <input
                        value={newCountry}
                        onChange={(e) => setNewCountry(e.target.value)}
                        className="border p-3 rounded"
                        placeholder="Country"
                      />
                      <div className="flex justify-end">
                        <button
                          onClick={handleSaveAddress}
                          className="bg-brand-yellow text-brand-blue px-4 py-2 rounded"
                        >
                          Save Address
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Logout Button at the bottom */}
            <div className="mt-6">
              <Button onClick={logout} className="bg-red-500 text-white hover:bg-red-600 px-6 py-3 rounded font-semibold">
                Logout
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Profile;
