import React from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'
const RecentOrders = () => {
  return (
    <Wrapper>
      <RecentHeading>RECENT ORDER</RecentHeading>
      <RecentContentWrapper>
        <Link href="/">
        <Restaurantname>McDonald's</Restaurantname>
        <Place>Jubilee hills</Place>
        <Price>₹549 
            <RightPriceIcon src="https://img.icons8.com/?size=100&id=15812&format=png&color=737373" />
        </Price>
        </Link>
      </RecentContentWrapper>
    
      <SecondContentWrapper>
      <Link href="/">
        <Restaurantname>Pista House Restaurant</Restaurantname>
        <Place>Koti</Place>
        <Price>₹260 
            <RightPriceIcon src="https://img.icons8.com/?size=100&id=15812&format=png&color=737373" />
        </Price>
        </Link>
      </SecondContentWrapper>
      <SecondContentWrapper>
      <Link href="/">
        <Restaurantname>The Rameshwaram Cafe</Restaurantname>
        <Place>Madhapur</Place>
        <Price>₹279 
            <RightPriceIcon src="https://img.icons8.com/?size=100&id=15812&format=png&color=737373" />
        </Price>
        </Link>
      </SecondContentWrapper>

      
    </Wrapper>
  )
}

export default RecentOrders

const Wrapper=tw.div`

`

const RecentHeading=tw.div` px-6  text-black-900 font-semibold text-xs  font-sans`
const RecentContentWrapper=tw.div`
flex flex-col bg-white py-2  mt-2 px-6 border-b-2 border-dashed
`
const Restaurantname=tw.div` pt-2 font-semibold text-md font-sans`
const Place=tw.div`
text-xs text-color-lightgray-200 py-1
`
const Price=tw.div` flex items-center text-xs text-color-lightgray-200 pb-1`

const RightPriceIcon=tw.img`
w-3
`
const SecondContentWrapper=tw.div`
flex flex-col bg-white py-2  px-6 border-b-2 border-dashed
`