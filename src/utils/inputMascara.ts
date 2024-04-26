export function makeMaskInput(props:string){
    const mask={
        cpf: "/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/",
        cnpj: "/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/",
        phone: "?:(^\+\d{2})?)(?:([1-9]{2})|([0-9]{3})?)(\d{4,5})(\d{4})",
        cep: "00000-000",
        date: "00/00/0000"
    }

}