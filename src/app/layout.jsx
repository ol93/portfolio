import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import Head from 'next/head'

import '@/styles/tailwind.css'
import Link from 'next/link'

export const metadata = {
  title: {
    template: 'OS Code Works',
    default:
      'OS Code Works | Olaf Schaftenaar',
  },


  description: {
    default:
      'Olaf Schaftenaar is a full-stack developer with a passion for creating beautiful and functional web applications.',
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <Head>
      <Link href="/favicon.ico" rel="icon" />

      </Head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
