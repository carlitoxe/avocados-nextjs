'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react'

export default function Home() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
      fetch(`api/avo/`)
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <>

      <main className="">
        <h1 className='text-3xl text-lime-400 pt-5'>Avocados</h1>
        <ul className='min-h-[216px] mt-4 flex flex-wrap justify-center gap-4 px-5 min-h-[1100px]'>
          {
            !loading ? 
            productList.map((product) => {
              return (
                <li key={product.id} className='border border-gray-500 rounded-lg pb-2'>
                  <Link href={`/product/${product.id}`} >
                    <img src={product.image} className='w-[300px] rounded-t-lg' alt={product.name}/>
                    <p className='mt-3 font-medium text-lg leading-5'>{product.name}</p>
                    <div className='text-lime-400'>{product.price}</div>
  
                  </Link>
  
                </li>
                )
              }) : <div>Loading...</div>
          }
       

        </ul>
      </main>
    </>
  )
}
