import styles from "./formContract.module.scss"
import { JetBrains_Mono } from 'next/font/google'
import '../../styles/global.scss';
import useContractRentContext from "@/hook/useContractRentContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import { SelectComp } from "../SelectComp";
import { optionsMaritalStatus, optionsOwner, optionsTypeDoc } from "../SelectComp/typeSelects";
import { InputComp } from "../InputComp";



export default function FormContract() {
    const {
        setName,
        setNationality,
        setOccupation,
        setTypeOwner,
        setNumDoc,
        setOrEmissor,
        setCpfToProperties,
        setEmailToProperties,
        typeOwner
    } = useContractRentContext();
    const [firstDivValue, setfirstDivValue] = useState(true)
    const [secondDivValue, setSecondDivValue] = useState(false)
    const [thirdDivValue, setThirdDivValue] = useState(false)
    
    function handleTypeOwnerChange(value: string){
        if(value !== 'cpf' &&   value !== 'cnpj' && value !== 'mei')
        return
        
        setTypeOwner(value)
    }

    return(
        <div className="main_container"> 
            <div>
                <div className={styles.session}> Quais são as informações do proprietário(a)?
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
                    <label htmlFor="owner"> O proprietario é:</label>
                    <SelectComp
                        option={optionsOwner}
                        selectedValue={typeOwner}
                        changeValue={handleTypeOwnerChange}
                        />
                    
                    {typeOwner === 'cpf' ? (
                        <>
                        <label htmlFor="fullName">O proprietário(a) é:</label>
                        <InputComp
                            name="fullName"
                            setValue={setName} />
                            <label htmlFor="nationality"> Nacionalidade:</label>
                            <InputComp
                            name="nationality"
                            setValue={setNationality} />
                            <label htmlFor="occupation">Profissão:</label>
                            <InputComp
                            name="occupation"
                            setValue={setOccupation} />
                        </>
                    ): typeOwner === 'cnpj' ? (
                        <>
                        <label htmlFor="companyName">Razão social:</label>
                        <InputComp
                         name="companyName"
                         setValue={setName} />
                        <label htmlFor="nameFantasy"> Nome Fantasia (opcional):</label>
                        <InputComp
                         name="nameFantasy"
                         setValue={setNationality} />
                        <label htmlFor="cnpj">CNPJ:</label>
                        <InputComp
                         name="cnpj"
                         setValue={setOccupation} />
                        </>
                    ) : (
                        <>
                        <label htmlFor="companyName">Nome empresarial:</label>
                        <InputComp
                         name="companyName"
                         setValue={setName} />
                        <label htmlFor="nameFantasy"> Nome fantasia (opcional):</label>
                        <InputComp
                         name="nameFantasy"
                         setValue={setNationality} />
                        <label htmlFor="nationality"> Nacionalidade:</label>
                        <InputComp
                         name="nationality"
                         setValue={setNationality} />
                        <label htmlFor="occupation">Profissão:</label>
                        <InputComp
                         name="occupation"
                         setValue={setOccupation} />
                        </>
                    )  }

                    
                </div>    

            </div>
            {/* parte2:formulario */}
            <div>
            <div className={styles.session}> Quais os documentos do proprietario(a)?
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
                        name="maritalStatus"
                        changeValue={()=>{return }}
                        option={optionsMaritalStatus}
                    />
                    <label htmlFor="typeDocument"> Selecione um documento de identidade</label>
                    <SelectComp
                        name="typeDocument"
                        changeValue={()=>{return }}
                        option={optionsTypeDoc}
                        
                    />
                    <label htmlFor=""> número do documento </label>
                    <InputComp
                        setValue={setNumDoc}
                        placeholder="Ex: 000000000"
                    />
                    <label htmlFor="ogEmissor">Orgão Emissor</label>
                    <InputComp
                        setValue={setOrEmissor}
                        placeholder="EX: SSP/SP"
                    />
                </div>
            </div>
            {/* terceira parte */}
            <div>
            <div className={styles.session}> Qual o CPF e e-mail do proprietário(a)?
                    <button className={styles.buttonSession} onClick={(e)=>{setThirdDivValue(!thirdDivValue)}}>
                        {
                            thirdDivValue?
                            <FaChevronDown color='#fff'/>
                            :
                            <FaChevronUp color='#fff'/>
                        }
                    </button>
                </div>
                <div className={thirdDivValue ? styles.containerForm : styles.containerFormOpen}>
                    <label htmlFor="cpf">CPF:</label>
                    <InputComp
                        name="cpf"
                        placeholder="Ex: 000.000.000-00"
                        setValue={setCpfToProperties}
                    />
                    <label htmlFor="email">E-mail: (opcional)</label>
                    <InputComp
                        name="email"
                        placeholder="Ex: email@teste.com"
                        setValue={setEmailToProperties}
                    />
                </div>

            </div>
        </div> 
    )
}