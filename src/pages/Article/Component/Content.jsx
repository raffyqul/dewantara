import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Content() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchArticles = (page) => {
    fetch(`https://dewantara-api.vercel.app/api/v1/articles?limit=6&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.data);
        setTotalPages(data.meta.totalPages);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  };

  useEffect(() => {
    fetchArticles(currentPage);
  }, [currentPage]);

  const truncateContent = (content, wordLimit) => {
    const words = content.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : content;
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="artikel py-16">
      <div className="container mx-auto px-4">
        <div className="event flex flex-col gap-12">
          <div className="content-top flex flex-col gap-2 items-center">
            <h2 className="text-4xl font-semibold">Artikel Kami</h2>
            <span className="text-base text-gray-600 text-center max-w-md">
              Perkaya pengetahuan tentang keajaiban budaya Dunia Perwayangan
            </span>
          </div>
          <div className="content-center flex flex-col gap-14">
            <div className="content-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <div className="card flex flex-col gap-2" key={index}>
                  <Link to={`/article/${article.id}`}>
                    <img
                      src={article.imageUrl}
                      alt=""
                      className="rounded-lg card-img w-full h-auto"
                    />
                  </Link>
                  <div className="card-body flex flex-col gap-2">
                    <div className="wrapper">
                      <h4 className="text-base font-semibold text-darkBlack mb-1">
                        {article.title}
                      </h4>
                      <div className="wrap flex items-center gap-2">
                        <span className="text-sm font-normal text-gray-600">
                        <div dangerouslySetInnerHTML={{ __html: truncateContent(article.content, 12) }} />

                          {/* {truncateContent(article.content, 12)} */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <nav aria-label="Pagination">
                <ul className="pagination flex flex-wrap gap-2 justify-center">
                  <li className="pagination-item">
                    <button
                      className="pagination-link py-2 px-3 border rounded-md"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">Sebelumnya</span>
                    </button>
                  </li>
                  {[...Array(totalPages).keys()].map((page) => (
                    <li className="pagination-item" key={page + 1}>
                      <button
                        className={`pagination-link p-2 px-4 border rounded-md ${
                          currentPage === page + 1 ? "btn btn-icon" : "text-gray-600"
                        }`}
                        onClick={() => handlePageChange(page + 1)}
                      >
                        {page + 1}
                      </button>
                    </li>
                  ))}
                  <li className="pagination-item">
                    <button
                      className="pagination-link py-2 px-3 border rounded-md"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label="Next"
                    >
                      <span aria-hidden="true">Selanjutnya</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
