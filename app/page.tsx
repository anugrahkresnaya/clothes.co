import Image from "next/image"
import heroDesktop from "@/public/hero-desktop.svg"
import versace from "@/public/versace-logo.svg"
import gucci from "@/public/gucci-logo.svg"
import zara from "@/public/zara-logo.svg"
import ck from "@/public/ck-logo.svg"
import prada from "@/public/prada-logo.svg"
import ProductCarousel from "@/components/productCarousel"

const newArrivals = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    image: "/product-1.svg",
    price: 120,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    image: "/product-2.svg",
    price: 240,
    discountPrice: 200,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Checkered Shirt",
    image: "/product-3.svg",
    price: 180,
    rating: 4.4,
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    image: "/product-4.svg",
    price: 160,
    discountPrice: 130,
    rating: 4.7,
  },
]

const topSelling = [
  {
    id: 5,
    name: "Vertical Striped Shirt",
    image: "/product-5.svg",
    price: 232,
    discountPrice: 212,
    rating: 4.5,
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    image: "/product-6.svg",
    price: 145,
    rating: 4.6,
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    image: "/product-7.svg",
    price: 80,
    rating: 4.3,
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    image: "/product-8.svg",
    price: 210,
    rating: 4.5,
  },
]

export default function Home() {
  return (
    <div>
      <section className='flex flex-row bg-[#F2F0F1] justify-between -mx-[100px] px-[100px]'>
        <div className='flex flex-col justify-center'>
          <h1 className='integralCF text-[64px] leading-[64px] mb-8'>
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLES
          </h1>
          <p className='text-base max-w-[545px] leading-[22px] mb-8'>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater your sense of
            style.
          </p>
          <button className='py-[15px] px-[67px] bg-[#000000] text-white rounded-[62px] w-fit mb-12'>
            Shop Now
          </button>
          <div className='grid grid-cols-3 divide-x divide-black/60'>
            <div className='flex flex-col items-center'>
              <p className='text-[40px] satoshi-bold'>200+</p>
              <p className='text-base satoshi-regular'>International Brands</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-[40px] satoshi-bold'>2,000+</p>
              <p className='text-base satoshi-regular'>High-Quality Products</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-[40px] satoshi-bold'>30,000+</p>
              <p className='text-base satoshi-regular'>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className='h-full'>
          <Image src={heroDesktop} alt='hero' />
        </div>
      </section>
      <section className='bg-black flex justify-between -mx-[100px] px-[100px] py-[42px]'>
        <Image src={versace} alt='versace' />
        <Image src={zara} alt='zara' />
        <Image src={gucci} alt='gucci' />
        <Image src={prada} alt='prada' />
        <Image src={ck} alt='calvin klein' />
      </section>
      <ProductCarousel title='NEW ARRIVALS' products={newArrivals} />
      <div className='border mt-16'></div>
      <ProductCarousel title='TOP SELLING' products={topSelling} />
    </div>
  )
}
