'use client'
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import Work from "@/Components/Work";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
