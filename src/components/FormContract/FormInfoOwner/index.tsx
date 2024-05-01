import { InputComp } from "@/components/InputComp";
import { SelectComp } from "@/components/SelectComp"
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from '../formContract.module.scss'
import { OccupantInfo, PersonInfo } from "@/context/interfaceContext";
import { optionsOwner } from "@/components/SelectComp/typeSelects";

interface InfoOwnerFormDto{
    ownerInfo?:PersonInfo ;
    changeValue: 
     |((key: keyof PersonInfo, value: string | null) => void )
     |( (key: keyof OccupantInfo, value: OccupantInfo[keyof OccupantInfo]) => void)
    isOwner: boolean;
    occupantInfo?: OccupantInfo
}

export function InfoOwnerForm({ownerInfo, changeValue, isOwner,occupantInfo}:InfoOwnerFormDto){
 

    const [firstDivValue, setfirstDivValue] = useState(false);
    return(
        <div>
            
        <div className={styles.session}> 
        {isOwner ? 'Quais são as informações do proprietário(a)?':'Quais são as informações de quem vai alugar o imóvel?' }
        
            <button className={styles.buttonSession} onClick={(e)=>setfirstDivValue(!firstDivValue)}>
                {
                    firstDivValue?
                    <FaChevronDown color='#fff'/>
                    :
                    <FaChevronUp color='#fff'/>
                }
            </button>
        </div>

        <div className={`${firstDivValue ? styles.containerForm : styles.containerFormOpen}`}>
            <label htmlFor="owner">
                {isOwner ? '  O proprietario é:': 'O Inquilino(a) é'}
               </label>
            <SelectComp
                option={optionsOwner}               
                changeValue={changeValue}
                name={isOwner ? 'typeOwner': 'typeOccupant'}
                />
            
            {ownerInfo?.typeOwner  === 'cpf'  || occupantInfo?.typeOccupant === 'cpf' ? (
                <>
                <label htmlFor="fullName"> 
                    Nome completo
                </label>
                <InputComp
                    name={isOwner ? 'name' : 'nameOccupant' }
                    setValue={changeValue} />
                    <label htmlFor="nationality"> Nacionalidade:</label>
                    <InputComp
                    name={isOwner ? 'nationality' : 'nationalityOccupant'}
                    setValue={changeValue} />
                    <label htmlFor="occupation">Profissão:</label>
                    <InputComp
                    name={isOwner ? 'occupation' : 'occupationOccupant'}
                    setValue={changeValue} />
                </>
            ): ownerInfo?.typeOwner === 'cnpj' || occupantInfo?.typeOccupant === 'cnpj' ? (
                <>
                <label htmlFor="companyName">Razão social:</label>
                <InputComp
                 name="companyName"
                 setValue={changeValue} />
                <label htmlFor="nameFantasy"> Nome Fantasia (opcional):</label>
                <InputComp
                 name="nameFantasy"
                 setValue={changeValue} />
                <label htmlFor="cnpj">CNPJ:</label>
                <InputComp
                 name="cnpj"
                 setValue={changeValue} />
                </>
            ) : (
                <>
                <label htmlFor="companyName">Nome empresarial:</label>
                <InputComp
                 name="companyName"
                 setValue={changeValue} />
                <label htmlFor="nameFantasy"> Nome fantasia (opcional):</label>
                <InputComp
                 name="nameFantasy"
                 setValue={changeValue} />
                <label htmlFor="nationality"> Nacionalidade:</label>
                <InputComp
                 name="nationality"
                 setValue={changeValue} />
                <label htmlFor="occupation">Profissão:</label>
                <InputComp
                 name="occupation"
                 setValue={changeValue} />
                </>
            )  }

            
        </div>    

    </div>
    )
}