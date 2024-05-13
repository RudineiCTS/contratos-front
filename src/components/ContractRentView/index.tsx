import styles from "./contractRenView.module.scss"
import { useEffect, useRef, MutableRefObject } from "react";
import useContractRentContext from "@/hook/useContractRentContext";

import LocadorView from './LocadorClau';
import ClausulaOne from './ObjContratoClau'
import ClausulaTwo from './PrzLocacaoClau'
import ClausulaThre from './FinImovelClau'
import ClausulaFor from './ValoresImpoClau'
import ClausulaFive from './GarantiaClau'
import ClausulaSix from './DeveresLocadorClau'
import ClausulaSeven from './DeveresLocatarioClau'
import ClausulaEight from './MelhoriasContruClau'
import ClausulaNine from './DireitoPrefeClau'
import ClausulaTen from './MultaClau'
import ClausulaEleven from './RecisaoClau'
import ClausulaTwoes from './ForoClau'

function ContractTypeRentModel() {
   const {ownerInfo} = useContractRentContext()

   // function useDynamicRefCallback(callback:unknown) {
   //    const ref = useRef(null);
    
   //    useEffect(() => {
   //      if (callback && typeof callback === 'function') {
   //        callback(ref.current);
   //      }
   //    }, [callback]);
    
   //    return ref;
   //  }

   //     const nameView = useDynamicRefCallback((currentRef) => {
   //      console.log(currentRef?.textContent);
   //       if(currentRef.textContent ===''){
   //          '_________________'
   //       }

   //       currentRef.textContent = name

   //    });



    return (
         <div className={styles.containerMain}>
            <div className={styles.titleContent}>
               <p><strong>CONTRATO DE LOCAÇÃO DE IMOVÉL RESIDENCIAL</strong></p>
            </div>
            <br/>
            <br />
             <strong >IDENTIFICAÇÃO DAS PARTES CONTRATANTES</strong>
             <br />
             <br />
            <LocadorView 
               descriptionForOwner='LOCADOR'
               data={ownerInfo}
            />
                <br/>
                <br/>
                <br/>

             <LocadorView 
                  descriptionForOwner="LOCATÁRIO"

             />
                <br/>
                <br/>
                <br/>
             <p >As partes acima nomeadas acordam o presente <span className={styles.strongExeption}> Contrato de Locação Residencial</span> , de acordo com as cláusulas a seguir:</p>
                <br/>
                <br/>
                <br/>
             <ClausulaOne/>
                <br/>
                <br/>
                <br/>
            <ClausulaTwo/>
                <br/>
                <br/>
                <br/>
            <ClausulaThre/> 
                <br/>
                <br/>
                <br/>
            <ClausulaFor/>
                <br/>
                <br/>
            <ClausulaFive/>
                <br/>
                <br/>
                <br/>
            <ClausulaSix/>
                <br />
                <br />
                <br />
            <ClausulaSeven/>
                <br />
                <br />
            <ClausulaEight/>
                <br />
                <br />
                <br />
            <ClausulaNine/>
                <br />
                <br />
                <br />

               <ClausulaTen/>
                <br />
                <br />
                <br />
                <ClausulaEleven/>
                <br />
                <br />
                <br />
                <ClausulaTwoes/>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className={styles.dateContainer}>
                  <p>Local e data de assinatura:</p>
                  <br />
                </div>
                <div>
                  <p>____________/____________, ____________ de ____________ de ____________</p>
                  <br />
                </div>
                <br />
                <br />
                <br />
                <br />
                {/* assinatura locador */}
                <div className={styles.sigInContainer}>
                  <div>

                     <strong>LOCADOR:</strong>
                     <br />
                  </div>
                <br />
                <br />
                  <div>
                     <p>________________________________________________</p>
                     <br />
                  </div>
               </div>
                {/* assinatura locatario */}
                <div className={styles.sigInContainer}>
                  <div>

                     <strong>LOCATÁRIO:</strong>
                  <br />
                </div>
                <br />
                <br />
                  <div>
                     <p>________________________________________________</p>
                     <br />
                  </div>
               </div>
               {/* testemunha 1 */}
               <div className={styles.testemunhaContainer}> 
               <div>
                  <strong>1º TESTEMUNHA:</strong>
                  <br />
               </div>
               <br />
               <br />
               <div>
                  <p>____________________________________</p>
                  <br />
               </div>
               <div>
                  <p>Nome: ____________</p>
                  <br />
               </div>
               <div>
                  <p>CPF: ____________</p>
                  <br />
               </div>
               </div>
                {/* testemunha 2 */}
                <div className={styles.testemunhaContainer}> 
               <div>
                  <strong>2º TESTEMUNHA:</strong>
                  <br />
               </div>
               <br />
               <br />
               <div>
                  <p>____________________________________</p>
                  <br />
               </div>
               <div>
                  <p>Nome: ____________</p>
                  <br />
               </div>
               <div>
                  <p>CPF: ____________</p>
                  <br />
               </div>
               </div>
         </div>
 
 )
 }
 export default ContractTypeRentModel;