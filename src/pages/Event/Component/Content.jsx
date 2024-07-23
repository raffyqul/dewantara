import React, { useState, useEffect } from "react";
import IconCalender from "../../../assets/Icon/icon-calender.png";
import IconLocation from "../../../assets/Icon/icon-loc.png";

export default function Content() {
  const [events, setEvents] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("https://dewantara-api.vercel.app/api/v1/events/all")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', options);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="bg-[#E9ECEF] py-[72px]">
      <div className="container mx-auto px-4 md:px-0">
        <div className="event flex flex-col gap-12 mb-16">
          <div className="content-top flex flex-col gap-2 items-center">
            <h2>Event Wayang</h2>
            <span className="text-base text-gray text-center max-w-[402px]">
              Jangan lewatkan event-event menarik yang akan diselenggarakan.
            </span>
          </div>
          <div className="content-bottom flex flex-col items-center gap-14">
            <div className="content-card grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div key={index} className="card flex flex-col gap-2">
                  <img
                    src={event.imageUrl}
                    alt=""
                    className="card-img cursor-pointer"
                    onClick={() => openModal(event.imageUrl)}
                  />
                  <div className="card-body flex flex-col gap-2">
                    <h4 className="text-base font-semibold text-darkBlack">{event.name}</h4>
                    <div className="wrapper">
                      <div className="wrap flex items-center gap-1">
                        <img src={IconCalender} alt="" className="max-w-[24px]" />
                        <span className="text-sm text-lightBlack font-medium">{formatDate(event.startDate)}</span>
                      </div>
                      <div className="wrap flex items-center gap-1 mt-2">
                        <img src={IconLocation} alt="" className="max-w-[24px]" />
                        <span className="text-sm text-lightBlack font-medium">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out">
          <div className="modal-content bg-white p-4 rounded max-w-sm w-full sm:max-w-xs relative transition-transform transform ease-in-out duration-300">
            <button
              className="modal-close absolute top-2 right-2 bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center focus:outline-none"
              onClick={closeModal}
            >
              X
            </button>
            <img src={selectedImage} alt="Event" className="w-full h-auto" />
          </div>
        </div>
      )}
    </section>
  );
}
