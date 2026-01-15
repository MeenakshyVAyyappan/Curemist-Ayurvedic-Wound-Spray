export default function Hero() {
  return (
    <section className="relative mt-[110px] md:mt-[145px] min-h-[500px] md:h-[650px] overflow-hidden bg-gradient-to-r from-[#E4E9FF] via-[#F0E9FF] to-[#FFE493]">
      {/* Decorative Background Elements */}
      <div className="absolute -left-3 top-8 w-[300px] md:w-[620px] h-[300px] md:h-[620px] opacity-10 md:opacity-20">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ba2e1889b8392e002bfd15fdf0cea6de115025c8?width=1240"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute right-0 -top-5 w-[300px] md:w-[620px] h-[300px] md:h-[620px] opacity-10 md:opacity-20 -rotate-90">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/3b5a9e87edd37f0aafc46f8a1857467ea697e659?width=1240"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-24 h-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 h-full items-center py-8 md:py-0">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 pt-4 md:pt-12 lg:pt-0">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brand-blue leading-tight">
              Cure <span className="font-extrabold">Mist – Ayurvedic <br />First Aid Wound Spray</span>
            </h1>
            <p className="text-lg md:text-2xl lg:text-[28px] font-medium text-black leading-snug">
              Safe for all ages | AYUSH Certified | <br />Patented Formula
            </p>
            <button className="bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue px-6 md:px-12 py-3 md:py-4 rounded-lg text-base md:text-lg font-extrabold transition-colors w-full md:w-auto">
              SHOP NOW
            </button>
            
            {/* Badges */}
            <div className="flex items-center gap-2 md:gap-4 pt-2 md:pt-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/82119b11c278da0f612e9e4242c28c6418dceb6d?width=208"
                alt="AYUSH Badge"
                className="h-[35px] md:h-[51px] w-auto"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4e16c1ab10b1c06c84d315706b425936b476d508?width=162"
                alt="Certification Badge"
                className="h-[35px] md:h-[51px] w-auto"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/eb8ce56e152a1e0671937ecb6b46dafe719a9482?width=950"
              alt="Woman holding Cure Mist spray"
              className="w-full max-w-[475px] h-auto ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
