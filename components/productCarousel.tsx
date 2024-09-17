"use client"
import { Rating, Star } from "@smastrom/react-rating"
import Image from "next/image"
import React from "react"

interface Product {
  id: number
  name: string
  image: string
  price: number
  discountPrice?: number
  rating: number
}

interface ProductCarouselProps {
  title: string
  products: Product[]
}

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#FFC633",
  inactiveFillColor: "#FFFFFF",
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  products,
}) => {
  return (
    <section>
      <div>
        <h2 className='text-center integralCF text-5xl mt-[72px] mb-[55px]'>
          {title}
        </h2>
        <div className='flex justify-between'>
          {products.map((product) => (
            <div key={product.id}>
              <Image
                src={product.image}
                alt='product display'
                width={295}
                height={298}
              />
              <p className='satoshi-bold text-xl mt-4'>{product.name}</p>
              <div className='flex'>
                <Rating
                  readOnly
                  value={product.rating}
                  style={{ width: 113 }}
                  itemStyles={myStyles}
                />
                <p className='satoshi-regular my-2'>
                  {product.rating}/<span className='text-[#000000]/40'>5</span>
                </p>
              </div>
              {product.discountPrice ? (
                <div className='flex items-center'>
                  <span className='satoshi-bold text-2xl mr-[10px]'>
                    ${product.discountPrice}
                  </span>
                  <span className='satoshi-bold line-through text-[#000000]/40 decoration-[#000000]/40 text-2xl mr-[10px]'>
                    ${product.price}
                  </span>
                  <span className='satoshi-regular text-[#FF3333] bg-[#FF3333]/10 text-xs py-[6px] px-[13.5px] rounded-[62px]'>
                    -20%
                  </span>
                </div>
              ) : (
                <p className='satoshi-bold text-2xl'>${product.price}</p>
              )}
            </div>
          ))}
        </div>
        <div className='text-center mt-9'>
          <button className='border rounded-[62px] py-[15px] px-20 satoshi-regular font-medium'>
            View All
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductCarousel
