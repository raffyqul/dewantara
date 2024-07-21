export default function Content() {
  return (
    <section className="bg-hero-background bg-cover bg-no-repeat relative pt-20 pb-14 md:pt-52 md:pb-20 h-auto md:h-screen">
      <div className="bg-dark absolute w-full h-full bg-black opacity-70 z-0 top-0"></div>
      <div className="container mx-auto h-full px-4 md:px-8">
        <div className="hero relative z-10 flex items-end h-full md:h-auto">
          <h1 className="subtext-title text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-[90%] sm:max-w-[80%] md:max-w-[746px] font-semibold leading-tight">
          Detail Wayang
          </h1>
        </div>
      </div>
    </section>
  );
}
