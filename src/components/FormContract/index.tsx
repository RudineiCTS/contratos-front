import styles from "./formContract.module.scss"
import { JetBrains_Mono } from 'next/font/google'
import '../../styles/global.scss';
import useContractRentContext from "@/hook/useContractRentContext";
import { FaChevronDown } from "react-icons/fa";

const jetMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-JetMono' 

})



export default function FormContract() {
    const {setName,setNationality,setOccupation,setTypeOwner} = useContractRentContext();

    function changeValue(e:any){
        e.preventDefault();
        console.log(e.target.value);
        if(e.target.value === 'cpf'|| 'cnpj' ||'mei')
        setTypeOwner(e.target.value)
    }

    function onHandleGetValue(e:any){
        e.preventDefault();
        
        switch (e.target.name) {
            case 'owner':
                console.log(e.target.value);
                setName(e.target.value);

            break;
            case 'fullName':
                console.log(e.target.value);
                setName(e.target.value);
            break;
            case 'nationality':
                console.log(e.target.name);
                setNationality(e.target.value);
            break;
            case 'occupation':
                console.log(e.target.name);
                setOccupation(e.target.value);
            break;

        }
       
    }
   
    return(
        <>
        <div className={styles.container} style={jetMono.style}>
            <div className={styles.session}> Quais são as informações do proprietário(a)?
            <button className={styles.buttonSession}>
                <FaChevronDown color='#fff'/>
            </button>
            </div>    
        <form action="" className={styles.containerForm}>
            <label htmlFor="owner"></label>
            <select name="owner" onChange={(e)=>changeValue(e)}>
                <option value="cpf" selected>Pessoa Física (CPF)</option>
                <option value="mei" >Microeemprendedor Individual (MEI)</option>
                <option value="cnpj">Pessoa Jurídica (CNPJ)</option>
            </select>

            <label htmlFor="fullName">O proprietário(a) é:</label>
            <input type="text" name="fullName" onBlur={(e)=> onHandleGetValue(e)}/>
            
            <label htmlFor="nationality"> Nacionalidade:</label>
            <input type="text" name="nationality" onBlur={(e)=> onHandleGetValue(e)} />

            <label htmlFor="occupation">Profissão:</label>
            <input type="text" name="occupation" onBlur={(e)=> onHandleGetValue(e)}/>

        </form>
        </div>
        </>
    )
}