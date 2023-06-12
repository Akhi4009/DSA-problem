function equilibriumElement(N, arr){
    let sum1;
    let sum2;
    let count=0;
    let res=0
    for(let i=0;i<N;i++){
        sum1=0;
        for(let j=0;j<i;j++){
            sum1=sum1+arr[j];
        }
            sum2=0;
         for(let j=i+1;j<N;j++){
             sum2= sum2+arr[j];
         }
    
            if(sum1==sum2){
        count++
        res=i+1;
        }
        
        
    

}
if(count>0){
    console.log(res);
}else{
    console.log(-1);
}

}