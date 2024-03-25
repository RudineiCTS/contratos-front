import styles from "./formContract.module.scss"
import { JetBrains_Mono } from 'next/font/google'
import '../../styles/global.scss';
import useContractRentContext from "@/hook/useContractRentContext";

const jetMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-JetMono' 

})



export default function FormContract() {
    const {setName,setCity,setProfission,setRG, onChangeInputListening} = useContractRentContext();

    function onHandleGetValue(e){
        e.preventDefault();
        
        switch (e.target.name) {
            case 'proprietario':
                console.log(e.target.name);
                setName(e.target.value);
            break;
            case 'fullName':
                console.log(e.target.name);
                setCity(e.target.value);
            break;
            case 'nacionality':
                console.log(e.target.name);
                setProfission(e.target.value);
            break;
            case 'rg':
                console.log(e.target.name);
                setRG(e.target.value);
            break;

        }
       
    }
   
    return(
        <>
        <div className={styles.container} style={jetMono.style}>    
        <form action="" className={styles.containerForm}>
            <label htmlFor="proprietario">O proprietário(a) é:</label>
            <input type="text" name="proprietario" onBlur={(e)=> onHandleGetValue(e)}/>
            
            <label htmlFor="fullName"> Nacionalidade:</label>
            <input type="text" name="fullName" onBlur={(e)=> onHandleGetValue(e)} />

            <label htmlFor="nacionality">Profissão:</label>
            <input type="text" name="nacionality" onBlur={(e)=> onHandleGetValue(e)}/>

            <label htmlFor="professional">RG:</label>
            <input type="text" name="rg"onBlur={(e)=> onHandleGetValue(e)}/>
        </form>
        </div>
        </>
    )
}