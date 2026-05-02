import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discord Code Review Queue — Turn Discord into a code review system',
  description: 'A Discord bot that monitors code review requests, automatically assigns reviewers, and tracks review status with slash commands. $12/mo.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="eea25fd2-058d-4525-84e5-cc0d99ef4cc6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
