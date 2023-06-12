// const subTraction=(num1,num2)=>{
//     return num1-num2
// }
// console.log(subTraction(20,10))

//getting two num through loop

{
    const arr=[12,14,142,1,41,25,25,14,10]
    const target=50;
    const getTarget=(num,num1)=>{
        for(let i=0;i<num.length;i++){
            console.log(num[i]);
            for(let j=i+1;j<num.length;j++){
                console.log(num[j]);
                if(num[i]+num[j]==num1){
                    return true
                }
                else{
                    return false
                }
            }
        }
    }
    // console.log(getTarget(arr,target)); 
}

const arr=[12,12,41,25,1,25,3]
const target=50;
for(let i=0;i<arr.length;i++){
    // console.log('i value',arr[i]);
    for(let j=i+1;j<arr.length;j++){
        // console.log('j value',arr[j]);
        if(arr[i]+arr[j]==target){
            console.log(arr[i],'+',arr[j],'=',target);
        }
    }
}
{
    const cond=false
    const num=[10,45,4,1,20,14,6,12,12,3]
    const target=50;
}