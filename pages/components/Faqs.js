import React from 'react'
import tw from 'tailwind-styled-components'
const Faqs = () => {
  return (
    <Wrapper>
      <IssuesWrapper>
        <IssueText>Issues with Previous Orders
        <RightPriceIcon src="https://img.icons8.com/?size=100&id=15812&format=png&color=737373" />

        </IssueText>
        </IssuesWrapper>
        <HelpOthersheading>HELP WITH OTHER QUERIES</HelpOthersheading>
        <FaqWrapper>
        <FaqText>Swiggy One FAQs
        <RightPriceIcon src="https://img.icons8.com/?size=100&id=15812&format=png&color=737373" />

        </FaqText>
        <FaqText>General issues
        <RightPriceIcon src="https://img.icons8.com/?size=100&id=15812&format=png&color=737373" />

        </FaqText>
        <FaqText>partner Onboarding
        <RightPriceIcon src="https://img.icons8.com/?size=100&id=15812&format=png&color=737373" />

        </FaqText>
        <FaqText>Legal ,Terms & Conditions
        <RightPriceIcon src="https://img.icons8.com/?size=100&id=15812&format=png&color=737373" />

        </FaqText>
        <FaqText>FAQs
        <RightPriceIcon src="https://img.icons8.com/?size=100&id=15812&format=png&color=737373" />

        </FaqText>
        </FaqWrapper>
    
    </Wrapper>
  )
}

export default Faqs


const Wrapper=tw.div`
flex flex-col
`
const IssuesWrapper=tw.div`
bg-white py-4 px-4 my-4
`
const IssueText=tw.div`
flex justify-between  font-semibold text-md font-sans
`
const HelpOthersheading=tw.div`
text-black-900 ml-4 font-semibold text-xs  font-sans`
const FaqWrapper=tw.div`
bg-white py-2  my-4`
const FaqText=tw.div`
flex justify-between pt-2 font-semibold text-md font-sans border-b py-4 px-4`
const RightPriceIcon=tw.img`w-4`
