// 'use client'


import Link from 'next/link';
// import { useEffect, useState } from 'react'

async function getData() {

  const res = await fetch(`https://avocados-nextjs-two.vercel.app/api/avo/`)
  const data = await res.json();
  return data;

}

export default async function Home({ productList }) {
  // const [productList, setProductList] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => { // Client side rendered
  //   setLoading(true);
  //     fetch(`api/avo/`)
  //     .then((response) => response.json())
  //     .then(({ data, length }) => {
  //       setProductList(data)
  //     })
  //     .finally(() => setLoading(false))
  // }, [])

  const {data, length} = await getData();
  productList = data;

  return (
    <>
      <main className="">
        <h1 className='text-3xl text-lime-400 pt-5'>Avocados</h1>
        <ul className='mt-4 flex flex-wrap justify-center gap-4 px-5 min-h-[1100px]'>
          {
           
            productList.map((product) => {
              return (
                <li key={product.id} className='border border-gray-500 rounded-lg pb-2 text-center'>
                  <Link href={`/product/${product.id}`} >
                    <img src={product.image} className='w-[300px] rounded-t-lg' alt={product.name}/>
                    <p className='mt-3 font-medium text-lg leading-5'>{product.name}</p>
                    <div className='text-lime-400'>{product.price}</div>
  
                  </Link>
  
                </li>
                )
              }) 
          }
       

        </ul>
      </main>
    </>
  )
}
