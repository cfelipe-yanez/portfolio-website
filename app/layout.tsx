import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const instrumentSans = Instrument_Sans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Felipe Yánez — Data Scientist & Machine Learning Engineer',
  description:
    'Felipe Yánez develops Artificial Intelligence solutions that combine data science, machine learning and biomedical engineering to solve real-world problems.',
  generator: 'v0.app',
  keywords: [
    'Felipe Yánez',
    'Data Scientist',
    'Machine Learning Engineer',
    'Computer Vision',
    'Biomedical Engineering',
    'AI Researcher',
  ],
  authors: [{ name: 'Felipe Yánez' }],
  openGraph: {
    title: 'Felipe Yánez — Data Scientist & Machine Learning Engineer',
    description:
      'AI solutions combining data science, machine learning and biomedical engineering.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased bg-background">
        <ThemeProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
