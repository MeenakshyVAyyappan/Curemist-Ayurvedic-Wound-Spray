const PlayIcon = () => (
  <svg width="82" height="57" viewBox="0 0 82 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="82" height="57" rx="8" fill="white" fillOpacity="0.9"/>
    <path d="M30 20L50 28.5L30 37V20Z" fill="#FF0000"/>
  </svg>
);

export default function TestimonialsSection() {
  const testimonials = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b4f6f27a7e9d0c55ff89f687bad4b2cdee6079ad?width=1006",
      quote: "At vero eos et accusamus et iusto"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7375ee777790a6a8bb165fd333d442f15f839efe?width=1006",
      quote: "Sed ut perspiciatis unde omnis"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white mt-24 md:mt-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-24 pt-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-black mb-2 md:mb-4">
            Customer's Testimonials
          </h2>
          <p className="text-base md:text-xl lg:text-[21px] font-medium text-black max-w-[860px] mx-auto leading-relaxed px-2">
            Real experiences from people who trust CureMist for their everyday
             first-aid needs. See how our fast-acting, Ayurvedic spray has helped
              customers heal quicker, cleaner, and with complete convenience.
          </p>
        </div>

        {/* Testimonial Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={testimonial.image}
                  alt="Customer testimonial"
                  className="w-full h-[250px] md:h-[290px] object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="hover:scale-110 transition-transform">
                    <PlayIcon />
                  </button>
                </div>
              </div>
              <p className="text-center text-base md:text-xl font-semibold text-black mt-3 md:mt-4">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
