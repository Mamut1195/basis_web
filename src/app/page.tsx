import type { Metadata } from 'next'
import About from './About'
import Cards from './Cards'
import AppBgImg from './AppBgImg'



export const metadata: Metadata = {
  title: 'Blog MAMPRO',
  description: 'Software in Civil Engineering',
}


export default function Home() {

  return (
    <>
    
      <About />
      <AppBgImg />
      <Cards />
      
    </>

  )
}
