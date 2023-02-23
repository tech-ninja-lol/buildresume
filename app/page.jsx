// import { Montserrat } from '@next/font/google'
import Hero from "@/components/Hero";
import Howto from "@/components/Howto";
import Templates from "@/components/Templates";
import WhatCV from "@/components/WhatCV";

// const inter = Montserrat({ subsets: ['latin'] })

export default async function Home() {
  return ( 
    <main >
      <Hero/>
      <Howto/>
      <Templates title='Best free CV templates'/>
      <WhatCV/>
    </main>
  )
}
