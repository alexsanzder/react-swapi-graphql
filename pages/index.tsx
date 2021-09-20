import type { NextPage } from 'next';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import imageOne from '@/public/images/hero/imageOne.jpg';
import imageTwo from '@/public/images/hero/imageTwo.png';
import imageThree from '@/public/images/hero/imageThree.jpg';
import Image from 'next/image';

const Home: NextPage = (): JSX.Element => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: '',
    prevArrow: '',
  };
  return (
    <Slider className="h-screen overflow-y-hidden" {...settings}>
      <div className="bg-gradient-to-b from-black to-black relative h-screen">
        <Image className=" opacity-70" src={imageOne} alt="" layout="fill" />
      </div>
      <div className="bg-gradient-to-b from-black to-black relative h-screen">
        <Image className=" opacity-70" src={imageTwo} alt="" layout="fill" />
      </div>
      <div className="bg-gradient-to-b from-black via-gray-800 to-black relative h-screen">
        <Image className=" opacity-70" src={imageThree} alt="" layout="fill" />
      </div>
    </Slider>
  );
};

export default Home;
