import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



export default function Content() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [otherArticles, setOtherArticles] = useState([]);

  useEffect(() => {
    fetch(`https://dewantara-api.vercel.app/api/v1/articles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));

    fetch(`https://dewantara-api.vercel.app/api/v1/articles/all`)
      .then((response) => response.json())
      .then((data) => {
        const filteredArticles = data.data.filter((item) => item.id !== id);
        setOtherArticles(filteredArticles);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [id]);

  if (!article) return <div>Loading...</div>;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', options);
  };

  return (
    <section className="pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="content flex flex-col gap-10">
          <div className="content-top pb-10 border-b-[1px] border-[#ADB5BD]">
            <h2 className="text-4xl md:text-5xl lg:text-[64px] text-[#212529] mb-6">
              {article.title}
            </h2>
            <span className="text-[#6C757D] text-base">
              Ditulis pada {formatDate(article.createdAt)} | {article.timeAgo}
            </span>
          </div>
          <div className="content-bottom flex flex-col lg:flex-row justify-between gap-[25px]">
            <div className="content-bottom-left lg:w-8/12 flex flex-col gap-10">
              <img
                src={article.imageUrl}
                alt=""
                className="img w-full rounded-lg"
              />
              <p className="text-lightBlack text-base text-justify">
                {article.content}
              </p>
            </div>
            <div className="content-bottom-right side-bar flex flex-col gap-[22px]">
              <h5 className="text-primary font-bold text-base">
                Artikel Menarik Lainnya
              </h5>
              <div className="wrapper flex flex-col gap-4">
                {otherArticles.map((otherArticle) => (
                  <div key={otherArticle.id} className="side-bar-card  flex gap-4">
                    <Link to={`/article/${otherArticle.id}`}>
                      <img src={otherArticle.imageUrl} alt="" className="object-cover h-28 w-106 rounded-lg" />
                    </Link>
                    <div className="card-body">
                      <span className="text-base text-gray mb-2">
                        {formatDate(otherArticle.createdAt)} | {otherArticle.timeAgo}
                      </span>
                      <h5 className="text-base font-semibold">
                        {otherArticle.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
