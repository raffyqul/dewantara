import event1 from "../../../assets/Images/Global/galery-1.png";
import event2 from "../../../assets/Images/Global/galery-2.png";
import konten1 from "../../../assets/Images/About/content2.png";
import konten2 from "../../../assets/Images/About/content3.png";

export default function Content() {
  return (
    <section className="py-[72px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="content">
          <div className="content-top flex flex-col md:flex-row gap-[36px] justify-center mb-[80px]">
            <div className="content-image grid grid-cols-2 gap-4 md:gap-0">
              <img
                src={event1}
                alt=""
                className="img-card max-w-full md:max-w-[282px] mt-0 md:mt-[145px]"
              />
              <img src={event2} alt="" className="img-card max-w-full md:max-w-[282px]" />
            </div>
            <div className="content-subtext mt-8 md:mt-0">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Tentang Kami</h2>
              <p className="text-justify max-w-full md:max-w-[549px]">
                <span className="text-[24px] font-semibold">Dewantara </span>
                adalah situs web yang didedikasikan untuk pelestarian dan
                edukasi seni wayang Indonesia. Dewantara sendiri adalah
                singkatan dari “Demen ('suka' dalam bahasa jawa) Wayang
                Nusantara” dan nama Dewantara ini diambil dari salah satu tokoh
                pahlawan nasional, yaitu Ki Hajar Dewantara yang dimana beliau
                adalah bapak pendidikan Indonesia. Kami menyediakan berbagai
                informasi seputar wayang, mulai dari sejarah, jenis-jenis
                wayang, event-event wayang, hingga museum wayang yang ada di
                Indonesia. Kami bangga mempersembahkan koleksi seni wayang dari
                seluruh nusantara, dan inovasi terbaru kami memungkinkan Anda
                untuk menggali lebih dalam melalui fitur scanner kami.
              </p>
            </div>
          </div>
          <div className="content-center flex flex-col-reverse md:flex-row gap-[36px] md:gap-[63px] items-center justify-center mb-[102px]">
            <div className="content-subtext max-w-full md:max-w-[549px] mt-8 md:mt-0">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Fitur Scanner</h2>
              <p className="text-justify">
                Dengan fitur scanner kami, Anda dapat menjelajahi setiap detail
                wayang dengan cara yang belum pernah terbayangkan sebelumnya.
                Geser ponsel cerdas Anda, dan biarkan scanner mengungkapkan
                cerita di balik setiap bayangan. Temukan makna simbolis,
                sejarah, dan keterampilan seni yang tertanam dalam setiap karya.
              </p>
            </div>
            <div className="content-image flex">
              <img src={konten1} alt="" className="card-img max-w-full md:max-w-[588px]" />
            </div>
          </div>
          <div className="content-bottom flex flex-col md:flex-row justify-center gap-[36px] md:gap-[48px] items-center">
            <div className="content-image flex">
              <img src={konten2} alt="" className="card-img max-w-full md:max-w-[588px]" />
            </div>
            <div className="content-subtext max-w-full md:max-w-[549px] mt-8 md:mt-0">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Misi Kami</h2>
              <p className="text-justify">
                Kami bertekad untuk menjembatani kesenian tradisional dengan
                kemajuan teknologi. Melalui Museum Wayang Indonesia, kami
                berharap membawa keindahan wayang lebih dekat dengan generasi
                masa kini. Dengan fitur scanner, kami berusaha untuk memperkaya
                pengalaman Anda, menjadikan setiap kunjungan di situs ini
                sebagai perjalanan edukatif dan menghibur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
