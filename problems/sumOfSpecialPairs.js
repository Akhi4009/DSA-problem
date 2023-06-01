function sumOfSpecialPairs(N,A){
    
      let sum=0
    for(let i=0;i<N;i++){
        for(let j=i+1;j<N;j++){
           let diff=j-i
         if(prime(diff)===true){
             sum+=Math.abs(A[j]-A[i])
         }
        }
      }
      console.log(sum)
}

function prime (n){
    let count=0
    for(let i=1;i<=n;i++){
        if(n%i===0){
            count++
        }
    }
 if(count===2){
     return true
 }
}
