import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Mykyta Batrak | Front-end Developer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Привіт, я <a href="https://nextjs.org">Микита</a>
				</h1>

				<p className={styles.description}>
					Я дуже зацікавлений веб розробкою та програмуванням, з захопленням вивчаю фронт-енд та прагну стати
					професіоналом у цій галузі.
				</p>

				<div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h2>Про мене</h2>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h2>Портфоліо</h2>
					</a>

					<a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
						<h2>Контакти</h2>
					</a>
				</div>
			</main>
		</div>
	);
}
