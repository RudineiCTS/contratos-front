
import { useEffect, useRef } from "react";
import { SpaceWhite } from "../spaceWhite";
import useContractRentContext from "@/hook/useContractRentContext";



function ContractTypeRentModel() {
   const {name,rg, city, profission, onChangeInputListening} = useContractRentContext()

   function useDynamicRefCallback(callback) {
      const ref = useRef(null);
    
      useEffect(() => {
        if (callback && typeof callback === 'function') {
          callback(ref.current);
        }
      }, [callback]);
    
      return ref;
    }

      const nameView = useDynamicRefCallback((currentRef) => {
        console.log(currentRef?.textContent);
         currentRef.textContent = name

      });

      const cityView = useDynamicRefCallback((currentRef) => {
         console.log(currentRef?.textContent);
          currentRef.textContent = city
 
       });
       const profissionView = useDynamicRefCallback((currentRef) => {
         console.log(currentRef?.textContent);
          currentRef.textContent = profission
 
       }); 
    
      const rgView = useDynamicRefCallback((currentRef) => {
        console.log(currentRef?.textContent);
         currentRef.textContent = rg
      });


    return (
       
         <div>
             <p><strong>CONTRATO DE LOCA&Ccedil;&Atilde;O DE IMOV&Eacute;L RESIDENCIAL</strong></p>
                 <SpaceWhite/>
             <p >IDENTIFICA&Ccedil;&Atilde;O DAS PARTES CONTRATANTES</p>
                <SpaceWhite/>
             <p >LOCADOR: <span ref={nameView}>____________</span>, <span ref={profissionView}>____________</span>, <span ref={cityView} >____________</span>, Solteiro(a), Carteira de identidade (RG) n&ordm; <span ref={rgView}>____________</span>, expedida por ____________, C.P.F. n&ordm; ____________, residente na ____________, n&ordm; ____________, ____________, ____________/____________, CEP: ____________.</p>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >LOCAT&Aacute;RIO: ____________, ____________, ____________, Solteiro(a), Carteira de identidade (RG) n&ordm; ____________, expedida por ____________, C.P.F. n&ordm; ____________, residente na ____________, n&ordm; ____________, ____________, ____________/____________, CEP: ____________.</p>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >As partes acima nomeadas acordam o presente Contrato de Loca&ccedil;&atilde;o Residencial, de acordo com as cl&aacute;usulas a seguir:</p>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >Cl&aacute;usula 1&ordf; - DO OBJETO DO CONTRATO</p>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >O OBJETO deste contrato &eacute; o im&oacute;vel de propriedade do LOCADOR, situado na ____________, n&ordm; ____________, ____________, ____________/____________, com as caracter&iacute;sticas a seguir:</p>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >____________</p>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >Im&oacute;vel isento de encargos ou quaisquer pend&ecirc;ncias financeiras.</p>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >Par&aacute;grafo &uacute;nico. O atual documento &eacute; complementado pelo laudo de vistoria que descreve meticulosamente o im&oacute;vel e sua condi&ccedil;&atilde;o de preserva&ccedil;&atilde;o, no instante de entrega ao LOCAT&Aacute;RIO.</p>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >Cl&aacute;usula 2&ordf; - DO PRAZO DE LOCA&Ccedil;&Atilde;O</p>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >Local e data de assinatura:</p>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >____________/____________, ____________ de ____________ de ____________</p>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >LOCADOR:</p>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >____________________________________</p>
             <p >____________</p>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >LOCAT&Aacute;RIO:</p>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >____________________________________</p>
             <p >____________</p>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >1&ordm; TESTEMUNHA:</p>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >____________________________________</p>
             <p >Nome: ____________</p>
             <p >CPF: ____________</p>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >2&ordm; TESTEMUNHA:</p>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
             <p >____________________________________</p>
             <p >Nome: ____________</p>
             <p >CPF: ____________</p>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
                <SpaceWhite/>
         </div>
 
 )
 }
 export default ContractTypeRentModel;