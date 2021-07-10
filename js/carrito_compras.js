var inicio1 = 0;
var inicio2 = 0;
var inicio3 = 0;

function aumentar1() {

    var cantidad = document.getElementById('cantidad').value = ++inicio1;
    var x= parseInt(document.getElementById('cantidad').value);
    document.getElementById('total').innerHTML=65*x;
    
    }

function resul(){
    
    var v= document.querySelectorAll('span[data-subtotal]');
    var f= parseInt(document.getElementById('total2').value);
    var g= parseInt(document.getElementById('total3').value);
    document.getElementById('subtotal').innerHTML= v;
    

}

function dismi() {

    var cantidad = document.getElementById('cantidad').value = --inicio1;
    var x= parseInt(document.getElementById('cantidad').value);
    document.getElementById('total').innerHTML= 65*x;
}

function aumentar2() {


    var cantidad2 = document.getElementById('cantidad2').value = ++inicio2;
    var x= parseInt(document.getElementById('cantidad2').value);
    document.getElementById('total2').innerHTML=55*x;

}

function disminuir2() {

    var cantidad2 = document.getElementById('cantidad2').value = --inicio2;
    var x= parseInt(document.getElementById('cantidad2').value);
    document.getElementById('total2').innerHTML= 55*x;
}

function aumentar3() {


    var cantidad3 = document.getElementById('cantidad3').value = ++inicio3;
    var x= parseInt(document.getElementById('cantidad3').value);
    document.getElementById('total3').innerHTML=55*x;

}


function disminuir3() {

    var cantidad3 = document.getElementById('cantidad3').value = --inicio3;
    var x= parseInt(document.getElementById('cantidad3').value);
    document.getElementById('total3').innerHTML= 55*x;
}



