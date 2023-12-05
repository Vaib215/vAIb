import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid grid-cols-4 p-4">
      <Link href={'summarizer'}>Article Summarizer</Link>
      <Link href={'daigram'}>dAIgram</Link>
    </main>
  )
}
