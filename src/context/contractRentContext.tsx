import { ChangeEvent, ReactNode, createContext, useState } from "react";


interface ContractRentContextType {
    name: string;
    setName: (name: string) => void;
    city: string;
    setCity: (city: string) => void;
    profission:string;
    setProfission: (profission: string) => void;
    rg:string;
    setRG: (rg: string) => void;
    onChangeInputListening: (event: ChangeEvent<HTMLSpanElement>) => void;
  }
  

export const ContractRentContext = createContext<ContractRentContextType | undefined>(undefined)

export function ContractRentProvider({ children }: { children: ReactNode }){
    const [name, setName]= useState('')
    const [city, setCity]= useState('')
    const [profission, setProfission]= useState('')
    const [rg, setRG]= useState('')

    const onChangeInputListening = (event: ChangeEvent<HTMLSpanElement>)=> {
        return  event
      };

    return (
        <ContractRentContext.Provider value={{name, setName,city, setCity, profission, setProfission, rg, setRG, onChangeInputListening}}>
            {children}
        </ContractRentContext.Provider>
    )
}