import LogoBrand from "../assets/Logo/logo-foot.svg";

export default function Footer() {
  return (
    <section className="bg-darkBlack pt-18 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="footer">
          <div className="footer-top flex flex-col pt-4 md:flex-row justify-between items-start pb-12 border-[#495057] border-b-[1px]">
            <div className="footer-brand mb-8 md:mb-0">
              <img src={LogoBrand} alt="Logo Brand" className="w-full max-w-[200px] md:max-w-full" />
              <div className="address max-w-[269px] mt-6">
                <a href="/" className="text-base text-whiteText">
                  Jl. DI Panjaitan No.128, Karangreja, Purwokerto Kidul, Kec.
                  Purwokerto Sel., Kabupaten Banyumas, Jawa Tengah
                </a>
              </div>
            </div>
            <div className="footer-menu mb-8 md:mb-0">
              <h5 className="font-bold text-xl md:text-2xl text-secondary mb-4">
                Menu Navigasi
              </h5>
              <div className="wrapper flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <div className="wrap flex flex-col gap-4">
                  <a href="/About" className="footer-link">
                    Tentang Kami
                  </a>
                  <a href="/Event" className="footer-link">
                    Event Wayang
                  </a>
                  <a href="/Wayang" className="footer-link">
                    Wayangpedia
                  </a>
                </div>
                <div className="wrap flex flex-col gap-4">
                  <a href="/Museum" className="footer-link">
                    Museum Wayang
                  </a>
                  <a href="/Article" className="footer-link">
                    Artikel
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-about">
              <h5 className="font-bold text-xl md:text-2xl text-secondary mb-4">
                Kenali Kami
              </h5>
              <a
                href="https://www.instagram.com/pkmkc.dewantara"
                className="footer-link"
              >
                Instagram Dewantara
              </a>
            </div>
          </div>
          <div className="footer-bottom text-center mt-8">
            <span className="text-base text-whiteText">
              © 2024 Dewantara | All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
