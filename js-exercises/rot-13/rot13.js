function rot13(encodedStr){
  let decodedStr = "",uCode ,codeArr = [];
  for (let i = 0; i < encodedStr.length; i++) {
    uCode = encodedStr.charCodeAt([i]);
     if ((uCode > 64 && uCode < 78) || (uCode > 96 && uCode < 110)) {
            uCode += 13;
            codeArr.push(uCode);
     } else if ((uCode > 77 && uCode < 91) || (uCode > 109 && uCode < 123)){
            uCode -= 13;
            codeArr.push(uCode);
     } else {
        codeArr.push(uCode); 
     }
  }
  console.log(codeArr);
  for (let j = 0; j < codeArr.length; j++) {
        decodedStr += String.fromCharCode(codeArr[j]);
    }
  return decodedStr;
}

export {
  rot13,
};
