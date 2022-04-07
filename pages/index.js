import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Williams Isaac [dot] com</title>
        
        {/* <!-- HTML Meta Tags --> */}
        <title>Williams Isaac's Site</title>
        <meta name="description" content="Hi, I am Williams, tech lead @fireflies.ai with 8years of experience across many industries." />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.williamsisaac.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Williams Isaac's Site" />
        <meta property="og:description" content="Hi, I am Williams, tech lead @fireflies.ai with 8years of experience across many industries." />
        <meta property="og:image" content="https://www.williamsisaac.com/williams.PNG" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="williamsisaac.com" />
        <meta property="twitter:url" content="https://www.williamsisaac.com/" />
        <meta name="twitter:title" content="Williams Isaac's Site" />
        <meta name="twitter:description" content="Hi, I am Williams, tech lead @fireflies.ai with 8years of experience across many industries." />
        <meta name="twitter:image" content="https://www.williamsisaac.com/williams.PNG" />
      
      </Head>

      <main className={styles.main}>
        <Image src="/williams.PNG" alt="Williams Avatar" width={100} height={100} />
        <h1 className={styles.title}>
          Hi, I am <a href="https://williamsisaac.notion.site/">Williams,</a>
        </h1>

        <p className={styles.description}>
          {"and it's nice to have you here."}
        </p>

        <div className={styles.content}>
          <p className={styles.body}>
            I currently work as a 
            <code className={styles.code}>research tech lead @fireflies.ai</code> while I hack around a few other interesting side projects in my free time.
          </p>

          <p className={styles.body}>
            {"If you'd like to know more about me, I have consolidated a few details on my notion; you can click on 'About' to see it &amp; feel free to reach out to me on LinkedIn or request for my email address."}
          </p>
        </div>

        <div className={styles.grid}>
          <a href="https://williamsisaac.notion.site/" className={styles.card}>
            <h2>About &rarr;</h2>
          </a>

          <a href="https://linkedin.com/in/wilforlan" className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=williamsisaac.com&utm_medium=website&utm_campaign=launch-personal-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>

          <a href="https://app.netlify.com/sites/williamsisaac/deploys">
          <span className={styles.logo}>
            <img src="https://api.netlify.com/api/v1/badges/c12bf611-c574-4993-8548-3d7025746ec1/deploy-status" alt="Netlify Status"/>
          </span>
          </a>
      </footer>
    </div>
  )
}
