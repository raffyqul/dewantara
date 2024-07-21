import React from 'react';
import IconLocation from "../../../assets/Icon/icon-loc.png";
import IconCalender from "../../../assets/Icon/icon-calender.png";
import IconTicket from "../../../assets/Icon/Ticket.svg";

const SubContent = ({ about, operationalHour, location, ticket }) => {
  return (
    <section className="pt-12 pb-[72px]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="detail-museum flex flex-col md:flex-row justify-between gap-8 md:gap-16">
          <div className="content-left flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Tentang Museum</h2>
            <div className="subtext text-justify max-w-full md:max-w-[662px]">
              <p>{about}</p>
            </div>
          </div>
          <div className="content-right">
            <div className="board py-4 px-6 inline-flex flex-col shadow-[0_3px_16px_rgba(0,0,0,0.3)] rounded-xl gap-6">
              <h2 className="pb-4 border-b-[1px] border-[#CED4DA] text-xl md:text-2xl lg:text-3xl font-bold">
                Papan Informasi
              </h2>
              <div className="wrapper flex flex-col gap-8">
                <div className="wrap flex items-start gap-4">
                  <div className="icon inline-flex p-1.5 shadow-[0_3px_16px_rgba(0,0,0,0.3)] w-[100px] md:w-[36px] h-[36px] rounded">
                    <img
                      src={IconLocation}
                      alt="Location Icon"
                      className="ic w-full h-full object-contain"
                    />
                  </div>
                  <div className="subtext flex flex-col gap-2">
                    <h3 className="subtext-subtext text-[24px] font-semibold">
                      Lokasi Museum
                    </h3>
                    <p className="subtext-desc max-w-full md:max-w-[362px]">
                    {location.map((loc, index) => (
                       loc.address
                      ))}
                    </p>
                  </div>
                </div>
                <div className="wrap flex items-start gap-4">
                  <div className="icon inline-flex p-1.5 shadow-[0_3px_16px_rgba(0,0,0,0.3)] w-[52px] md:w-[36px] h-[36px] rounded">
                    <img
                      src={IconCalender}
                      alt="Calendar Icon"
                      className="ic w-full h-full object-contain"
                    />
                  </div>
                  <div className="subtext flex flex-col gap-2">
                    <h3 className="subtext-subtext text-[24px] font-semibold">
                      Jam Operasional
                    </h3>
                    <p className="subtext-desc max-w-full md:max-w-[362px]">
                      {operationalHour.map((hour, index) => (
                        <span key={index}>
                          {hour.isSunday && 'Minggu: '}{hour.startTime} - {hour.endTime} WIB<br />
                          {hour.isMonday && 'Senin: '}{hour.startTime} - {hour.endTime} WIB<br />
                          {hour.isTuesday && 'Selasa: '}{hour.startTime} - {hour.endTime} WIB<br />
                          {hour.isWednesday && 'Rabu: '}{hour.startTime} - {hour.endTime} WIB<br />
                          {hour.isThursday && 'Kamis: '}{hour.startTime} - {hour.endTime} WIB<br />
                          {hour.isFriday && 'Jumat: '}{hour.startTime} - {hour.endTime} WIB<br />
                          {hour.isSaturday && 'Sabtu: '}{hour.startTime} - {hour.endTime} WIB<br />
                          {hour.isNationalHoliday && 'Hari Libur Nasional: '}{hour.startTime} - {hour.endTime} WIB<br />
                        </span>
                      ))}
                    </p>
                  </div>

                </div>
                <div className="wrap flex items-start gap-4">
                  <div className="icon inline-flex p-1.5 shadow-[0_3px_16px_rgba(0,0,0,0.3)] w-[36px] h-[36px] rounded">
                    <img
                      src={IconTicket}
                      alt="Ticket Icon"
                      className="ic w-full h-full object-contain"
                    />
                  </div>

                  <div className="subtext flex flex-col gap-2">
                    <h3 className="subtext-subtext text-[24px] font-semibold">
                      Harga Tiket Masuk
                    </h3>
                    <table className="subtext-desc max-w-full md:max-w-[362px]">
                      <thead>
                        <tr>
                          <th>Jenis Tiket</th>
                          <th>Hari</th>
                          <th>Harga</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ticket.map((t, index) => (
                          <tr key={index}>
                            <td className=" px-4 py-2">{t.age === 'GENERAL' ? 'Umum' : t.age}</td>
                            <td className=" px-4 py-2">{t.isWeekdays ? 'Hari Kerja' : 'Akhir Pekan'}</td>
                            <td className=" px-4 py-2">Rp{t.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubContent;
