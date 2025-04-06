'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/api/navadata') // API Call
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched Data:', data);
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
                  <p>Loading...</p>
                ) : (
                  <div>
                    <ul className="flex ">
                      {data.map((item) => (
                        <li key={item.id} className="my-2 mx-3">
                          <Link href={item.path} className='my-2 mx-3 text-xl text-[#18c5c5]'>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}
