import { InputHTMLAttributes } from "react"
import { OccupantInfo, PersonInfo } from "@/context/interfaceContext"

interface InputCompProps  extends InputHTMLAttributes<HTMLInputElement>{
  setValue: 
  |((key: keyof PersonInfo, value: string | null) => void )
  |( (key: keyof OccupantInfo, value: OccupantInfo[keyof OccupantInfo]) => void)
}

export const InputComp: React.FC<InputCompProps> =({ setValue, ...rest }:InputCompProps)=>{
    function setNewValue(e:React.ChangeEvent<HTMLInputElement>){
      const key= e.target.name
      const value= e.target.value
      console.log(key, value)
    }
    return (
            <input {...rest} onBlur={(e)=> setNewValue(e)}/>
  )

}