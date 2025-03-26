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
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ul  className="flex ">
              {data.map((item) => (
                <li key={item.id} className="my-2 mx-3">
                  <Link href="/">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
