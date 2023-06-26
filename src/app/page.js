"use client";
import Image from 'next/image'
import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar(draft)"

export default function Home() {
  return (
    <>
      <nav className='mx-0  px-0 sm:px-6 lg:px-8'>
        <Navbar />
        <Navbar2 />
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">

      </main>
    </>
  )
}
