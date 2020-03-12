function bisextile(annee)
{
    if(annee % 4 == 0  && annee % 100 != 0  )
    {
        console.log("true");
    }
    else if(annee % 400 ==0)
    {
        console.log("true"); 
    }
    else
    {
        console.log("false");
    }
}



