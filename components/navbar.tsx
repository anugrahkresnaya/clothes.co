import Image from "next/image"
import cart from "@/public/cart.svg"
import profile from "@/public/profile.svg"
import search from "@/public/search.svg"
import chevDown from "@/public/chevron-down.svg"

const Navbar = () => {
  return (
    <nav className='flex gap-x-10 justify-between px-[100px] align-middle items-center py-6 sticky top-0 bg-white'>
      <h1 className='font-bold text-[32px] integralCF'>CLOTHES.CO</h1>
      <ul className='flex gap-x-6 satoshi-regular items-center'>
        <li className='flex flex-row items-center'>
          Shop{" "}
          <span className='ml-1'>
            <Image src={chevDown} height={16} width={16} alt='chevron down' />
          </span>
        </li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>
      <div className='flex-grow flex justify-center relative'>
        <input
          type='text'
          placeholder='Search for product...'
          className='bg-[#F0F0F0] w-full flex border rounded-[65px] py-3 pl-[52px] pr-4'
        />
        <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
          <Image src={search} width={24} height={24} alt='search' />
        </div>
      </div>
      <div className='flex gap-x-[14px]'>
        <Image src={cart} width={24} height={24} alt='cart' />
        <Image src={profile} width={24} height={24} alt='profile' />
      </div>
    </nav>
  )
}

export default Navbar
