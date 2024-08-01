import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Content() {

  const { id } = useParams();
  const [puppet, setPuppet] = useState(null);

  useEffect(() => {
    fetch(`https://dewantara-api.vercel.app/api/v1/puppets/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPuppet(data.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, [id]);

  if (!puppet) return <div>Loading...</div>;


  return (
    <section className="detail-wayang pt-12 pb-[72px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="content flex flex-col md:flex-row gap-8">
          <div className="content-left flex justify-center">
            <div className="card">
              <img
                src={puppet.imageUrl}
                alt=""
                className="img card-img max-w-full md:max-w-[384px] mb-6 rounded-xl py-[25px] px-[49px] shadow-[0_3px_16px_rgba(0,0,0,0.3)]"
              />
              <p className="flex flex-col items-center -mt-4 ">
                <Link
                to='https://www.vectorstock.com/royalty-free-vectors/wayang-vectors'

                className="text-slate-400 hover:text-slate-500">Sumber gambar: Arykoswara</Link>
              </p>
              <h2 className="flex flex-col items-center"> {puppet.name}</h2>
            </div>
          </div>
          <div className="content-right flex flex-col gap-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Deskripsi Wayang</h2>
            <div dangerouslySetInnerHTML={{ __html: puppet.description }} />

          </div>
        </div>
      </div>
    </section>
  );
}
