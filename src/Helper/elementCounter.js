export function elementCounter (mok, type){
    const number = mok.reduce((acc, item) => {
        if (item.type === type){
         return acc = acc + 1
        } else {
         return acc
        }
       }, 0)
       return number
}
