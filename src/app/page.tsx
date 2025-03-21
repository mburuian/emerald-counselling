"use client"
import { NavigationMenuDemo } from "@/blocks/navbar";
import '../blocks/styles.css'
import Landing from '@/blocks/landing'
import Info from '@/blocks/info'
import Info2 from '@/blocks/info2'
import Services from "@/blocks/services";
import Info3 from '@/blocks/info3'
import Info4 from '@/blocks/info4'
import Info5 from '@/blocks/info5'
import Info6 from '@/blocks/info6'
import Faq from '@/blocks/faq'
import Contacts from '@/blocks/contacts'
import Footer from '@/blocks/footer'



export default function Home() {
  return (
    <>
      <NavigationMenuDemo />
      <Landing/>
      <br />
      <Info/>
      <Info2/>
      <Services/>
      <Info3/>
      <Info4/>
      <Info5/>
      <Faq/>
      <Info6/>
      <Contacts/>
      <Footer/>
    </>
  );
}
