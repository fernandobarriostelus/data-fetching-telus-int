import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function CSR() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3005/pokemon")
      .then((res) => res.json())
      .then((data) => {
        console.log("llamada desde el cliente");
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <div>Cargando...</div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Client Side Rendering</h1>

        <p className={styles.description}>CSR</p>

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
