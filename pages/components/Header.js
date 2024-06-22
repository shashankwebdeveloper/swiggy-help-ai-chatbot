import React from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'
const Header = () => {
  return (
    <Link href="/">
    <Wrapper>
        
    <BackButtonImage src="https://img.icons8.com/?size=100&id=7811&format=png&color=737373" />
    <Helptext>HELP & SUPPORT</Helptext>
    
    </Wrapper>
    </Link>
  )
}

export default Header


const Wrapper=tw.div`
flex px-4 py-4 bg-white border-b-4 items-center
`

const BackButtonImage=tw.img`
w-5 color-gray-200 mr-2
`

const Helptext=tw.div`
font-medium color-gray-200 text-xs font-sans
`