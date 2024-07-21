import React from 'react';


export default function GridImage({collection}) {
  return (
    <section className="gridimage py-[72px]">
      <div className="container px-4 md:px-[120px]">
        <div className="content flex flex-col gap-8">
          <div className="content-top flex flex-col items-center text-center">
            <h2 className="text-xl md:text-3xl">Koleksi Museum</h2>
            <span className="subtitle text-base text-gray">
              Beberapa koleksi ini dapat Anda temukan di museum
            </span>
          </div>
          <div className="content-bottom">
            <div className="content-card grid grid-cols-1 md:grid-cols-2 gap-6">
            {collection.map((koleksi, index) => (
              <div className="card" key={index}>
                <img src={koleksi.imageUrl} alt="" className="rounded-lg" />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
