function nestedReversePattern(num) {
    // Write code here
    for(let i=1;i<=num;i++){
        let res='';
        for(let j=num;j>=1;j--){
            res=res+j+" ";
        }
        console.log(res);
    }
}