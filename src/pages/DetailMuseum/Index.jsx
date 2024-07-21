import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Content from "./Components/Content";
import SubContent from "./Components/SubContent";
import GridImage from "./Components/GridImage";
import Maps from "./Components/Maps";
import Slick from "./Components/Slick";
import Footer from "../../components/Footer";

const DetailMuseum = () => {
  const { id } = useParams();
  const [museumData, setMuseumData] = useState(null);

  useEffect(() => {
    fetch(`https://dewantara-api.vercel.app/api/v1/museums/${id}`)
      .then(response => response.json())
      .then(data => {
        setMuseumData(data.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, [id]);

  if (!museumData) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      {museumData && (
        <>
          <Content name={museumData.name} />
          <SubContent
            about={museumData.about}
            operationalHour={museumData.OperationalHour}
            location={museumData.Location}
            ticket={museumData.Ticket}
          />
          <GridImage collection={museumData.Collection}/>
          <Maps />
          <Slick />
          <Footer />
        </>
      )}
    </>
  );
};

export default DetailMuseum;
