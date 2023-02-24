"use client"
import './globals.css'
import { Poppins } from '@next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {Providers} from './providers'
import { Provider } from "react-redux";
import store from '../store'
// import {store_0001} from '../store'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers >

        <Header/>
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  )
}
