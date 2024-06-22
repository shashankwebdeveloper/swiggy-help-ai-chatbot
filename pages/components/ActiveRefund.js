import React from 'react'
import tw from 'tailwind-styled-components'
import RecentOrders from './RecentOrders'
import Faqs from './Faqs'
const ActiveRefund = () => {
  return (
    <WrapperOuter>
    <Wrapper>
        <ActiveWrapper>
      <ActiveRefundText>You have 0 active refund</ActiveRefundText>
      <ButtonWrapper>
        <Viewtext>VIEW MY REFUNDS</Viewtext>
        <RightArrow src="https://img.icons8.com/?size=100&id=61&format=png&color=000000" />
      </ButtonWrapper>
      </ActiveWrapper>
      <RupeeWrapper>
      <RupeeIcon src="https://img.icons8.com/?size=100&id=112571&format=png&color=000000" />
      </RupeeWrapper>
    </Wrapper>
    <RecentOrders/>
    <Faqs/>
    </WrapperOuter>
  )
}

export default ActiveRefund

const Wrapper=tw.div`
flex  item-center justify-between bg-white px-4 py-4 mx-4 my-4 rounded-xl
`
const ActiveRefundText=tw.div`
text-xl font-bold font-sans 
`

const RupeeIcon=tw.img`
 
`

const ButtonWrapper=tw.button`
flex items-center justify-between border-2 my-2 p-2 rounded-md
`
const Viewtext=tw.div`
mr-2 font-semibold text-orange-500 font-sans text-xs
`

const RightArrow=tw.img` 
size-3  
`

const RupeeWrapper=tw.div`
bg-red-200 w-11 h-11 p-2 mt-4 rounded-full  `

const ActiveWrapper=tw.div`

`
const WrapperOuter=tw.div``