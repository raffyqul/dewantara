import Iframe from "react-iframe";

export default function Maps() {
  return (
    <section className="py-9">
      <div className="container mx-auto px-4 md:px-0">
        <div className="content flex flex-col gap-8">
          <div className="content-top text-center">
            <h2 className="text-xl md:text-3xl">Tunggu Apa Lagi?</h2>
            <span className="subtitle text-base text-gray">
              Jelajahi keberagaman kebudayaan yang tidak dapat terlupakan
            </span>
          </div>
          <div className="content-bottom">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9687451029617!2d106.80987027508014!3d-6.134901860146929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1dff48f259ff%3A0xfeb6bfd7e15db853!2sMuseum%20Wayang!5e0!3m2!1sid!2sid!4v1718814390913!5m2!1sid!2sid"
              width="100%"
              height="300"
              className="md:h-[559px]"
              title="museumJakarta"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
