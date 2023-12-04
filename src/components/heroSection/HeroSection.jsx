
'use client';

import { Carousel } from 'flowbite-react';

function HeroSection() {
  return (
    <div className="hidden lg:block h-60">
      <Carousel>
        <img src="images/bannerOne.png" alt="..." />
        <img src="images/bannerTwo.png" alt="..." />
        <img src="images/bannerThree.png" alt="..." />
        <img src="images/bannerFour.png" alt="..." />
        <img src="images/bannerFive.png" alt="..." />
      </Carousel>
    </div>
  );
}

export default HeroSection;