export default function StatsSection() {
  const stats = [
    {
      icon: <img src="/icons/homeicon1.png" alt="Users Icon" className="h-[72px]" />,
      number: "10,000+",
      description: "users across India"
    },
    {
      icon: <img src="/icons/homeicon2.png" alt="Households Icon" className="h-[72px]" />,
      number: "5,000+",
      description: "Households trust Cure Mist"
    },
    {
      icon: <img src="/icons/homeicon3.png" alt="Clinics Icon" className="h-[72px]" />,
      number: "100+",
      description: "Clinics are Using Cure Mist"
    },
    {
      icon: <img src="/icons/homeicon4.png" alt="Protection Icon" className="h-[72px]" />,
      number: "99%",
      description: "Protection Against External Contaminants"
    }
  ];

  return (
    <section className="relative py-16 bg-#ffffff">
      <div className="absolute top-[-140px] left-0 right-0">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#FFE9AE] to-[#FFD147] rounded-lg p-8 flex flex-col items-center text-center ring-1 ring-white/50 shadow-sm"
              >
                <div className="mb-6 flex items-center justify-center h-[72px]">
                  {stat.icon}
                </div>
                <div className="text-4xl font-semibold text-black mb-2">
                  {stat.number}
                </div>
                <p className="text-lg font-medium text-black leading-tight">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
