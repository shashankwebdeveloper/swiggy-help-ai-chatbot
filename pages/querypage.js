

import tw from "tailwind-styled-components"
import { Inter } from "next/font/google";
import Header from "./components/Header";
import ActiveRefund from "./components/ActiveRefund";
import RecentOrders from "./components/RecentOrders";
import Faqs from "./components/Faqs";
const inter = Inter({ subsets: ["latin"] });

export default function querypage() {
  return (
    <Wrapper>


      {/* Header */}
    
      <Header/>

      {/* active refund */}

         <ActiveRefund/>
      {/* Recent Orders */}
      
     
      {/* issues with previous Orders */}
     
      {/* Help with other queries */}








      
      </Wrapper>
     );
}


const Wrapper=tw.div`
bg-gray-200 h-screen`
