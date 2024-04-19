import React, { OptionHTMLAttributes, SelectHTMLAttributes } from 'react'


interface SelectCompProps extends SelectHTMLAttributes<HTMLSelectElement>{
    changeValue: (value: any) => void
    selectedValue?: string
    option?: OptionHTMLAttributes<HTMLOptionElement>[] | OptionHTMLAttributes<HTMLOptionElement>
}

export const SelectComp: React.FC<SelectCompProps> =({ option,changeValue, selectedValue }:SelectCompProps)=>{
    function changeValueSelected(e:any) {
        e.preventDefault();
        console.log(selectedValue)
        changeValue(e.target.value);
    }

    return (
        <select  onChange={(e)=>changeValueSelected(e)}>
         {
             Array.isArray(option) ? (
                option.map((item, index) => (
                    <option key={index} {...item} defaultValue={selectedValue}>{item.value}</option>
                ))
            ) : (
                <option {...option}>{option?.value}</option>
            )
         }
        </select>
  )

}