const deepCopyObject = (objToCopy) => {
  let outObject, value, key;  
  if (typeof objToCopy !== "object" || objToCopy === null) {
    return objToCopy;
  }  
  // Create an array or object to hold the values
  outObject = Array.isArray(objToCopy) ? [] : {};  
  for (key in objToCopy) {
    value = objToCopy[key];  
    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyObject(value);
  }  
  return outObject;
}  

export { deepCopyObject };
