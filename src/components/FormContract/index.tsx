import styles from "./formContract.module.scss"
import { JetBrains_Mono } from 'next/font/google'
import '../../styles/global.scss';
import useContractRentContext from "@/hook/useContractRentContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { SelectComp } from "../SelectComp";
import { optionsMaritalStatus, optionsOwner, optionsTypeDoc } from "../SelectComp/typeSelects";
import { InputComp } from "../InputComp";
import { takeAddressForCep } from "@/services/api-correio";
import removeMask from "@/utils/removeMask";
import { OccupantInfo, PersonInfo } from "@/context/interfaceContext";

import { InfoOwnerForm } from "./FormInfoOwner";
import { DocumentOwnerForm } from "./FormDocumentOwner";
import { CpfToOwnerOrOccupant } from "./FormCpfToOwner";
import { Address } from "./AddressForm";



export default function FormContract() {
    const {
     occupantInfo,
     description,
     setDescription,
     ownerInfo,
     setOwnerInfo,
     setOccupantInfo,
     imovelInfo,
     setImovelInfo
    } = useContractRentContext();
  
    const [ninthDivValue, setNinthDivValue] = useState(false);
    const [tenthDivValue, setTenthDivValue] = useState(false);


    function hanldeAddressWithApi(e:any){
        e.preventDefault();
        takeAddressForCep(ownerInfo.cep).then(res=> 
            {
                if(!res){
                    return
                }
                const newOwerInfoAddres: PersonInfo = {
                    ...ownerInfo,
                    street: res.logradouro,                 
                    neighborhood: res.bairro,
                    city: res.localidade,
                    uf: res.uf
                }

                setOwnerInfo(newOwerInfoAddres);
            })

    }

    function handleAddressOccupantWithApi(e:any){
        
            e.preventDefault();
            takeAddressForCep(occupantInfo.cepOccupant).then(res=> 
                {
                    if(!res){
                        return
                    }
                    const newOwerInfoAddres: OccupantInfo = {
                        ...occupantInfo,
                        streetOccupant: res.logradouro,                 
                        neighborhoodOccupant: res.bairro,
                        cityOccupant: res.localidade,
                        ufOccupant: res.uf
                    }
    
                    setOccupantInfo(newOwerInfoAddres);
                })
    
    }

    function handleSetNewValueState(key: keyof PersonInfo, value: PersonInfo[keyof PersonInfo]) {
        const obj: PersonInfo ={
            ...ownerInfo,
             [key]: value
        }
        console.log(obj);
        setOwnerInfo(obj);
        // console.log(ownerInfo.typeOwner);
    }
    function handleSetNewValueStateOccupant(key: keyof OccupantInfo, value:OccupantInfo[keyof OccupantInfo]) {
        const obj :OccupantInfo = {
            ...occupantInfo,
             [key]: value
        }
        console.log(obj)
        setOccupantInfo(obj);
    }
    return(
        <div className="main_container"> 
           <InfoOwnerForm
            changeValue={handleSetNewValueState}
            ownerInfo = {ownerInfo}
            isOwner={true}
           />
            {/* parte2:formulario */}
            <DocumentOwnerForm
                 changeValue={handleSetNewValueState}
                 ownerInfo = {ownerInfo}
                 isOwner={true}
            />
            {/* terceira parte */}
            <CpfToOwnerOrOccupant
                changeValue={handleSetNewValueState}
                ownerInfo={ownerInfo}
                isOwner={true}
            />
            {/* quarta parte */}
            <Address
                changeValue={handleSetNewValueState}
                ownerInfo={ownerInfo}
                changeValueWithApi={hanldeAddressWithApi}
                isOwner={true}
            />
            {/* quinta parte */}
          <InfoOwnerForm
               changeValue={handleSetNewValueStateOccupant}
               occupantInfo = {occupantInfo}
               isOwner={false}
          />
            {/* sexta parte */}
            <DocumentOwnerForm
                changeValue={handleSetNewValueStateOccupant}
                isOwner={false}
                occupantInfo={occupantInfo}

            />
            {/* setima parte */}
           <CpfToOwnerOrOccupant
                 changeValue={handleSetNewValueStateOccupant}
                 isOwner={false}
                 occupantInfo={occupantInfo}
           />
            {/* oitava parte */}
            <Address
                changeValue={handleSetNewValueStateOccupant}
                changeValueWithApi={handleAddressOccupantWithApi}
                isOwner={false}

            />
            {/* nona parte */}
            <div>
                <div className={styles.session}>Qual endereço do imóvel que está sendo alugado?
                    <button className={styles.buttonSession} onClick={(e)=>{setNinthDivValue(!ninthDivValue)}}>
                        {
                            ninthDivValue?
                            <FaChevronDown color='#fff'/>
                            :
                            <FaChevronUp color='#fff'/>
                        }
                    </button>
                </div>
                <div className={ninthDivValue ? styles.containerForm : styles.containerFormOpen}>
                    <label htmlFor="cep"> CEP:</label>
                    <div className={styles.containerButtonAndInput}>

                        <InputComp
                            setValue={()=>{return}}
                            placeholder="00000-000"
                            defaultValue={imovelInfo.cep}
                            />
                        <button onClick={(e)=>hanldeAddressWithApi(e)}>Buscar</button>
                    </div>
                    <label htmlFor="">Rua:</label>
                    <InputComp
                        setValue={()=>{return}}
                        placeholder="Ex: Rua Coronel de lalonge"
                        defaultValue={imovelInfo.street}
                    />
                    <div className={styles.containerTwoInput}>
                        <div>                        
                            <label htmlFor="">Número</label>
                                <InputComp
                                setValue={()=>{return}}
                                placeholder="Ex: 123"
                                defaultValue={imovelInfo.numberHouse}
                                />
                        </div>
                        <div   className={styles.contentComplemente}>
                            <label htmlFor="">Complemento</label>
                            <InputComp
                                setValue={()=>{return}}
                                placeholder="Ex: Apto 123"

                                />

                        </div>

                    </div>
                    <label htmlFor="">Bairro:</label>
                    <InputComp
                        setValue={()=>{return}}
                        placeholder="Ex: Centro"
                        defaultValue={imovelInfo.neighborhood}
                    />
                    <div className={styles.containerTwoInputCity}>
                        <div className={styles.contentCity}>
                            <label htmlFor="">Cidade:</label>
                            <InputComp
                                setValue={()=>{return}}
                                placeholder="Ex: São Paulo"
                                defaultValue={imovelInfo.city}
                            />
                        </div>
                        <div >
                            <label htmlFor="uf">UF</label>
                            <InputComp
                            setValue={()=>{return}}
                            placeholder="SP"
                            defaultValue={imovelInfo.uf}
                            />
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* décima parte */}
            <div>
                <div className={styles.session}>Detalhes do imóvel que está sendo alugado
                    <button className={styles.buttonSession} onClick={(e)=>{setTenthDivValue(!tenthDivValue)}}>
                        {
                            tenthDivValue?
                            <FaChevronDown color='#fff'/>
                            :
                            <FaChevronUp color='#fff'/>
                        }
                    </button>
                </div>
                <div className={tenthDivValue ? styles.containerForm : styles.containerFormOpen}>
                    <label htmlFor="description"> Descrição do imóvel (tamanho, cômodos etc.):</label>
                    <div>
                        <textarea  />
                    </div>
            </div>
        </div>
        </div>
    )
}