import { InputComp } from "@/components/InputComp"
import { OccupantInfo, PersonInfo } from "@/context/interfaceContext"
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import styles from '../formContract.module.scss'

interface AddressDTO{
    ownerInfo?:PersonInfo ;
    occupantInfo?: OccupantInfo
    changeValue: 
     |((key: keyof PersonInfo, value: string | null) => void )
     |( (key: keyof OccupantInfo, value: OccupantInfo[keyof OccupantInfo]) => void)
    isOwner: boolean;
    changeValueWithApi:(e:any)=>void
}

export function Address({changeValue, ownerInfo,occupantInfo, changeValueWithApi, isOwner}:AddressDTO){
    const [fourthDivValue, setFourthDivValue] = useState(false);
    return (
        <div>
        <div className={styles.session}> 
        {isOwner ? 'Qual endereço do proprietário(a)?' : 'Qual endereço de quem vai alugar o imóvel?'}
        
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
                    setValue={changeValue}
                    placeholder="00000-000"
                    defaultValue={isOwner ? 
                        ownerInfo?.cep : 
                        occupantInfo?.cepOccupant
                    }
                    name="cep"
                    />
                <button onClick={(e)=>changeValueWithApi(e)}>Buscar</button>
            </div>
            <label htmlFor="">Rua:</label>
            <InputComp
                setValue={changeValue}
                placeholder="Ex: Rua Coronel de lalonge"
                defaultValue={isOwner ? 
                    ownerInfo?.street : 
                    occupantInfo?.streetOccupant
                }
                name="street"
            />
            <div className={styles.containerTwoInput}>
                <div>                        
                    <label htmlFor="">Número</label>
                        <InputComp
                        setValue={changeValue}
                        placeholder="Ex: 123"
                        defaultValue={
                            isOwner ? 
                            ownerInfo?.numberHouse : 
                            occupantInfo?.numberHouseOccupant
                        }
                        name="numberHouse"
                        />
                </div>
                <div   className={styles.contentComplemente}>
                    <label htmlFor="">Complemento</label>
                    <InputComp
                        setValue={changeValue}
                        placeholder="Ex: Apto 123"

                        />

                </div>

            </div>
            <label htmlFor="">Bairro:</label>
            <InputComp
                setValue={changeValue}
                placeholder="Ex: Centro"
                defaultValue={isOwner ? 
                    ownerInfo?.neighborhood : 
                    occupantInfo?.neighborhoodOccupant
                }
                name="neighborhood"
            />
            <div className={styles.containerTwoInputCity}>
                <div className={styles.contentCity}>
                    <label htmlFor="">Cidade:</label>
                    <InputComp
                        setValue={changeValue}
                        placeholder="Ex: São Paulo"
                        defaultValue={isOwner ? 
                            ownerInfo?.city :
                            occupantInfo?.cityOccupant
                         }
                        name="city"
                    />
                </div>
                <div >
                    <label htmlFor="uf">UF</label>
                    <InputComp
                    setValue={changeValue}
                    placeholder="SP"
                    defaultValue={isOwner ? 
                        ownerInfo?.uf :
                        occupantInfo?.ufOccupant}
                    name="uf"
                    />
                </div>
               
            </div>
        </div>
    </div>
    )
}