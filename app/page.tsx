import Image from "next/image";
import heroDesktop from "@/public/hero-desktop.svg";
import versace from "@/public/versace-logo.svg";
import gucci from "@/public/gucci-logo.svg";
import zara from "@/public/zara-logo.svg";
import ck from "@/public/ck-logo.svg";
import prada from "@/public/prada-logo.svg";

export default function Home() {
  return (
    <div>
      <section className="flex flex-row bg-[#F2F0F1] justify-between -mx-[100px] px-[100px]">
        <div className="flex flex-col justify-center">
          <h1 className="integralCF text-[64px] leading-[64px] mb-8">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLES
          </h1>
          <p className="text-base max-w-[545px] leading-[22px] mb-8">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater your sense of
            style.
          </p>
          <button className="py-[15px] px-[67px] bg-[#000000] text-white rounded-[62px] w-fit mb-12">
            Shop Now
          </button>
          <div className="grid grid-cols-3 divide-x divide-black/60">
            <div className="flex flex-col items-center">
              <p className="text-[40px] satoshi-bold">200+</p>
              <p className="text-base satoshi-regular">International Brands</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[40px] satoshi-bold">2,000+</p>
              <p className="text-base satoshi-regular">High-Quality Products</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[40px] satoshi-bold">30,000+</p>
              <p className="text-base satoshi-regular">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="h-full">
          <Image src={heroDesktop} alt="hero" />
        </div>
      </section>
      <section className="bg-black flex justify-between -mx-[100px] px-[100px] py-[42px]">
        <Image src={versace} alt="versace" />
        <Image src={zara} alt="zara" />
        <Image src={gucci} alt="gucci" />
        <Image src={prada} alt="prada" />
        <Image src={ck} alt="calvin klein" />
      </section>
      <section className="">
        <h1 className="text-center integralCF text-5xl mt-[72px] mb-[55px]">
          NEW ARRIVALS
        </h1>
        <div>
          <div></div>
        </div>
      </section>
    </div>
  );
}
