import React, { useState, useEffect } from "react";
import IconCalender from "../../../assets/Icon/icon-calender.png";
import IconLocation from "../../../assets/Icon/icon-loc.png";

export default function Content() {
  const [events, setEvents] = useState([]);

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
                  <img src={event.imageUrl} alt="" className="card-img" />
                  <div className="card-body flex flex-col gap-2">
                    <h4 className="text-base font-semibold text-darkBlack">{event.name}</h4>
                    <div className="wrapper">
                      <div className="wrap flex items-center gap-1">
                        <img src={IconCalender} alt="" className="max-w-[24px]" />
                        <span className="text-sm text-lightBlack font-medium">{formatDate(event.startDate)}</span>
                      </div>
                      <div className="wrap flex items-center gap-1">
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
    </section>
  );
}
