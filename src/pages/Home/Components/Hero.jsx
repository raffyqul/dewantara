export default function Hero() {
  return (
    <div>
      <section className="bg-hero-background h-full bg-cover bg-no-repeat relative py-[100px] md:py-[150px] lg:py-[207px]">
        <div className="bg-dark absolute content-[] w-full h-full bg-black opacity-70 z-0 top-0"></div>
        <div className="container mx-auto px-4">
          <div className="hero relative z-10 flex flex-col items-center gap-6 md:gap-8 lg:gap-12">
            <div className="content-subtext flex flex-col gap-2 md:gap-3 lg:gap-4 items-center">
              <span className="subtext-subtitle text-white text-3xl md:text-4xl lg:text-[40px] font-semibold text-center">
                Selamat Datang di
              </span>
              <h1 className="subtext-title text-white text-5xl md:text-7xl lg:text-9xl font-extrabold text-center">
                DEWANTARA
              </h1>
              <p className="subtext-desc text-darkWhite max-w-xs md:max-w-md lg:max-w-[496px] text-center">
                Jelajahi pintu gerbang menuju dunia yang dipenuhi keindahan dan
                pesona warisan nenek moyang kita.
              </p>
            </div>
            <button className="btn btn-primary px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4">
              Jelajahi
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
