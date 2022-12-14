import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import bgimg from "../../public/imgs/bg.jpg"

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Trailbuzz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Image className="-z-10"
            src={bgimg}
            layout = "fill"
            alt = "bg"
      />
    </div>
  )
}

export default Home
