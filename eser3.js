function scelta() {
    let larghezza=document.getElementById("dim").value;
    let altezza=document.getElementById("dim1").value;
    let coloreSfondo=document.getElementById("col").value;
    let testoDestra=document.getElementById("testoDestra").value;
    let testoSinistra=document.getElementById("testoSinistra").value;
    let testoCentro=document.getElementById("testoCentro").value;
    let bordoArrotondato=document.getElementById("bordo1").checked;
    let ombra=document.getElementById("bordo2").checked;

    let box=document.getElementById("box")
    box.innerHTML="";
    let nuovaDiv=document.createElement("div");
    nuovaDiv.style.width=larghezza+"px";
    nuovaDiv.style.height=lunghezza+"px";
    nuovaDiv.style.backgroundColor=coloreSfondo;

    if(bordoArrotondato)nuovaDiv.style.borderRadius="20px";
    if(ombra)nuovaDiv.style.boxShadow="5px 5px 10px gray";
    nuovaDiv.style.display="flex";
    nuovaDiv.style.justifyContent="space-between";
    nuovaDiv.style.alignItems="center";
    nuovaDiv.style.padding="10px";
    nuovaDiv.style.fontFamily="Verdana";

    let divSinistra=document.createElement("div");
    divSinistra.textContent=testoSinistra;
    let divCentro=document.createElement("div");
    divCentro.textContent=testoCentro;
    divCentro.style.textAlign="center";
    divCentro.style.flexGrow="1";
    let divDestra=document.createElement("div");
    divDestra.textContent=testoDestra;
    nuovaDiv.appendChild(divSinistra);
    nuovaDiv.appendChild(divCentro);
    nuovaDiv.appendChild(divDestra);
    box.appendChild(nuovaDiv);
}