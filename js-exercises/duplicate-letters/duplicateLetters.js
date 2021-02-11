function duplicateLetters(str) {
  let maxDuplicate,alphabet,count,index=0,alphabetCountArray =[];
  let alphabetCount = {};
  
  for (let i=0;i<str.length;i++){
    alphabet = str.charAt(i);
    count = alphabetCount[alphabet];
    alphabetCount[alphabet]= count ? count+1 : 1;
  }
  for (const [key, value] of Object.entries(alphabetCount)) {
    alphabetCountArray[index]= value;
    index+=1;
  }
  maxDuplicate = Math.max.apply(null,alphabetCountArray);
  if (maxDuplicate==1)
  {
    return false;
  }
  return maxDuplicate;
  
}

export { duplicateLetters };