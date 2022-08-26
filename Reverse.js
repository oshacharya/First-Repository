function reverse(str)
{
    let result
    for(let i=str.length;i>=0;i--)
    {
        result=result+str[i]
    }
    console.log(result)
}
reverse("Good Morning")