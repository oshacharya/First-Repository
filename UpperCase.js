function upperCase(st)
{
    let str=Array.from(st)
    for(let i=0;i<str.length;i++)
    {
        if(str[i]!=" "&&i==0||str[i]!=" "&&str[i-1]==" ")
        {
            if(str[i]>='a'&&str[i]<='z')
            {
                str[i]=str[i].toUpperCase()
            }
            else if(str[i]>='A'&&str[i]<='Z')
            {
                str[i]=str[i].toUpperCase()
            }
        }
    }
    let result=str.toString()
    console.log(result)
}

upperCase("hello good morning")                                                   