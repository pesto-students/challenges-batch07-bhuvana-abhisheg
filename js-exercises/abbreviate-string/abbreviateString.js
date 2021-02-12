import { isString } from "util";
// Function to return the abbreviated version of the string
function abbreviateString(str) {
    let abbreviatedStr='';
    let strArr;
	//handle invalid arguments
    try {
		if ( str === "" || !isNaN(str) || typeof str === 'string')
        throw 'Invalid Argument!';    
    } catch(err){
		console.log(err);
    }

    strArr = str.trim().split(" ");
    
    if (strArr.length>1){
        abbreviatedStr = strArr[0].charAt(0).toUpperCase() + strArr[0].slice(1);
        for (let len=strArr.length,i=0;i< len;i++)
        {
            if (i= strArr.length-1) {
               abbreviatedStr += ' ' + strArr[i].charAt(0).toUpperCase() + '.';
            }
        }
        return abbreviatedStr;
    }
   return str.charAt(0).toUpperCase() + str.slice(1);
}

export { abbreviateString };
