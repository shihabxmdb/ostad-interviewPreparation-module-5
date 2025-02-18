function kostad(first,second,k){
    let n1=first.length;
    let n2=second.length;
    let map={};
    let unMatched=0;
    //create a map with second string
    //count every letter of b
    for(let i=0;i<second.length;i++){
        if(map[second[i]]){
            map[second[i]]++; 
        }else{
            map[second[i]]=1;
        }
    }
    //decrese from map(s) whitch is match with first  string and decrese n2 also
    for(let j=0;j<first.length;j++){
        if(map[first[j]]){
            map[first[j]]--;
            n2--;
        }else{
            unMatched++;
        }
    } 

    if(unMatched<=k && k>=n2){//if unMatched==k ,we can change eatch other with  operation cost
        return "YES";
    }else{
        return "NO"
    }
}



console.log(kostad("anagram","grammar",3));