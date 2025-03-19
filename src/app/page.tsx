import { NavigationMenuDemo } from "@/blocks/navbar";
import '../blocks/styles.css'
import Landing from '@/blocks/landing'
import Info from '@/blocks/info'

export default function Home() {
  return (
    <>
      <NavigationMenuDemo />
      <Landing/>
      <br />
      <Info/>
    </>
  );
}
