function powerCalc(N,str){
    let vow=0,cons=0; 
     for(let i=0;i<N;i++){
         let z=str[i]
         if(z=='a'||z=='e'||z=='i'||z=='o'||z=='u'){
             vow++
         }else{
             cons++
         }
     }
     let res=3*vow+5*cons
     console.log(res)
 }