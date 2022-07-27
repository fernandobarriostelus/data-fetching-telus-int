import styles from "../styles/Home.module.css";
export default function SSR({ data }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Server Side Rendering</h1>

        <p className={styles.description}>SSR</p>

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

export async function getServerSideProps(context) {
  console.log("llamada desde el servidor");
  const res = await fetch("http://localhost:3005/pokemon");
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
