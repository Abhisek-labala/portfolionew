import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Abhisek Labala | Full Stack Developer',
  description: 'Full Stack Developer with 2+ years of experience in React.js, Laravel, PostgreSQL, and cloud technologies. Building scalable web and mobile applications.',
  keywords: ['Full Stack Developer', 'React.js', 'Laravel', 'Next.js', 'PostgreSQL', 'AWS', 'Web Development'],
  authors: [{ name: 'Abhisek Labala' }],
  openGraph: {
    title: 'Abhisek Labala | Full Stack Developer',
    description: 'Full Stack Developer specializing in React.js, Laravel, and cloud technologies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
