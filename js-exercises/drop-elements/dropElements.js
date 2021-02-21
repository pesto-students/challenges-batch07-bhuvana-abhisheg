function dropElements(arr, func) {
    let myArr=[];
    for (let i=0; i<arr.length; i++) {    
      if (func(arr[i])) {
        myArr.push(arr[i]);        
      }
    }
    return myArr;
}

export { dropElements };
