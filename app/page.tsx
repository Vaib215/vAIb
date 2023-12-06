import { ToolsSection } from '@/components/layout/tools-section'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-4 flex-1">
      {/* <Link href={'summarizer'}>Article Summarizer</Link>
      <Link href={'daigram'}>dAIgram</Link> */}
      <ToolsSection />
    </main>
  )
}
