import Iframe from "react-iframe";

export default function Maps({maps}) {
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
              src={maps[0]['mapsUrl']}
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
