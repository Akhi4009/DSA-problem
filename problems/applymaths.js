function applyBasicMaths(N,A){
    let sum=0
  for(let i=0;i<N;i++){
      sum+=A[i]
  }
  let min=Infinity,res=0
 for(let j=0;j<N;j++){
    sum-=A[j]
   
    if(sum%7==0&&min>A[j]){
        min=A[j]
        res=j
    }
    sum+=A[j]
 }
res>0? console.log(res):console.log(-1)

}

applyBasicMaths(5,[14,7,4,8,2])