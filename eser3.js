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
    nuovaDiv.style.height=altezza+"px";
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
function scaricaPDF()
{
    let elemento=document.getElementById("box");
    let larghezzaPx=elemento.offsetWidth;
    let aletezzaPx=elemento.offsetHeight;
    let lunghezzaMM=larghezzaPx/3.78;
    let altezzaMM=aletezzaPx/3.78;
    let opzioni=
    {
        margin:10,
        filename:"invito.pdf",
        image:{type:"jpeg",quality:1},
        html2canvas:{scale:2},
        jsPDF:{unit:"mm",format:[lunghezzaMM,altezzaMM],orientation:"landscape"}
    };
    html2pdf().set(opzioni).from(elemento).save();
}