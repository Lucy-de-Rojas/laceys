import Head from 'next/head'
import Image from 'next/image'


import Layout from '../components/layout'
import Header1 from '../components/header1'
import Images from '../components/images'



export default function About() {



  return (
    <Layout>
      <Head>
        <title>About Laceys Family Farm</title>
      </Head>

<Header1 text="About Laceys Farm Shop & Butchers" />




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
















{/* 3 images:  dairying chiltern and guerensey cattle society*/}
{/*
<div className={styles.imagesWrapper}>

<div className={styles.imageWrapperSINGLE}>
<Image
    src="/Media/Photoshoot/BritishDairying.png"
    width={581}
    height={154}
    layout='responsive'

    /></div>




<div className={styles.imageWrapperSINGLE}>
<Image
    src="/Media/Photoshoot/Chilterns.png"
    width={415}
    height={110}
    layout='responsive'

    /></div>





<div className={styles.imageWrapperSINGLE}>
<Image
    src="/Media/Photoshoot/englishGuerensey-cattle-society.png"
    width={581}
    height={154}
    layout='responsive'

    /></div>



</div> */}





    </Layout>
  )
}
