import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pipel from "../../../assets/Images/Article/ill-people.png";

export default function Article() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dewantara-api.vercel.app/api/v1/articles/all")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.data.slice(0, 3));
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const truncateContent = (content, wordLimit) => {
    const words = content.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : content;
  };

  return (
    <section className="artikel py-10 md:py-16 lg:py-[72px]">
      <div className="container mx-auto px-4">
        <div className="event flex flex-col gap-8 md:gap-10 lg:gap-12">
          <div className="content-top flex flex-col gap-2 items-center">
            <h2 className="text-2xl md:text-3xl font-bold">Artikel Kami</h2>
            <span className="text-base text-gray text-center max-w-[344px]">
              Perkaya pengetahuan tentang keajaiban budaya Dunia Perwayangan
            </span>
          </div>
          <div className="content-center flex flex-col gap-8 md:gap-12 lg:gap-14">
            <div className="content-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {articles.map((article, index) => (
                <div className="card flex flex-col gap-2" key={article.id}>
                  <Link to={`/article/${article.id}`}>
                    <img src={article.imageUrl} alt="" className="rounded-xl" />
                  </Link>
                  <div className="card-body flex flex-col gap-2">
                    <div className="wrapper">
                      <h4 className="text-base font-semibold text-darkBlack mb-1">
                        {article.title}
                      </h4>
                      <div className="wrap flex items-center gap-2">
                        <span
                          className="text-sm font-normal"
                          style={{ color: "#6C757D" }}
                          dangerouslySetInnerHTML={{ __html: truncateContent(article.content, 10) }}
                        >

                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="content-join bg-white flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8 px-4 md:px-12 rounded-[30px] shadow-[0_2px_12px_rgba(0,0,0,0.11)]">
              <div className="content-image">
                <img src={pipel} alt="" className="card-img max-w-[200px] md:max-w-[331px]" />
              </div>
              <div className="content-text text-center md:text-left">
                <h1 className="mb-6 subtext-title text-black text-2xl md:text-3xl lg:text-4xl font-semibold">
                  Ayo gabung grup Komunitas <br />
                  Pecinta Wayang kami di Telegram!
                </h1>
                <a href="https://t.me/komunitaswayang" className="btn btn-primary mx-auto md:mx-0">Gabung Sekarang</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
