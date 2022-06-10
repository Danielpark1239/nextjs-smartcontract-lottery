import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import ManualHeader from "../components/ManualHeader"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="A smart contract lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header / connect button / nav bar */}
            <ManualHeader />
            Text!
        </div>
    )
}
