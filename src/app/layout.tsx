import type { Metadata } from 'next'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import Providers from './providers'

export const metadata: Metadata = {}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head />
      <body className='flex flex-col min-h-screen'>
        <NextIntlClientProvider>
          <Providers>
            <main className='container mx-auto pt-16 flex-1 px-4 sm:px-6 md:px-12'>{children}</main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
