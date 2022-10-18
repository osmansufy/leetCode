function longestPalindrome(s: string): number {

    let frequencyObj={ };

    let sum=0;

    for(let i=0;i<s.length;i++){
        const sKey=s[i];
        // check s[key] is exist in obj if exist increase sum by 2 and resume s[key] to 0 so that we can calculate all even number.After that only single odd number has 1 value 
        if(!frequencyObj[sKey]){
            frequencyObj[sKey]=1;
        }else{
            frequencyObj[sKey]=0;
            sum+=2;
        }
    }
//  after that check string greater then the sum . if greater then there are single odd numbers are not calculate so add 1 to sum 
    if(sum<s.length){
      return  sum++;
    }else{
        return sum
    }

};