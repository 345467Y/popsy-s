function changeImg(){
    let element = document.getElementById("sabor");
    let selectedValue = element.value;
    document.getElementById("imgSelect").src = "./images/"+selectedValue;
    document.getElementById("containerImg").className = "";
}

function validateFormOnSubmit(theForm) {
    document.getElementById("containerForm").className = "container ocultar";
    document.getElementById("nombreFactura").innerText = theForm.name.value;
    document.getElementById("apellidoFactura").innerText = theForm.lastName.value;
    document.getElementById("direccionFactura").innerText = theForm.addres.value;
    document.getElementById("numeroFactura").innerText = theForm.phoneNumber.value;
    document.getElementById("saborFactura").innerText = theForm.sabor.value.replace(".png", "");
    document.getElementById("factura").className = "";
    return false;
}