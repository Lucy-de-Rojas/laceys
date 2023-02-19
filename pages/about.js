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




<p>Welcome to Laceys Family Farm - where we are
now into our 7th generation carrying on a
passion for local farming and preserving our
beautiful countryside in South Bucks.</p>

{/* image we are laceys, and a photo of a cow */}
<Images images={[{
  src: '/Media/Photoshoot/weAreFarmers.png',
  width: 718,
  height: 626,
},{
  src: '/Media/Photoshoot/weAreButchers.png',
  width: 731,
  height: 637,
}]} />





<h2>Farm Shop & Butchers</h2>
<p>
Our Farm Shop and Butchers offers a full range
of meats most cut to order, and deli items
including our home made pies and sausages.
Together with our milk, cream, ice cream and
eggs plus a range of local produce the Farm
Shop and Butchers is well worth a visit. Come in
and see us soon!</p>






{/* images: from grass to glass: */}
<Images images={[{
  src: '/Media/Photoshoot/fromGrassToGlass.png',
  width: 789,
  height: 588,
},{
  src: '/Media/Photoshoot/ComposedImage.png',
  width: 1173,
  height: 935,
}]} />




<h2>Dairy</h2>
<p>
Our award winning Dairy comes from a beautiful
herd of pedigree Guernsey cows who produce
milk of the highest quality with all the taste
and health benefits of its type. We offer a range
of dairy products under the Laceys Family Farm
brand. We supply wholesale direct across the
Bucks, Berks and Oxon area to selected retail,
manufacturing and restaurant outlets and locally
by door step delivery. (Local Villages only HP14
Postcodes)</p>







{/* images: from grass to glass: */}
<Images images={[{
  src: '/Media/Photoshoot/milkCreamIcecream.jpeg',
  width: 789,
  height: 588,
}]} />


    </Layout>
  )
}
