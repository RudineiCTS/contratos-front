export interface  PersonInfo  {
    name: string;
    nationality: string;
    occupation:string;
    typeOwner: "cpf" |"cnpj"|"mei" 
    numDoc:string,
    cnpjDoc:string;
    orEmissor: string;
    cpfToProperties:string
    emailToProperties:string | null;
    cep:string;
    street:string
    numberHouse:string
    neighborhood:string;
    city:string;
    uf:string;
    maritalStatus:string;
    typeDocument:string;
  }
  
  export interface OccupantInfo {
    typeOccupant:string;
    cnpjOccupant:string;
    numDocOccupant:string;
    nationalityOccupant:string;
    occupationOccupant:string;
    orEmissorOccupant:string;
    nameOccupant:string;
    occupantMaritalStatus:string;
    cpfOccupant:string;
    emailOccupant:string;
    cepOccupant:string;
    streetOccupant:string
    numberHouseOccupant:string
    neighborhoodOccupant:string;
    cityOccupant:string;
    ufOccupant:string;
  }

  export interface ImovelInfo{
    cep:string;
    street:string
    numberHouse:string
    neighborhood:string;
    city:string;
    uf:string;
    complement:string;
  }
  export interface ContractRentContextType {
    ownerInfo: PersonInfo;
    setOwnerInfo: (info:PersonInfo) => void;
    occupantInfo: OccupantInfo;
    setOccupantInfo: (info:OccupantInfo) => void;
    description:string;
    setDescription: (description:string) => void;
    imovelInfo:ImovelInfo;
    setImovelInfo: (info:ImovelInfo) => void;
  }