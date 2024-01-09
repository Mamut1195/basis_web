import Image from "next/image";


export default function AppBgImg() {
  return <Image 
    src={'/Fondo.jpeg'}
    // placeholder="blur"
    alt="bg Image"

    fill
    style={{
      objectFit: 'cover',
      zIndex: -1
    }}
  />
}