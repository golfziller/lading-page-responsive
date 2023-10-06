import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '@/components/layout'
import StyledJsxRegistry from '../app/registry'
import { Roboto  } from 'next/font/google'

const roboto = Roboto ({ weight: ['100','300', '400', '500', '700', '900'], subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return  (
    <Layout >
      <main className={roboto.className}>
      <StyledJsxRegistry><Component {...pageProps} /></StyledJsxRegistry>
      </main>
    </Layout>
  )
}