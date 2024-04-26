import removeMask from '@/utils/removeMask'
import {consultarCep} from 'correios-brasil'

async function takeAddressForCep (props:string){
    const stringFormatted = removeMask(props)
    try {
        const address = await consultarCep(stringFormatted)
        console.log(address)
        return address
        
    } catch (error) {
        console.log(error)
    }


}

export {
   takeAddressForCep
}