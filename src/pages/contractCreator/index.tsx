import { ContractRentProvider } from "@/context/contractRentContext";
import ContractTypeRentModel from "@/components/ContractRentView";
import FormContract from "@/components/FormContract";

import styles from './contractCreator.module.scss'
import { useEffect, useRef } from "react";
import useContractRentContext from "@/hook/useContractRentContext";


function ContractCreator(){
    const nameView = useRef()
    const rgView = useRef()
    
    useEffect(() =>{},[])


    return(
        <ContractRentProvider>
            <div className={styles.container}>
                <FormContract/>
                <ContractTypeRentModel/>
            </div>
        </ContractRentProvider>
    )
}

export default ContractCreator