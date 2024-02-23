import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Williams Isaac',
    default:
      'Williams Isaac - A software engineer, and a Founder.',
  },
  description:
    'I’m Williams, a software designer and entrepreneur based in Lagos, Nigeria but working with people from over the world. I’m the founder of Fuddle.ai, where I am building an AI Nutritionist and First Engineer at Fireflies.ai, where we develop AI Meeting Assistant that will help revolutionize the how humans work and do meetings.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
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
