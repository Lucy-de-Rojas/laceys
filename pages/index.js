import Head from 'next/head'
import Image from 'next/image'


import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Header1 from '../components/header1'
import Images from '../components/images'



export default function Home() {



  return (
    <Layout>
      <Head>
      <meta name="google-site-verification" content="-U70Yo_PUyJNjtc9GuyqT4vWVG0UDMjNYE247B5sORY" />
        <title>Welcome to Laceys Family Farm</title>
      </Head>

<Header1 text="Welcome to Laceys Farm Shop & Butchers" />




{/* image we are laceys, and a photo of a cow */}
<Images images={[{
  src: '/Media/Photoshoot/ComposedImage.png',
  width: 1173,
  height: 935,
},{
  src: '/Media/Photoshoot/cow1.jpg',
  width: 1173,
  height: 935,
}]} />




<p>Family run Farm Shop & Butchers stocking
quality local produce.</p>



{/* logos: */}
<Images images={[{
              src: '/Media/Photoshoot/BritishDairying.png',
              width: 581,
              height: 154,},
              {
                src: '/Media/Photoshoot/Chilterns.png',
                width: 415,
                height: 110,},
                {
                  src: '/Media/Photoshoot/englishGuerensey-cattle-society.png',
                  width: 300,
                  height: 306,}




]}/>


















    </Layout>
  )
}
