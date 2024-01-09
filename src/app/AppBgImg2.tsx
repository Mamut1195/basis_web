import Image from "next/image";


export default function AppBgImg2() {
  return <Image 
    src={'/Fondo2.jpeg'}
    // placeholder="blur"
    alt="bg Image"
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
      zIndex: -1
    }}
  />
}