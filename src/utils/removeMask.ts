function removeMask(mask: string){
    return mask.replace(/\D/g, '');
}

export default removeMask;