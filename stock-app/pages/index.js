import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css';
import Head from 'next/head'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Hero from './components/Hero'
import { Container } from 'react-bootstrap';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <Head>
      <title> Stock App </title>
    </Head>
    <Container fluid className='mx-lg-5 mx-2'>
      <NavBar/>
    </Container>
    <Hero/>
  </>
  )
}
