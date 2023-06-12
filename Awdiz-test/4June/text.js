//find the 5 number from given array who subtraction is target

const arr = [
  2, 3, 55, 6, 67, 78, 23, 5, 67, 78, 43, 67, 34, 6, 74, 7, 45, 23, 45, 78, 89,
  34, 23,
];
const target = -54;
const findNumber = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        for (let t = k + 1; t < arr.length; t++) {
          for (let m = t + 1; m < arr.length; m++) {
            if (arr[i] - arr[j] - arr[k] - arr[t] - arr[m] == target) {
              console.log(arr[i], arr[j], arr[k], arr[t], arr[m], "=", target);
            } else {
              console.log("target not found");
            }
          }
        }
      }
    }
  }
};
// findNumber(arr,target)

//find the 2 number fron given array who multiplication is target
const arr2 = [
  2, 3, 55, 6, 67, 78, 23, 5, 67, 78, 43, 67, 34, 6, 74, 7, 45, 23, 45, 78, 89,
  34, 23,
];
const target2 = 236028;
const findMulti = (num, target) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] * num[j] == target) {
        console.log(num[i], num[j], "=", target);
      } else {
        console.log("target not found");
      }
    }
  }
};
// findMulti(arr2,target2)

//find the even number from given number
const arr3 = [
  2, 3, 55, 6, 67, 78, 23, 5, 67, 78, 43, 67, 34, 6, 74, 7, 45, 23, 45, 78, 89,
  34, 23,
];


const findOdd=(arr)=>{
    let add=[]
    for(let i=0;i<arr.length;i++){
        const sum=arr[i]
        if(sum%2==1){
            add.push(sum)
        }
    }
}
// console.log(findOdd(arr3))

const Findodd=(arr)=>{
    const result= arr.filter((num)=>{
        return num%2==0;
    })
    console.log(result);
}
Findodd(arr3)
// find the total count of odd numbers from given numbers

const countOfOdd=(num)=>{
    const totalEven=num.filter((arr)=>{
        return arr%2==0;
    })
    console.log(totalEven.length);
}
// countOfOdd(arr3);