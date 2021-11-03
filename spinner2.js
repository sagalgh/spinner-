let charArr =["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "]
let delayTime = 100 
for (let i=0; i< charArr.length; i++){
setTimeout(() => {
  process.stdout.write(charArr[i]);
}, delayTime+= 200);
}