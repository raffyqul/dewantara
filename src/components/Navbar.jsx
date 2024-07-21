import { useState } from "react";
import LogoBrand from "../assets/Logo/logo-nav.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: 'Beranda', url: '/' },
    { name: 'Tentang', url: '/About' },
    { name: 'Event', url: '/Event' },
    { name: 'Wayang', url: '/Wayang' },
    { name: 'Museum', url: '/Museum' },
    { name: 'Artikel', url: '/Article' }
  ];

  return (
    <section className="sticky top-0 bg-white z-50 px-4 md:px-20">
      <nav className="navbar flex justify-between items-center py-2.5">
        <div className="navbar-logo">
          <a href="/" className="navbar-link">
            <img src={LogoBrand} alt="Logo Brand" className="img-brand max-w-full h-auto" />
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex md:flex-row md:gap-8 text-sm md:text-base">
          {menuItems.map((item, index) => (
            <li className="navbar-link" key={index}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center">
          <ul className="flex flex-col gap-4 text-sm">
            {menuItems.map((item, index) => (
              <li className="navbar-link" key={index}>
                <a href={item.url} onClick={() => setMenuOpen(false)}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
