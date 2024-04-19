import { ChangeEvent, ReactNode, createContext, useState } from "react";


interface ContractRentContextType {
    name: string;
    setName: (name: string) => void;
    nationality: string;
    setNationality: (city: string) => void;
    occupation:string;
    setOccupation: (occupation: string) => void;
    doc:string;
    setDoc: (rg: string) => void;
    onChangeInputListening: (event: ChangeEvent<HTMLSpanElement>) => void;
    typeOwner: "cpf" |"cnpj"|"mei"
    setTypeOwner: (typeOwner: "cpf" |"cnpj"|"mei") => void;
    numDoc:string,
    setNumDoc: (numDoc:string) => void;
    orEmissor: string;
    setOrEmissor: (orEmissor: string) => void;
    cpfToProperties:string
    setCpfToProperties: (cpfToProperties:string) => void;
    emailToProperties:string | null;
    setEmailToProperties: (emailToProperties:string) => void;
  }
  

export const ContractRentContext = createContext<ContractRentContextType | undefined>(undefined)

export function ContractRentProvider({ children }: { children: ReactNode }){
    const [name, setName]= useState('')
    const [nationality, setNationality]= useState('')
    const [occupation, setOccupation]= useState('')
    const [doc, setDoc]= useState('')
    const [typeOwner, setTypeOwner] = useState("cpf")
    const [numDoc, setNumDoc] = useState('');
    const [orEmissor, setOrEmissor] = useState('');
    const [cpfToProperties, setCpfToProperties] = useState('');
    const [emailToProperties, setEmailToProperties] = useState('');

    const onChangeInputListening = (event: ChangeEvent<HTMLSpanElement>)=> {
        return  event
      };

    return (
        <ContractRentContext.Provider value={
          {name, setName,nationality, setNationality, occupation, setOccupation, doc, setDoc, onChangeInputListening, typeOwner :'cpf', setTypeOwner, numDoc, setNumDoc,
         orEmissor, setOrEmissor, cpfToProperties, setCpfToProperties, setEmailToProperties, emailToProperties}
          }>
            {children}
        </ContractRentContext.Provider>
    )
}