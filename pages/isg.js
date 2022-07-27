import styles from "../styles/Home.module.css";
export default function SSR({ data }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Static Site Generation</h1>

        <p className={styles.description}>SSG</p>

        <div className={styles.grid}>
          {data.map((pokemon) => (
            <a key={pokemon.url} href={pokemon.url} className={styles.card}>
              <h2>{pokemon.name} &rarr;</h2>
              <p>Click para obtener información del pokemon.</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("llamada en la compilación");
  const res = await fetch("http://localhost:3005/pokemon");
  const data = await res.json();
  return {
    props: { data: data },
    revalidate: 20,
  };
}
