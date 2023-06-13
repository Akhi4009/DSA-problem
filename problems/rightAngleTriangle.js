function rightAngleTriangle(N) {
    for(let i=1;i<=N;i++){
        let res='';
        for(let j=1;j<=i;j++){
            res=res+i+' ';
        }
        console.log(res);
    }
}