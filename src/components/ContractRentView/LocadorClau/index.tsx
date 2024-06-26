import { PersonInfo,OccupantInfo } from '@/context/interfaceContext';
import React, { useEffect } from 'react'
import {useRef } from "react";

interface LocadorViewInterface{
    descriptionForOwner: string;
    data: PersonInfo | OccupantInfo 
}

export default function index({descriptionForOwner, data}:LocadorViewInterface) {
  const nameView = useRef(null)
  const nacionalidadeView = useRef(null)
  const profissaoView = useRef(null)



  return (
    <div>
         <p><strong> {descriptionForOwner}: </strong> <span ref={nameView}>____________</span>, <span ref={nacionalidadeView}>____________</span>, <span ref={profissaoView}>____________</span>, Solteiro(a), Carteira de identidade (RG) nº ____________, expedida por ____________, C.P.F. nº ____________, residente na ____________, nº ____________, ____________, ____________/____________, CEP: ____________.</p>
    </div>
  )
}
