import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import styles from '../formContract.module.scss'
import { InputComp } from '@/components/InputComp'
import { useState } from 'react';
import { OccupantInfo, PersonInfo } from '@/context/interfaceContext';

interface CpfToOwnerDTO{
    ownerInfo?:PersonInfo ;
    changeValue: 
     |((key: keyof PersonInfo, value: string | null) => void )
     |( (key: keyof OccupantInfo, value: OccupantInfo[keyof OccupantInfo]) => void)
    isOwner: boolean;
    occupantInfo?: OccupantInfo
}

export function CpfToOwnerOrOccupant({changeValue, ownerInfo, occupantInfo, isOwner}: CpfToOwnerDTO){
const [thirdDivValue, setThirdDivValue] = useState(false);
 return(
    <div>
    <div className={styles.session}> 
    {isOwner ? 'Qual o CPF e e-mail do proprietário(a)?': 'Qual o CPF e e-mail de quem vai alugar o imóvel?'}
    
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
                name={isOwner ? 'cpfToProperties': 'cpfOccupant' }
                placeholder="Ex: 000.000.000-00"
                setValue={changeValue}
            />
            <label htmlFor="email">E-mail: (opcional)</label>
            <InputComp
                name={isOwner ? 'emailToProperties': 'emailOccupant'}
                placeholder="Ex: email@teste.com"
                setValue={changeValue}
            />
        </div>
            
    </div>
 )
}