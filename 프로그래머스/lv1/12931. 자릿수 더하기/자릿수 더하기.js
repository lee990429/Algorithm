function solution(n)
{
    
    let arr = String(n);
    let answer = 0;
    for(let i = 0; i<arr.length; i++){
        
        answer += Number(arr[i]);
        
    }
    
    return answer;
}