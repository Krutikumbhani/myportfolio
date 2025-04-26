'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi'; // hamburger icons

export default function NavBar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // for mobile menu
  const pathname = usePathname();

  useEffect(() => {
    fetch('/api/navadata')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className='mb-[150px]'>
        <div className="bg-black p-5 shadow-lg drop-shadow-[0_5px_10px_#18c5c5]">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href='/' className="font-bold text-3xl text-[#18c5c5]">
              Kruti
            </Link>

            {/* Hamburger icon */}
            <div className="lg:hidden text-[#18c5c5] text-3xl cursor-pointer" onClick={toggleMenu}>
              {isOpen ? <FiX /> : <FiMenu />}
            </div>

            {/* Nav Links */}
            <nav className={`flex-col lg:flex-row lg:flex ${isOpen ? 'flex' : 'hidden'} absolute lg:static top-[100px] left-0 w-full lg:w-auto bg-black lg:bg-transparent text-center z-50`}>
              {loading ? (
                <p className='text-[#18c5c5] text-xl p-5'>Loading...</p>
              ) : (
                <ul className="flex flex-col lg:flex-row w-full lg:w-auto">
                  {data.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                      <li key={item.id} className="my-4 lg:my-0 mx-0 lg:mx-3">
                        <Link
                          href={item.path}
                          className={`
                            relative text-xl text-[#18c5c5] py-2 px-4 block transition-all duration-300
                            after:content-[''] after:absolute after:left-0 after:bottom-0
                            after:h-[2px] after:bg-[#18c5c5] 
                            ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                          `}
                          onClick={() => setIsOpen(false)} // close menu after click
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
