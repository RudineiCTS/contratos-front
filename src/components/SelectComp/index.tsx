import React, { OptionHTMLAttributes, SelectHTMLAttributes } from 'react'


interface SelectCompProps extends SelectHTMLAttributes<HTMLSelectElement>{
    changeValue: (value: any) => void
    selectedValue?: string
    option?: OptionHTMLAttributes<HTMLOptionElement>[] | OptionHTMLAttributes<HTMLOptionElement>
}

export const SelectComp: React.FC<SelectCompProps> =({ option,changeValue, selectedValue }:SelectCompProps)=>{
    function changeValueSelected(e:any) {
        e.preventDefault();
        changeValue(e.target.value);
        // console.log(selectedValue)
    }

    return (
        <select  onChange={(e)=>changeValueSelected(e)} defaultValue={selectedValue}>
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