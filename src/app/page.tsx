"use client"
import { NavigationMenuDemo } from "@/blocks/navbar";
import '../blocks/styles.css'
import Landing from '@/blocks/landing'
import Info from '@/blocks/info'
import Info2 from '@/blocks/info2'

export default function Home() {
  return (
    <>
      <NavigationMenuDemo />
      <Landing/>
      <br />
      <Info/>
      <Info2/>
    </>
  );
}
