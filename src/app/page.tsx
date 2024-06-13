
'use client'
import {useRouter} from 'next/navigation'
import style from "./page.module.scss";
import ContractCreator from '@/pages/contractCreator';
export default function Home() {
  const router = useRouter();
  return (
    <>
      <ContractCreator/>
    </>
  )
}
