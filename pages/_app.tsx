import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '@/components/layout'
import StyledJsxRegistry from '../app/registry'
import { Roboto  } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto ({ weight: ['100','300', '400', '500', '700', '900'], subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return  (
    <>
    <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
    </Head>
    <Layout >
    
      <main className={roboto.className}>
      <StyledJsxRegistry><Component {...pageProps} /></StyledJsxRegistry>
      </main>
    </Layout>
    </>
  )
}
export async function generateMetadata() {
	return {
		title: 'My title',
		description: 'My description',
	}
}