import React from "react";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { GiSofa } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { TbCircleNumber2Filled } from "react-icons/tb";


const Aboutus = () => {
  return (
    <div className='w-[1920px]'>
      {/* Top Header Section */}
      <div className="w-full h-[45px] px-4 md:px-12 lg:px-24 bg-[#272343] flex justify-between items-center text-white">
        {/* Left Section */}
        <div className="flex items-center gap-2 text-sm md:text-base">
          <TiTick className="text-xl" />
          Free Shipping On All Orders Over $50
        </div>
        {/* Right Section */}
        <div className="flex items-center gap-6 text-sm opacity-70">
          <div className="flex items-center">
            Eng
            <IoIosArrowDown className="ml-2" />
          </div>
          <div>Faqs</div>
          <div className="flex items-center">
            <AiOutlineExclamationCircle className="text-2xl md:text-4xl mr-2" />
            Need Help
          </div>
        </div>
      </div>

      {/* Middle Header Section */}
      <div className="w-full h-auto py-4 bg-[#F0F2F3] flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-24">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <GiSofa className="text-4xl md:text-6xl text-[#56d3be]" />
          <div className="text-lg md:text-xl">Comforty</div>
        </div>
        {/* Cart Section */}
        <div className="flex items-center gap-4 bg-white rounded-lg px-4 py-2 mt-4 md:mt-0">
          <FiShoppingCart className="text-2xl md:text-4xl" />
          <div className="flex items-center text-sm md:text-xl">
            Cart
            <TbCircleNumber2Filled className="text-[#56d3be] ml-2 text-lg md:text-2xl" />
          </div>
        </div>
      </div>

      {/* Bottom Header Section */}
      <div className="w-full h-auto py-4 bg-white flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-24">
        {/* Navigation Links */}
        <div className="flex gap-4 md:gap-8 text-sm md:text-base">
        </div>
      </div>

      <div className="w-full px-4 md:px-12 lg:px-24 mt-16 space-y-12">
        {/* Text and Image Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Text Block */}
          <div className="w-full lg:w-1/2 bg-[#007580] flex justify-center items-center p-6">
            <Image
              src="/image/TextBlock.svg"
              alt="Text"
              className="w-full max-w-[400px] md:max-w-[500px] h-auto"
              width={500}
              height={400}
            />
          </div>

          {/* Image Block */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/image/imageBlock.svg"
              alt="Image Block"
              className="w-full max-w-[400px] md:max-w-[500px] h-auto"
              width={500}
              height={400}
            />
          </div>
        </div>

        {/* Brand Section */}
        <div className="text-center font-sans font-bold text-2xl md:text-3xl bg-[#272343] text-white py-4">
          What makes our Brand Different
        </div>

        {/* Group Section */}
        <div className="w-full bg-[#F9F9F9] flex justify-center py-6">
          <Image
            src="/image/Group.svg"
            alt="Groups"
            className="w-full max-w-[1000px] h-auto"
            width={1000}
            height={600}
          />
        </div>

        {/* Popular Products Section */}
        <div className="space-y-6">
          {/* Title */}
          <div className="text-center font-sans font-bold text-xl md:text-2xl">
            Our Popular Products
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex justify-center">
              <Image
                src="/image/Card.svg"
                alt="Card"
                className="w-full max-w-[700px] h-auto"
                width={700}
                height={400}
              />
            </div>

            {/* Card 2 */}
            <div className="flex justify-center">
              <Image
                src="/image/ProductCard.svg"
                alt="Product Card"
                className="w-full max-w-[400px] h-auto"
                width={400}
                height={300}
              />
            </div>

            {/* Card 3 */}
            <div className="flex justify-center">
              <Image
                src="/image/Parent.svg"
                alt="Parent"
                className="w-full max-w-[400px] h-auto"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] w-full">
        {/* Main Footer Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 px-4 md:px-12 lg:px-24 py-8">
          {/* First Image */}
          <Image
            className="w-full max-w-[200px] md:max-w-[300px] mt-4"
            src="/image/Chairy.svg"
            alt="Footer Logo"
            width={300}
            height={200}
          />

          {/* Second Image */}
          <Image
            className="w-[100px] md:w-[105px] h-auto mt-4"
            src="/image/footer-text.svg"
            alt="Footer Text"
            width={105}
            height={100}
          />

          {/* Third Image */}
          <Image
            className="w-[120px] md:w-[156px] h-auto mt-4"
            src="/image/Frametext.svg"
            alt="Frame Text"
            width={156}
            height={120}
          />

          {/* Newsletter Section */}
          <Image
            className="w-full max-w-[250px] md:max-w-[424px] h-auto border border-gray-200 rounded-md mt-4"
            src="/image/Newsletter.svg"
            alt="Newsletter"
            width={424}
            height={250}
          />
        </div>

        {/* Last Footer Section */}
        <div className="w-full mt-8">
          <Image
            src="/image/Frame 69.svg"
            alt="Footer Bottom"
            className="w-full object-cover"
            width={1920}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
