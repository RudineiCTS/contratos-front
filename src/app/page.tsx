
'use client'
import Link from "next/link";
import {useRouter} from 'next/navigation'
import style from "./page.module.scss";
export default function Home() {
  const router = useRouter();
  return (
    <>
    <div className={style.container}>

    <main className={style.containerMain} >
        <h1>Bem vindo! <br />
        ao PRCONTRATOS
        </h1>
      <p>Olá! Bem-vindo à nossa plataforma. Nossa ferramenta oferece praticidade e eficiência na criação 
      dos seus contratos, proporcionando uma experiência simplificada e ágil.</p>
    </main>

    <section className={style.containerButton}>
      <button onClick={()=> router.push('/contractCreator') }>começar</button>
    </section>
    </div>
    </>
  )
}
