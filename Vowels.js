function returnVowel(st)
{
    let arr =Array.from(st)
    for(let i=0;i<arr.length;i++)
    {
        if((arr[i]=="a")||(arr[i]=="e")||(arr[i]=="i")||(arr[i]=="o")||(arr[i]=="u"))
        {
            console.log(arr[i])
        }
    }
}

let result=returnVowel("hello")