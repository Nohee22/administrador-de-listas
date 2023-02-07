function p(y) {
    return document.getElementById(y);
}

function agregar(){
    var nombre = p("inputNombre").value;
    var apellidos = p("inputApellidos").value;
    var equipo = p("inputEquipo").value;
    var color = p("inputColor").value;

    if (nombre==""){
		p("inputNombre").focus();
		return; 
	} 
    if (apellidos==""){
		p("inputApellidos").focus();
		return; 
	}
    if (equipo==""){
		p("inputEquipo").focus();
		return; 
	} 
    if (color==""){
		p("inputColor").focus();
		return; 
	}

    let fila=document.createElement("tr");
 
    
    let celda1=document.createElement("td");
    let celda2=document.createElement("td");
    let celda3=document.createElement("td");
    let celda4= document.createElement("td");
    let celda5= document.createElement("td");


    celda1.innerHTML=nombre;
    celda2.innerHTML=apellidos;
    celda3.innerHTML=equipo;
    celda4.innerHTML=color;
    celda5.innerHTML="<input type='button' id='eliminar' value='Eliminar' onclick='eliminar(this)'>"

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    fila.appendChild(celda5);

   
    p("tablaDatos").appendChild(fila)
    p("inputNombre").value=""
    p("inputApellidos").value="";
    p("inputEquipo").value="";
    p("inputColor").value="";
    p("inputNombre").focus();
}

function eliminar(nodoBoton){
    let filaABorrar= nodoBoton.parentNode.parentNode;

    p("tablaDatos").removeChild(filaABorrar);
	p("inputNombre").focus();
}