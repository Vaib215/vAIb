import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid grid-cols-4">
      <Link href={'qr-code'}>QR Code Generator</Link>
    </main>
  )
}
