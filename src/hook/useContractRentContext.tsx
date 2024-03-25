import { ContractRentContext } from "@/context/contractRentContext";
import { useContext } from "react";

function useContractRentContext(){
    const context = useContext(ContractRentContext)

    if(context === undefined){
        throw new Error("não esta no contexto")
    }
    return context
}

export default useContractRentContext