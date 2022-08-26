function returnOdd(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(i%2!=0)
        {
            console.log(arr[i])
        }
    }
}
let arr=[3,6,1,66,45,22]
returnOdd(arr)