import Image from "next/image";


// comes in form of list of objects even when one image
export default function Images({images}) {


    let imageWidth = '95%';


    if(images.length == 2) {
        imageWidth = '45%';
    }

    if(images.length == 3) {
        imageWidth = '25%';
    }
    if(images.length == 4) {
        imageWidth = '20%';
    }









return (<div style={{
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    margin: '50px 0',


    alignItems: 'center',
    justifyContent: 'space-evenly',



}}>


    {images.map((item, index)=>{




return <div key={index} style={{width: imageWidth}}>


<Image
    src={item.src}
    width={item.width}
    height={item.height}
    layout="responsive"


    />

</div>;


    })}




</div>);




};
