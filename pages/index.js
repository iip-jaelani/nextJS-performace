/**
 * @format
 */

import Head from 'next/head'
import dynamic from 'next/dynamic'
import CustomHead from '../components/CustomHead'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => (
    <div>
      <h1>LOADING FOOTER . . .. </h1>
    </div>
  ),
  ssr: false,
})

const ImageComponent = dynamic(() => import('../components/ImageComponent'), {
  loading: () => (
    <div>
      <h1>LOADING . . .. </h1>
    </div>
  ),
  ssr: false,
})

// export const config = {amp: true}

export default function Home() {
  const [list, setlist] = useState([])
  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes').then(res => {
      const { data, success } = res.data
      const d = [...(data?.memes || [])].reduce((acc, curr) => {
        const { height, width } = curr
        acc.push({
          ...curr,
          // layout: 'fill',
          src: curr?.url,
          alt: curr?.id,
          height: height / 2,
          width: width / 2,
        })
        return acc
      }, [])

      setlist(d)
    })
  }, [])
  return (
    <div className='container'>
      <CustomHead />
      <main>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // gridTemplateRows: 'auto',
          }}
        >
          {list.length > 0 &&
            list.slice(0, 10).map(el => {
              return <ImageComponent {...el} />
            })}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            // gridTemplateRows: 'auto',
          }}
        >
          {list.slice(10, 20).map(el => {
            return <ImageComponent {...el} />
          })}
        </div>
      </main>
      <Footer />
    </div>
  )
}
