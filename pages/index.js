import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Header from './components/Header'
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';


 const HomePage = () => {
const [input,setInput]=useState('');
const [msgUser,setMsgUser]=useState({quest:'',});
const [openIndex,setOpenIndex]=useState(null);
const [messages, setMessages] = useState([]);
const [sessionId, setSessionId] = useState('');
const [newMsg,setNewMsg]=useState({});
const router=useRouter();
 const currentTimestamp = new Date().toLocaleString();

//   const [input, setInput] = useState('');
    const queryList=[

     {
        question:'I did not receive this order',
        id:'1',
        type:'Q',
        content:'We are really sorry for this experience.You can try reaching out to our delivery executive or us and we will try to resolve this as soon as possible',
        
     },
     
     {
        question:'Item(s) portion size is not adequate',
        id:'2',
        type:'Q',
        content:'Please let us know what items are inadequate. And we wil try to resolve this immediately'
     },
     
     {
        question:'Report a safety incident',
        id:'3',
        type:'s',
        content:''
     },
     
     {
        question:'Few Item(s) are missing in my order',
        id:'4',
        type:'s',
        content:''
     },
     
     {
        question:'Items(s) delivered are incorrect or wrong',
        id:'5',
        type:'Q',
        content:'Please select the RIGHT ISSUE to help us resolve quickly and accurately'
     },
     
     {
        question:'Item(s) quality is poor',
        id:'6',
        type:'s',
         content:''
     },
     
     {
        question:'Item(s) has spillage issue',
        id:'7',
        type:'Q',
         content:'We are really sorry that your order had spillage issues.Please reach out to us and we will try to resolve this immediately'
     },
     
     {
        question:'Report a delivery Partner fraud incident',
        id:'8',
        type:'s',
         content:''
     },
     
     {
        question:'I have coupon related query for this order',
        id:'9',
        type:'Q',
         content:'1.I am unable to find my coupon You can view available coupons for your RecentOrders, by going to the APPLY COUPON  section on the cart page while placing your order. '
     },
     
     {
        question:'payment and billing related query',
        id:'10',
        type:'s',
         content:''
     },

    ];
    

    useEffect(() => {
        setSessionId(uuidv4()); // Generate a unique session ID when the component mounts
      }, []);
      const sendMessage = async () => {
        if (input.trim() === '') return;
    
        const userMessage = { sender: 'user', text: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
    
        try {
          const response = await fetch('/api/chatbot', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: input, sessionId }), // Use the generated session ID
          });
    

          const data = await response.json();
          console.log('Response data:', data); // Debugging log
    
          if (response.ok) {
            const botMessage = {
              sender: 'bot',
              text: data.response
            };
    
            // Add the bot's message to the messages array
            const newMessages = [...updatedMessages, botMessage];
            setMessages(newMessages);

            router.push({
              pathname: '/chatwithswiggy',
              query: { messages: JSON.stringify(newMessages) },
            });
          } else {
            console.error('Error:', data.error);
          }
        } catch (error) {
          console.error('Error sending message:', error);
          const errorMessage = { sender: 'bot', text: 'Sorry, something went wrong. Please try again.' };
          setMessages((prevMessages) => [...prevMessages, userMessage, errorMessage]);
          
        } finally {
          setInput('');
        }


        
        
        
      };
    console.log(messages,'yes');
  return (
    <Wrapper>
        <HeadWrapper>
        
        <Link href="/querypage">
        <BackButtonImage src="https://img.icons8.com/?size=100&id=7811&format=png&color=737373" />
        </Link>
        <Helptext>HELP & SUPPORT</Helptext>
        
        </HeadWrapper>
       
        {queryList.map((item,index)=>{
            return(
                <OuterWrapper  key={index}>
                <QueryWrapper style={{borderBottom:openIndex===index?"none":""}} onClick={()=>{ 
                    setMsgUser({...msgUser,quest:item.question})
                    setInput(item.question);
                    setOpenIndex(openIndex===index?null:index)
                  
                    }} >{item.question} {!(item.type==='s')?<QueryDown src={!(openIndex===index)?`https://img.icons8.com/?size=100&id=HqE81NCGcYux&format=png&color=737373`:`https://img.icons8.com/?size=100&id=101314&format=png&color=737373`} /> :""}</QueryWrapper>
            {openIndex===index?
                (<ContentWrapper>
                <ContentPara>{item.content}</ContentPara>
            
                <ChatButton onClick={sendMessage} >CHAT WITH US</ChatButton>
              
                <Time>Wait time under 2 min (s)</Time>
               </ContentWrapper>):"" }
            </OuterWrapper>
            )
        })}
        
    </Wrapper>
  )
}

export default HomePage;


const Wrapper=tw.div`h-screen  bg-gray-200`

const QueryWrapper=tw.div`border-b bg-white  px-6 py-6 flex justify-between `

const QueryText=tw.div`font-semibold text-md font-sans shadow-current`

const QueryUp=tw.img``
const QueryDown=tw.img`
w-4 h-4 
`


const ContentWrapper=tw.div` px-6 pb-6  bg-white flex flex-col  `

const OuterWrapper=tw.div`border-b`
const ContentPara=tw.div`text-gray-500  text-xs`

const ChatButton=tw.button`mt-4 mb-2 bg-orange-600  w-40 text- text-bold shadow-white text-white rounded py-2 font-sans`

const Time=tw.div`mx-4 text-gray-500 text-xs`

const HeadWrapper=tw.div`
flex px-4 py-4 bg-white border-b-4 mb-4 items-center
`

const BackButtonImage=tw.img`
w-5 color-gray-200 mr-2
`

const Helptext=tw.div`
font-medium color-gray-200 text-xs font-sans
`