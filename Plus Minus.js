function plusMinus(arr) {
    // Write your code here
    let posRatio = 0;
    let negRatio = 0;
    let zeRatio = 0;
    
    for (let i = 0; i < arr.length; i++){
if (arr[i]>0) posRatio++;


else if (arr[i]<0)negRatio++;


else  zeRatio++;
    }
      console.log((posRatio/arr.length).toFixed(6));
      console.log((negRatio/arr.length).toFixed(6));
      console.log((zeRatio/arr.length).toFixed(6));
}
