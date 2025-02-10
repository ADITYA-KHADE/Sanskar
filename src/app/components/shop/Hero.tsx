import React from 'react';
import Image from 'next/image';
import HeroImage from '../../images/shop/Hero.webp';

const Hero = () => {
  return (
    <section className="bg-yellow-400 py-16 px-4 border-y border-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          AGARBATHIS, DHOOP STICKS & DHOOP CONES
        </h2>

        <div className="mb-8">
          <div className="relative inline-block">
            <Image
              src={HeroImage}
              alt="Various incense products with flowers"
              width={HeroImage.width}  // Uses the original width of the image
              height={HeroImage.height} // Uses the original height of the image
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-6 text-gray-800">
          <p className="text-lg italic">
            We bring to you a fresh take on traditions - now, beyond your flowers!
          </p>

          <p className="text-lg">
            Agarbathis, Dhoop Sticks and Incense Cones in five different fragrances - 
            Rose, Jasmine, Lavender, Sandalwood and Tulsi.
          </p>

          <p className="text-lg">
            Our Agarbattis are made from sacred temple flowers. The dhoop sticks and 
            cones are made with natural ingredients to ensure a peaceful and beautiful 
            pooja experience.
          </p>

          <p className="text-lg">
            Just light them and sit back to enjoy, as the subtle aroma fills the room 
            and awakens your senses. Enter a world of fragrance with Hooyu today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
