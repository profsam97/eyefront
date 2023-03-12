const truncate = (word : string, number : number) : string => {

    const length  : number = word.length;
    
    return length > number ?  word.slice(0,number -1)  + '...' : word
}
export default truncate;