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
import { PersonInfo } from "@/context/interfaceContext";



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
    const [firstDivValue, setfirstDivValue] = useState(true);
    const [secondDivValue, setSecondDivValue] = useState(false);
    const [thirdDivValue, setThirdDivValue] = useState(false);
    const [fourthDivValue, setFourthDivValue] = useState(false);
    const [fifthDivValue, setFifthDivValue] = useState(false);
    const [sixthDivValue, setSixthDivValue] = useState(false);
    const [seventhDivValue, setSeventhDivValue] = useState(false);
    const [eighthDivValue, setEighthDivValue] = useState(false);
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

    function handleSetNewValueState(e){
        console.log(e)
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
                        selectedValue={ownerInfo.typeOwner}
                        changeValue={handleSetNewValueState}
                        onClick={(e)=> handleSetNewValueState(e)}
                        value={ownerInfo.typeOwner}
                        />
                    
                    {ownerInfo.typeOwner === 'cpf' ? (
                        <>
                        <label htmlFor="fullName">O proprietário(a) é:</label>
                        <InputComp
                            name="fullName"
                            setValue={()=>{return}} />
                            <label htmlFor="nationality"> Nacionalidade:</label>
                            <InputComp
                            name="nationality"
                            setValue={()=>{return}} />
                            <label htmlFor="occupation">Profissão:</label>
                            <InputComp
                            name="occupation"
                            setValue={()=>{return}} />
                        </>
                    ): ownerInfo.typeOwner === 'cnpj' ? (
                        <>
                        <label htmlFor="companyName">Razão social:</label>
                        <InputComp
                         name="companyName"
                         setValue={()=>{return}} />
                        <label htmlFor="nameFantasy"> Nome Fantasia (opcional):</label>
                        <InputComp
                         name="nameFantasy"
                         setValue={()=>{return}} />
                        <label htmlFor="cnpj">CNPJ:</label>
                        <InputComp
                         name="cnpj"
                         setValue={()=>{return}} />
                        </>
                    ) : (
                        <>
                        <label htmlFor="companyName">Nome empresarial:</label>
                        <InputComp
                         name="companyName"
                         setValue={()=>{return}} />
                        <label htmlFor="nameFantasy"> Nome fantasia (opcional):</label>
                        <InputComp
                         name="nameFantasy"
                         setValue={()=>{return}} />
                        <label htmlFor="nationality"> Nacionalidade:</label>
                        <InputComp
                         name="nationality"
                         setValue={()=>{return}} />
                        <label htmlFor="occupation">Profissão:</label>
                        <InputComp
                         name="occupation"
                         setValue={()=>{return}} />
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
                        setValue={()=>{return}}
                        placeholder="Ex: 000000000"
                    />
                    <label htmlFor="ogEmissor">Orgão Emissor</label>
                    <InputComp
                        setValue={()=>{return}}
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
                        setValue={()=>{return}}
                    />
                    <label htmlFor="email">E-mail: (opcional)</label>
                    <InputComp
                        name="email"
                        placeholder="Ex: email@teste.com"
                        setValue={()=>{return}}
                    />
                </div>
                    
            </div>
            {/* quarta parte */}
            <div>
                <div className={styles.session}> Qual endereço do proprietário(a)? 
                    <button className={styles.buttonSession} onClick={(e)=>{setFourthDivValue(!fourthDivValue)}}>
                        {
                            fourthDivValue?
                            <FaChevronDown color='#fff'/>
                            :
                            <FaChevronUp color='#fff'/>
                        }
                    </button>
                </div>
                <div className={fourthDivValue ? styles.containerForm : styles.containerFormOpen}>
                    <label htmlFor="cep"> CEP:</label>
                    <div className={styles.containerButtonAndInput}>

                        <InputComp
                            setValue={()=>{return}}
                            placeholder="00000-000"
                            defaultValue={ownerInfo.cep}
                            />
                        <button onClick={(e)=>hanldeAddressWithApi(e)}>Buscar</button>
                    </div>
                    <label htmlFor="">Rua:</label>
                    <InputComp
                        setValue={()=>{return}}
                        placeholder="Ex: Rua Coronel de lalonge"
                        defaultValue={ownerInfo.street}
                    />
                    <div className={styles.containerTwoInput}>
                        <div>                        
                            <label htmlFor="">Número</label>
                                <InputComp
                                setValue={()=>{return}}
                                placeholder="Ex: 123"
                                defaultValue={ownerInfo.numberHouse}
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
                        defaultValue={ownerInfo.neighborhood}
                    />
                    <div className={styles.containerTwoInputCity}>
                        <div className={styles.contentCity}>
                            <label htmlFor="">Cidade:</label>
                            <InputComp
                                setValue={()=>{return}}
                                placeholder="Ex: São Paulo"
                                defaultValue={ownerInfo.city}
                            />
                        </div>
                        <div >
                            <label htmlFor="uf">UF</label>
                            <InputComp
                            setValue={()=>{return}}
                            placeholder="SP"
                            defaultValue={ownerInfo.uf}
                            />
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* quinta parte */}
            <div>
                <div className={styles.session}> Quais são as informações de quem vai alugar o imóvel?
                    <button className={styles.buttonSession} onClick={(e)=>{setFifthDivValue(!fifthDivValue)}}>
                        {
                            fifthDivValue?
                            <FaChevronDown color='#fff'/>
                            :
                            <FaChevronUp color='#fff'/>
                        }
                    </button>
                </div>
                <div className={fifthDivValue ? styles.containerForm : styles.containerFormOpen}>
                    <label htmlFor="occupant">O inquilino é:</label>
                    <SelectComp
                        option={optionsOwner}
                        changeValue={()=>{return}}
                        selectedValue={occupantInfo.typeOccupant}

                    />
                    <label htmlFor="nameOccupant">Nome completo: </label>
                    <InputComp
                        setValue={()=>{return}}
                        placeholder="Ex: Jhon doe"
                    />
                    <label htmlFor="nacionalityOccupant">Nacionalidade:</label>
                    <InputComp
                        setValue={()=>{return}}
                        placeholder="Ex: Brasileiro"
                    />
                    <label htmlFor="OccupationOccupant">Profissão:</label>
                    <InputComp
                        setValue={()=>{return}}
                        placeholder="Ex: Gerente, Mecanico"
                    />
                </div>
            </div> 
            {/* sexta parte */}
            <div>
            <div className={styles.session}> Quais os documentos de quem vai alugar o imóvel?
                    <button className={styles.buttonSession} onClick={(e)=>{setSixthDivValue(!sixthDivValue)}}>
                        {
                            secondDivValue?
                            <FaChevronDown color='#fff'/>
                            :
                            <FaChevronUp color='#fff'/>
                        }
                    </button>
                </div>
                <div className={`${sixthDivValue ? styles.containerForm : styles.containerFormOpen}`}>
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
                        setValue={()=>{return}}
                        placeholder="Ex: 000000000"
                    />
                    <label htmlFor="ogEmissor">Orgão Emissor</label>
                    <InputComp
                        setValue={()=>{return}}
                        placeholder="EX: SSP/SP"
                    />
                </div>
            </div>
            {/* setima parte */}
            <div>
            <div className={styles.session}> Qual o CPF e e-mail de quem vai alugar o imóvel?
                    <button className={styles.buttonSession} onClick={(e)=>{setSeventhDivValue(!seventhDivValue)}}>
                        {
                            thirdDivValue?
                            <FaChevronDown color='#fff'/>
                            :
                            <FaChevronUp color='#fff'/>
                        }
                    </button>
                </div>
                <div className={seventhDivValue ? styles.containerForm : styles.containerFormOpen}>
                    <label htmlFor="cpf">CPF:</label>
                    <InputComp
                        name="cpf"
                        placeholder="Ex: 000.000.000-00"
                        setValue={()=>{return}}
                    />
                    <label htmlFor="email">E-mail: (opcional)</label>
                    <InputComp
                        name="email"
                        placeholder="Ex: email@teste.com"
                        setValue={()=>{return}}
                    />
                </div>
                    
            </div>
            {/* oitava parte */}
            <div>
                <div className={styles.session}> Qual endereço de quem vai alugar o imóvel?
                    <button className={styles.buttonSession} onClick={(e)=>{setEighthDivValue(!eighthDivValue)}}>
                        {
                            fourthDivValue?
                            <FaChevronDown color='#fff'/>
                            :
                            <FaChevronUp color='#fff'/>
                        }
                    </button>
                </div>
                <div className={eighthDivValue ? styles.containerForm : styles.containerFormOpen}>
                    <label htmlFor="cep"> CEP:</label>
                    <div className={styles.containerButtonAndInput}>

                        <InputComp
                            setValue={()=>{return}}
                            placeholder="00000-000"
                            defaultValue={occupantInfo.cepOccupant}
                            />
                        <button onClick={(e)=>hanldeAddressWithApi(e)}>Buscar</button>
                    </div>
                    <label htmlFor="">Rua:</label>
                    <InputComp
                        setValue={()=>{return}}
                        placeholder="Ex: Rua Coronel de lalonge"
                        defaultValue={occupantInfo.streetOccupant}
                    />
                    <div className={styles.containerTwoInput}>
                        <div>                        
                            <label htmlFor="">Número</label>
                                <InputComp
                                setValue={()=>{return}}
                                placeholder="Ex: 123"
                                defaultValue={occupantInfo.numberHouseOccupant}
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
                        defaultValue={occupantInfo.neighborhoodOccupant}
                    />
                    <div className={styles.containerTwoInputCity}>
                        <div className={styles.contentCity}>
                            <label htmlFor="">Cidade:</label>
                            <InputComp
                                setValue={()=>{return}}
                                placeholder="Ex: São Paulo"
                                defaultValue={occupantInfo.cityOccupant}
                            />
                        </div>
                        <div >
                            <label htmlFor="uf">UF</label>
                            <InputComp
                            setValue={()=>{return}}
                            placeholder="SP"
                            defaultValue={occupantInfo.ufOccupant}
                            />
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* nona parte */}
            <div>
                <div className={styles.session}>Qual endereço do imóvel que está sendo alugado?
                    <button className={styles.buttonSession} onClick={(e)=>{setNinthDivValue(!ninthDivValue)}}>
                        {
                            fourthDivValue?
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
                            fourthDivValue?
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