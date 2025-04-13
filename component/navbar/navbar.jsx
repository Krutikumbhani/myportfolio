'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname(); // 👈 Get current path

  useEffect(() => {
    fetch('/api/navadata')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <header>
      <div className='mb-[150px]'>
        <div className="bg-black p-5 shadow-lg drop-shadow-[0_5px_10px_#18c5c5]">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <Link href='/' className="font-bold text-3xl text-[#18c5c5]">Kruti</Link>
              <div>
                {loading ? (
                  <p className='text-[#18c5c5] text-xl flex justify-center items-center'>Loading...</p>
                ) : (
                  <ul className="flex">
                    {data.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <li key={item.id} className="my-2 mx-3">
                          <Link
                            href={item.path}
                            className={`
                              relative my-2 mx-3 text-xl text-[#18c5c5] py-6 transition-all duration-300
                              after:content-[''] after:absolute after:left-0 after:bottom-0 
                              after:h-[2px] after:bg-[#18c5c5] 
                              ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                            `}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
