import Head from 'next/head';
import AboutSection from '../components/AboutSection';
// import HomeSection from '../components/HomeSection';
import styles from '../styles/Home.module.scss';


export default function Home() { 
  return (
    // <Container fluid className={styles.container}>
     <div className={styles.container}>
      <Head> 
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <script src="https://unpkg.com/codyhouse-framework/main/assets/js/util.js"></script>
        <script src="../components/snow"></script>
      </Head>

      <main className={styles.main}>
              
{/* 
        <HomeSection /> */}
        <AboutSection/>
      </main> 
       
    </div>
  )
}
