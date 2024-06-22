import React from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useState,useEffect } from 'react'
import { format } from 'date-fns';
const chatwithswiggy = () => {
  
    const router=useRouter();
    const { messages } = router.query;
    const [parsedMessages, setParsedMessages] = useState([]);
    const currentDate = new Date();
  const formattedDay = format(currentDate, 'EEE'); // Full name of the day
  const formattedTime = format(currentDate, 'p').toLowerCase().replace(' ', '');; // Time with AM/PM
    const [clientTime, setClientTime] = useState('');
    useEffect(() => {
      if (messages) {
        setParsedMessages(JSON.parse(messages));
        console.log(parsedMessages,"swiggy");
      }
    }, [messages]);
  
    const newMsg=parsedMessages.map((item)=>{
      if(item.sender ==='bot'){
        return item.text
      }
      
        })
  

      

        useEffect(() => {
          setClientTime(formattedDay+"  "+formattedTime);
        }, []);
  return (
    <Wrapper>
    {/* header */}
    <ChatHeader>
        <Link href="/">
    <ChatImage src="https://img.icons8.com/?size=100&id=102172&format=png&color=000000" />
</Link> 
    <ChatHeadText>Chat with Swiggy</ChatHeadText>
    </ChatHeader>
    <CustomerWrapper>
    <CustomerQuestion>{parsedMessages.map((item)=>{
      if(item.sender ==='user'){
        return item.text
      }
      
        })} <ChatTime>{clientTime ? ` ${clientTime}` : 'Loading...'}</ChatTime></CustomerQuestion>
    </CustomerWrapper>
    <SwiggyWrapper>
        <SwiggyFirst src="data:image/png;base64,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" />
        <BotAnswerFirst>Hi there,I am Swiggy bot.<BotTime>{clientTime ? ` ${clientTime}` : 'Loading...'}</BotTime></BotAnswerFirst>
    </SwiggyWrapper>
    <SwiggyWrapper>
        <Swiggy src="data:image/png;base64,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" />
        <BotAnswer>{newMsg}<BotTime>{clientTime ? ` ${clientTime}` : 'Loading...'}</BotTime></BotAnswer>
    </SwiggyWrapper>
    <SwiggyWrapper>
        <Swiggy src="data:image/png;base64,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" />
        <BotAnswer>I would like to inform you that we deal with these complaints strictly and if found guilty the concerned partner is penalized.<BotTime>{clientTime ? ` ${clientTime}` : 'Loading...'}</BotTime></BotAnswer>
    </SwiggyWrapper>
    <SwiggyWrapper>
        <Swiggy src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAjVBMVEX/////XQ3/TwD/WQD/TQD/UQD/VwD/VQD/5t7/g1f/SgD/7eb/49r//Pr/4df/1sr/9/T/w7D/8Or/y7v/7uj/mXj/dkH/r5X/aCb/3dL/bC7/bzT/0cP/t6D/i2P/+fb/sZn/kmz/ZB3/nn//v6r/p4v/pIf/e0n/dT7/lnP/wK3/iF7/gVP/aSn/uqRFDHEYAAAGyElEQVR4nO2da3OqMBCGJVfFC1JaL1VbrVV7O/3/P+9AxRarhCQkpCw8X87MaTvDvhOS3c3u0um0tDSA8Wj5ud7dxeynqyjou36ev0o33E44QZRzzmLifyglaLZZzV0/2R9jHG4woQx7F2DGETmsuq6f8K8wDA+xUJc6ZRTj5GnavpKdzmhD6JUVdamXP4lcP6tjlgsiXFNnelG2Hrp+YHdEMySxqDJwOnX9zI4YvChK9SUXf3P93A4YvvrqUiXQ+5HrZ6+aJedaUsVgf+v66atlQ3SlSuDewLUB1dH1tJfVaXGtXNtQFaHmbpUF9VxbUQ3bUq/gCT4buzakAt6pCa2SqBF+wDgpuV1l1ELQfYiFMa1iCOzszYt0JCinFuS1dTC5rhIo3MTNg2mtPIyhnok7ZFqrWK1711bZIfLNaxX7Ww+u7bJB34gvegn5dG2ZBWblY5zr+PCc063xzf0Enrm2zTRzKxvWEbpzbZ1hPFsvYQKwF3FqKHq+Dn5xbZ9JbiydhCcQpCvFB7Mh4QXYc22hObp6uzum4lv9DBSOs/WutbDYIlzeyUZI2LWNptBbWHiS/O2z5MlAody9vmotLBp8/bGstE+OjTTEo95RiI7OU0/SQUOBYzPNsNILdBTFYu+OzTSDZgStKJZHIKQBR5oOqapY9NmxoSbYaaYbVMU6np4150kzhFYVC8J7qJ0gVRaLho5NLc+zbtJPWSy2cWxqebRjaGWxAIQ82kk/dbFI3W9c9TNZ6mLRume1ltopUnWxeN1z8ZqxjpZYuO7VgHfaOVJ1sby650sPFW7wnu/Y2LLo+u96Yt04trYk+oUzGntWzR2tof4dmHIgTZ9qvrDGFYmVtG/WPkVTXqyPIrEw45QsdgCqS0tcRadiTUmOWjhRiRIy26yDR8dmmqG8WJ3dhBGCaAaECCH4vvc6fQM1zKD8a5jw2B8FyygKwzCKlkEw6t7CWEq/0LwG+yVWU2jFUkC/hg18Z84lE/1wp0Hdqikb7awDgPsHVab6Rco8uunncDN+hDgOIypRTBp7nAI4XvS2q2XN48Ezuhb6dU58+fAEvy5dG2mKEmkHWRjCUHrxFzYL4E9QD4afsbVcqHwE+yDexdBqu8APAMpC7HXO/YaDGFBTyWvoQah06JTx4dUgEDyut4o2LRCBd1WbFgix7LYaZsQCkf+y1/B7BgjfoRNYDA8zgDgNy1zhq2hV93qjlEqcB752baYZyuS0pKEwGp2qSNPE+zuUq0TbLdIepAZ8/SpcaWpffPuDfU8LwZloZz8DSF2baA7dnkNpAPTt/HBvOT6sfXNFFtmJA7oQSHeuQ7tiMViz7PZWD0QK4m7nm77FYWOxl+XaPMPY9OIZiJudDAOLS4uAK+VSau9SAi9c22YczSFaEoCZcJTB2q4FKNT5xtbgP753bZkNLI2UrHuXYQ7/bOzxQGZBXWDFMwX7tQELU87xwbVR1oh800ciAXKrc43bO0YQ+mmGy0cu8gbokJ4xHgQn5vP5aDQYDLoJg5TkP0ajkdz4DAQr36BNIOFpQF9Y8kg4saRdWCnFBSXtwvqmWCzIR6EihWIB9rGUKRQL2OcYiugH4Wp/99D7iOltttNwnimGKRIL1M2qmMHnZkYIpZwzhr9gjFPk/5uesghFYoGofJfgcYcJZ1eTEJj76fVygViACmeE3IqDmXRoWIFYQCpuC4nEOpDbr98S/xJqSsP5WJyqSTcjoVgN8kfFg55kxPLB3RXmshQKISEWf3VsQZUIPz+QdpaIxKKQaoyKEG7xabWV4Fcas7sfEdUCFooF4qsCCgSCbFWhWD6kgWwyCA7EIrHo1PGzV46gUISKxYLy9SYV8ps200qPPLF8qNeqAvKLcsViwZjgoEqYt3SOsWFO1Q2kDz+qkDf/HH8kP80pFfThdOkokVuxxWbr9ez6RX8zX8KEVd62hTm/vq6aeBKeUJ6u1aBkwwWqFVvgPkauhFrpZIMyfldRaq5L882NRaU8HtX+YwJlkX8RGZChIGWQPhFxk7KjOcgO2Gqq637OSmqyT7O9hh9k5qDDGQlSkrHE0uIgZomZICzctvy2xu+b94JeAgqy80uToXjXYg27+ipgLnTkOZThWIbYCxz51sP6Tb4jj6DMxjdHbo6ZA+2+LEWO/4Bnrh/sT/Jw9dYVNaQmWZVrU5hbbzSHK4lA1LgaEGku8g8c1mAss/TOwx587/qB/jLDs20LszbVIOJsclSTb1Sl+PzZtnxIIyLt8O1toTaPXMwTbg9CaY63PazNuUuRTKzBXntJKMeeerSNCGU5NLEgWZdx6zS0NIn/585ghQw0wrQAAAAASUVORK5CYII=" />
        <BotAnswer>Please let us know how you would like to continue
          <AgentButton>Talk to an Executive</AgentButton>
          <AgentButton>I have no issues further</AgentButton>
          <BotTime>{clientTime ? ` ${clientTime}` : 'Loading...'}</BotTime></BotAnswer>
    </SwiggyWrapper>
    </Wrapper>
  )
}

export default chatwithswiggy
const Wrapper=tw.div``

const ChatHeader=tw.div`flex border-b-2 px-6 py-6 items-center`
const ChatImage=tw.img`
w-5 color-gray-200 mr-4`

const ChatHeadText=tw.div`
  font-bold font-sans text-l
`
const CustomerQuestion=tw.div`object-contain w-60 flex flex-col   px-4 py-4 mt-6 mb-4  rounded-l-lg ml-auto  bg-violet-900 text-white font-sans font-light text-md`

const ChatTime=tw.div`
text-right text-xs pt-2
`
const CustomerWrapper=tw.div`px-4`
const SwiggyWrapper=tw.div`flex mx-2 my-4`
const Swiggy=tw.img`w-8 h-8  mx-2 mt-20`
const SwiggyFirst=tw.img`w-8 h-8  mx-2 mt-10`

const BotAnswer=tw.div`object-contain w-80 h-auto flex flex-col px-4 py-4      rounded-lg   bg-gray-200 text-gray-900  font-semibold text-md font-sans`

const BotTime=tw.div`text-right pt-2 text-gray-500 text-xs font-sans`

const AgentButton=tw.div`text-orange-500 bg-white border text-center rounded-lg my-2 py-2 font-semibold font-sans`

const BotAnswerFirst=tw.div`object-contain w-60 h-20 flex flex-col px-4 py-4 rounded-lg   bg-gray-200 text-gray-900  font-semibold text-md font-sans`
