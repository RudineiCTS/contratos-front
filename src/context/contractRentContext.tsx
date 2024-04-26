import {ReactNode, createContext, useState } from "react";
import { ContractRentContextType, ImovelInfo, OccupantInfo, PersonInfo } from "./interfaceContext";




export const ContractRentContext = createContext<ContractRentContextType | undefined>(undefined)

export function ContractRentProvider({ children }: { children: ReactNode }){
  const [ownerInfo, setOwnerInfo] = useState<PersonInfo>({} as PersonInfo);
  const [occupantInfo, setOccupantInfo] = useState<OccupantInfo>({} as OccupantInfo);
  const [imovelInfo, setImovelInfo] = useState<ImovelInfo>({} as ImovelInfo);
  const [description, setDescription]=useState('')

    return (
      <ContractRentContext.Provider
      value={{
        ownerInfo,
        setOwnerInfo,
        occupantInfo,
        setOccupantInfo,
        setDescription,
        description,
        imovelInfo,
        setImovelInfo,
      }}
    >
            {children}
        </ContractRentContext.Provider>
    )
}