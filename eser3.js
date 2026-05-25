function scelta() {
    let dim=document.getElementById("dim").value;
    let color=document.getElementById("color").value;
    let testo=document.getElementById("txt").value;

    let sceltaCSS=document.querySelector('input[name="css"]:checked');

    // Cancella eventuale div precedente
    let box=document.getElementById("box");
    box.innerHTML="";

    // Crea la div
    let nuovaDiv=document.createElement("div");
    // Imposta dimensioni e colore
    nuovaDiv.style.width=dim+"px";
    nuovaDiv.style.height=dim/2+"px";
    nuovaDiv.style.backgroundColor=color;
    /*
    nuovaDiv.style.display="flex";
    nuovaDiv.style.justifyContent="center";
    nuovaDiv.style.alignItems="center";*/

    // Applica lo stile scelto
    if(sceltaCSS)
    {
        if(sceltaCSS.value==="bordo")
        {
            nuovaDiv.style.border="3px solid black";
        }
        if(sceltaCSS.value==="tondo") 
        {
            nuovaDiv.style.borderRadius="20px";
        }
        if(sceltaCSS.value==="ombra") 
        {
            nuovaDiv.style.boxShadow="5px 5px 10px gray";
        }
    }
    nuovaDiv.textContent = testo;
    box.appendChild(nuovaDiv);
}