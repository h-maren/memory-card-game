
export default function RandomizeDeck(array){
   
    let newArray=[...array];
    //Fisher-Yaes Shuffle Algorithm
    for(let i=newArray.length-1;i>0;i--){
      let j=Math.floor(Math.random()*(i+1));
      [newArray[i],newArray[j]]=[newArray[j],newArray[i]];
    }
    return newArray;
  }