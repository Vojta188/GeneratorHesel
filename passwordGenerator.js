let heslo = []


function GeneratorHesel()
{
    let malapismena = "abcdefghijklmnopqrstuvwxyz";
    let malapismenadelka = malapismena.length;


    let Pismena = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let DelkaVelkychPismen = Pismena.length;

    let znakyvypis = "_ŮÚ§!()/:?-><*ß$÷×¸=";
    let delkaznaku = znakyvypis.length;

    let cislicevypis = "1234567890";
    let delkacislice = cislicevypis.length;


 


    
    if(heslo.length > 0)
    {
       heslo = [];
    }
    




  let VelkaPismena =  document.getElementById("chck_big");
  let Znaky = document.getElementById("chckznaky");
  let cislice = document.getElementById("chcknumber");
  let malapismenka = document.getElementById("chckmalap");
  let delkahesla = document.getElementById("numberlenght").value

  if(delkahesla < 4)
  {
      alert("Zadejte větší číslo než 3")
  }
  else
  {

//Malá písmena
 if(malapismenka.checked == true && VelkaPismena.checked == false && Znaky.checked == false &&  cislice.checked == false)
    while(heslo.length < delkahesla)
    {randomMalapismena = malapismena.charAt(Math.floor(Math.random() * malapismenadelka));
    heslo.push(randomMalapismena)}
    
//Velká písmena
    if(VelkaPismena.checked == true && malapismenka.checked == false && Znaky.checked == false &&  cislice.checked == false)
    
        while(heslo.length < delkahesla)
       {randomVelkaPismena =  Pismena.charAt(Math.floor(Math.random() * DelkaVelkychPismen));
       heslo.push(randomVelkaPismena);}

    
    
//Znaky

    if(Znaky.checked == true && malapismenka.checked == false && VelkaPismena.checked == false &&  cislice.checked == false)
    {
        while(heslo.length < delkahesla)
      {randomZnaky =  znakyvypis.charAt(Math.floor(Math.random()* delkaznaku));
      heslo.push(randomZnaky);}
    }
//Číslice
    if(cislice.checked == true && malapismenka.checked == false && VelkaPismena.checked == false &&  Znaky.checked == false)
    {
        while(heslo.length < delkahesla)
        {
        randomCislice =  cislicevypis.charAt(Math.floor(Math.random()* delkacislice));
        heslo.push(randomCislice);
        }
    }


    //Málá a Velká písmena

    if(malapismenka.checked == true && VelkaPismena.checked == true && Znaky.checked == false && cislice.checked == false)
{
   while(heslo.length < delkahesla)
   {
    randomMalapismena = malapismena.charAt(Math.floor(Math.random() * malapismenadelka));
    randomVelkaPismena =  Pismena.charAt(Math.floor(Math.random() * DelkaVelkychPismen));
    heslo.push(randomMalapismena,randomVelkaPismena);
   }
}

    //Malá a Znaky

    if(malapismenka.checked == true && VelkaPismena.checked == false && Znaky.checked == true && cislice.checked == false)
    {
       while(heslo.length < delkahesla)
       {
        randomMalapismena = malapismena.charAt(Math.floor(Math.random() * malapismenadelka));
        randomZnaky =  znakyvypis.charAt(Math.floor(Math.random()* delkaznaku));
        heslo.push(randomMalapismena,randomZnaky);
       }
    }
    //Malá a číslice

    if(malapismenka.checked == true && VelkaPismena.checked == false && Znaky.checked == false && cislice.checked == true)
    {
       while(heslo.length < delkahesla)
       {
        randomMalapismena = malapismena.charAt(Math.floor(Math.random() * malapismenadelka));
        randomCislice =  cislicevypis.charAt(Math.floor(Math.random()* delkacislice));
        heslo.push(randomMalapismena,randomCislice);
       }
    }


    //Velká a znaky

    if(malapismenka.checked == false && VelkaPismena.checked == true && Znaky.checked == true && cislice.checked == false)
    {
       while(heslo.length < delkahesla)
       {
        randomZnaky =  znakyvypis.charAt(Math.floor(Math.random()* delkaznaku));
        randomVelkaPismena =  Pismena.charAt(Math.floor(Math.random() * DelkaVelkychPismen));
        heslo.push(randomZnaky,randomVelkaPismena);
       }
    }

    //Velká číslice
    if(malapismenka.checked == false && VelkaPismena.checked == true && Znaky.checked == false && cislice.checked == true)
    {
       while(heslo.length < delkahesla)
       {
        randomCislice =  cislicevypis.charAt(Math.floor(Math.random()* delkacislice));
        randomVelkaPismena =  Pismena.charAt(Math.floor(Math.random() * DelkaVelkychPismen));
        heslo.push(randomCislice,randomVelkaPismena);
       }
    }

    //Znaky a číslice
    if(malapismenka.checked == false && VelkaPismena.checked == false && Znaky.checked == true && cislice.checked == true)
    {
       while(heslo.length < delkahesla)
       {
        randomZnaky =  znakyvypis.charAt(Math.floor(Math.random()* delkaznaku));
        randomCislice =  cislicevypis.charAt(Math.floor(Math.random()* delkacislice));
        heslo.push(randomZnaky,randomCislice);
       }
    }

    //Mala a Velka a Znaky

    if(malapismenka.checked == true && VelkaPismena.checked == true && Znaky.checked == true && cislice.checked == false)
    {
       while(heslo.length < delkahesla)
       {
        randomZnaky =  znakyvypis.charAt(Math.floor(Math.random()* delkaznaku));
        randomVelkaPismena =  Pismena.charAt(Math.floor(Math.random() * DelkaVelkychPismen));
        randomMalapismena = malapismena.charAt(Math.floor(Math.random() * malapismenadelka));
        heslo.push(randomZnaky,randomVelkaPismena,randomMalapismena);
       }
    }

    //Mala Znaky Cislice
    if(malapismenka.checked == true && VelkaPismena.checked == false && Znaky.checked == true && cislice.checked == true)
    {
       while(heslo.length < delkahesla)
       {
        randomZnaky =  znakyvypis.charAt(Math.floor(Math.random()* delkaznaku));
        randomCislice =  cislicevypis.charAt(Math.floor(Math.random()* delkacislice));
        randomMalapismena = malapismena.charAt(Math.floor(Math.random() * malapismenadelka));
        heslo.push(randomZnaky,randomCislice,randomMalapismena);
       }
    }

    //Mala Velka Cislice
    if(malapismenka.checked == true && VelkaPismena.checked == true && Znaky.checked == false && cislice.checked == true)
    {
       while(heslo.length < delkahesla)
       {
        randomVelkaPismena =  Pismena.charAt(Math.floor(Math.random() * DelkaVelkychPismen));
        randomCislice =  cislicevypis.charAt(Math.floor(Math.random()* delkacislice));
        randomMalapismena = malapismena.charAt(Math.floor(Math.random() * malapismenadelka));
        heslo.push(randomVelkaPismena,randomCislice,randomMalapismena);
       }
    }

    //Znaky Cislice Velka 

    if(malapismenka.checked == false && VelkaPismena.checked == true && Znaky.checked == true && cislice.checked == true)
    {
       while(heslo.length < delkahesla)
       {
        randomVelkaPismena =  Pismena.charAt(Math.floor(Math.random() * DelkaVelkychPismen));
        randomCislice =  cislicevypis.charAt(Math.floor(Math.random()* delkacislice));
        randomZnaky =  znakyvypis.charAt(Math.floor(Math.random()* delkaznaku));
        heslo.push(randomVelkaPismena,randomCislice,randomZnaky);
       }
    }
    //Vsechny

    if(malapismenka.checked == true && VelkaPismena.checked == true && Znaky.checked == true && cislice.checked == true)
    {
        
       while(heslo.length < delkahesla)
       {
        randomVelkaPismena =  Pismena.charAt(Math.floor(Math.random() * DelkaVelkychPismen));
        randomCislice =  cislicevypis.charAt(Math.floor(Math.random()* delkacislice));
        randomZnaky =  znakyvypis.charAt(Math.floor(Math.random()* delkaznaku));
        randomMalapismena = malapismena.charAt(Math.floor(Math.random() * malapismenadelka));
        heslo.push(randomVelkaPismena,randomCislice,randomZnaky,randomMalapismena);
       }
    }
}

    document.getElementById("vlozitdohtml").innerHTML = heslo.join(""); 
}