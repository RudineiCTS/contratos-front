import { SelectComp } from "@/components/SelectComp"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from '../formContract.module.scss'
import { useState } from "react";
import { optionsMaritalStatus, optionsTypeDoc } from "@/components/SelectComp/typeSelects";
import { InputComp } from "@/components/InputComp";
import { OccupantInfo, PersonInfo } from "@/context/interfaceContext";

interface DocumentoOwnerFormDTO{
    changeValue: 
     |((key: keyof PersonInfo, value: string | null) => void )
     |( (key: keyof OccupantInfo, value: OccupantInfo[keyof OccupantInfo]) => void)
    ownerInfo?: PersonInfo
    occupantInfo?: OccupantInfo
    isOwner:boolean
}
export function DocumentOwnerForm({changeValue, ownerInfo, isOwner,occupantInfo}:DocumentoOwnerFormDTO){
    const [secondDivValue, setSecondDivValue] = useState(false);
    return (
        <div>
            <div className={styles.session}> 
            {isOwner ? ' Quais os documentos do proprietario(a)?' : 'Quais os documentos de quem vai alugar o imóvel?'}
           
                    <button className={styles.buttonSession} onClick={(e)=>{setSecondDivValue(!secondDivValue)}}>
                        {
                            secondDivValue?
                            <FaChevronDown color='#fff'/>
                            :
                            <FaChevronUp color='#fff'/>
                        }
                    </button>
                </div>
                <div className={`${secondDivValue ? styles.containerForm : styles.containerFormOpen}`}>
                    <label htmlFor="maritalStatus">Estado civil</label>
                    <SelectComp
                        name={isOwner ? 'maritalStatus': 'occupantMaritalStatus'}
                        changeValue={changeValue}
                        option={optionsMaritalStatus}
                    />
                    <label htmlFor="typeDocument"> Selecione um documento de identidade</label>
                    <SelectComp
                        name={isOwner ? 'typeDocument': 'typeDocumentOccupant'}
                        changeValue={changeValue}
                        option={optionsTypeDoc}
                        
                    />
                    <label htmlFor=""> número do documento </label>
                    <InputComp
                        setValue={changeValue}
                        placeholder="Ex: 000000000"
                        name={isOwner ? 'numDoc': 'numDocOccupant'}
                    />
                    <label htmlFor="ogEmissor">Orgão Emissor</label>
                    <InputComp
                        setValue={changeValue}
                        placeholder="EX: SSP/SP"
                        name={isOwner?'orEmissor':'orEmissorOccupant'}
                    />
                </div>
            </div>
    )
}