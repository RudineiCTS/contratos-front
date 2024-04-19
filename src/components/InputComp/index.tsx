import { InputHTMLAttributes } from "react"
import styles from './inputComp.module.scss'

interface InputCompProps  extends InputHTMLAttributes<HTMLInputElement>{
    setValue:(e:any)=>void;
}

export const InputComp: React.FC<InputCompProps> =({ setValue, ...rest }:InputCompProps)=>{
    return (
            <input {...rest} onBlur={(e)=> setValue(e.target.value)}/>
  )

}