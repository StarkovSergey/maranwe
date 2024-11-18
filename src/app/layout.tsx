import type { Metadata } from 'next'
import '../styles/variables.css'
import '../styles/globals.css'
import { Poppins } from 'next/font/google'
import { MainMenu } from '@/widgets/main-menu'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.className}`}>
        <div className="h-screen md:grid md:grid-cols-[250px_1fr]">
          <MainMenu />
          {children}
        </div>
      </body>
    </html>
  )
}
