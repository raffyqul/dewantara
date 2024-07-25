import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import IcArrow from "../../../assets/Icon/icon-arrow.svg";
import IcSearch from "../../../assets/Icon/icon-search.svg";
import IcScan from "../../../assets/Icon/icon-scan.svg";
import { BrowserMultiFormatReader } from '@zxing/library';

export default function Wayang() {
  const [wayangs, setWayangs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState('');
  const videoRef = useRef(null);
  const [codeReader] = useState(new BrowserMultiFormatReader());

  useEffect(() => {
    fetchWayangs();
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (isScanning && isMobile) {
      codeReader.listVideoInputDevices().then((videoInputDevices) => {
        if (videoInputDevices.length > 0) {
          const firstDeviceId = videoInputDevices[0].deviceId;
          codeReader.decodeFromVideoDevice(firstDeviceId, videoRef.current, (result, error) => {
            if (result) {
              handleScan(result);
            }
            if (error) {
              handleError(error);
            }
          });
        }
      });
    }
  }, [isScanning, isMobile, codeReader]);

  const fetchWayangs = (search = "") => {
    setLoading(true);
    fetch(`https://dewantara-api.vercel.app/api/v1/puppets?limit=8&search=${search}`)
      .then((response) => response.json())
      .then((data) => {
        const sortedWayangs = data.data.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
        setWayangs(sortedWayangs || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWayangs(searchQuery);
  };

  const handleScan = (result) => {
    if (result) {
      setScanResult(result.text);
      window.open(result.text, '_blank'); // Open the scanned URL in a new tab
      setIsScanning(false);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const openScanModal = () => {
    setIsScanning(true);
  };

  const closeScanModal = () => {
    setIsScanning(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        codeReader.decodeFromImage(img).then(handleScan).catch(handleError);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="py-18 pb-10 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="wayang flex flex-col gap-12">
          <div className="content-top flex flex-col items-center justify-center gap-2">
            <h2 className="text-center text-2xl md:text-3xl">Wayang</h2>
            <span className="text-base text-gray text-center max-w-[402px]">
              Jelajahi dunia perwayangan agar lebih mengenal wayang di Indonesia
            </span>
          </div>
          <div className="content-bottom flex flex-col gap-12 items-center">
            <div className="wrapper flex flex-col md:flex-row items-center gap-4 justify-center">
              <div className="wrap-search w-full md:w-auto">
                <form onSubmit={handleSearch} className="inline-flex w-full">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    className="outline-none rounded-l-lg border-2 border-[#ADB5BD] px-4 py-2.5 w-full md:w-[500px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn btn-search" type="submit">
                    <img src={IcSearch} alt="Cari" />
                    Cari
                  </button>
                </form>
              </div>
              <button className="btn btn-scan flex items-center" onClick={openScanModal}>
                <img src={IcScan} alt="Scan" />
                <span className="ml-2">Scan Disini</span>
              </button>
            </div>
            {loading ? (
              <div>Loading...</div>
            ) : wayangs.length === 0 ? (
              <div>Wayang tidak ditemukan</div>
            ) : (
              <div className="content-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {wayangs.map((wayang, index) => (
                  <div key={index} className="card rounded-lg overflow-hidden shadow-md">
                    <div className="h-96">
                      <img
                        src={wayang.imageUrl}
                        alt={wayang.name}
                        className="card-img w-full h-full object-cover"
                      />
                    </div>
                    <div className="card-body flex items-center justify-between pt-4 pb-6 px-6">
                      <div className="wrap">
                        <h4 className="text-base font-semibold text-darkBlack">
                          {wayang.name}
                        </h4>
                        <span className="text-sm text-gray font-medium">
                          {wayang.type}
                        </span>
                      </div>
                      <button className="btn btn-icon">
                        <Link to={`/wayang/${wayang.id}`}>
                          <img src={IcArrow} alt="Detail" />
                        </Link>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <a href="Wayang" className="btn btn-primary">
              Lihat Wayang Lainnya
            </a>
          </div>
        </div>
      </div>

      {isScanning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center focus:outline-none"
              onClick={closeScanModal}
            >
              X
            </button>
            {isMobile ? (
              <video ref={videoRef} style={{ width: '100%' }} />
            ) : (
              <div className="flex flex-col items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="mb-4"
                />
                <button
                  onClick={closeScanModal}
                  className="btn btn-primary mt-2"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
