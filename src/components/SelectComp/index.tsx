import { OccupantInfo, PersonInfo } from '@/context/interfaceContext'
import React, { Dispatch, OptionHTMLAttributes, SelectHTMLAttributes, SetStateAction } from 'react'


interface SelectCompProps extends SelectHTMLAttributes<HTMLSelectElement>{
    changeValue: 
    |((key: keyof PersonInfo, value: string | null) => void )
    |( (key: keyof OccupantInfo, value: OccupantInfo[keyof OccupantInfo]) => void)
    selectedValue?: string
    option?: OptionHTMLAttributes<HTMLOptionElement>[] | OptionHTMLAttributes<HTMLOptionElement>
}

export const SelectComp: React.FC<SelectCompProps> =({ option,changeValue, selectedValue, ...restSelect }:SelectCompProps)=>{
    function changeValueSelected(e:React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        if(e.target.value === 'Pessoa Física (CPF)')
        {
            console.log(e.target.name)
            // changeValue(e.target.name, 'cpf')
        }else if(e.target.value === 'Pessoa Jurídica (CNPJ)'){
            // changeValue(e.target.name, 'cnpj')
        }else{
            // changeValue(e.target.name,'mei')
        }

    }

    return (
        <select  onChange={(e)=>changeValueSelected(e as any)}{...restSelect} >
         {
             Array.isArray(option) ? (
                option.map((item, index) => (
                    <option key={index} {...item} >{item.value}</option>
                ))
            ) : (
                <option {...option}>{option?.value}</option>
            )
         }
        </select>
  )

}