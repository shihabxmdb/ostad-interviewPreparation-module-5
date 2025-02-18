
function decrept(str){
    let map={};
    for(let i=0;i<str.length;i++){
        if(map[str[i]]){
            map[str[i]]++;
        }else{
            map[str[i]]=1;
        }
    }
    const keys=Object.keys(map);
    let result='';
    keys.map(k=>{
        result=map[k]+k+result;
    });
    return result;

}
console.log(decrept("ostad"))