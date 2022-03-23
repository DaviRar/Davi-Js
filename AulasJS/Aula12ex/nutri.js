function Verificar(){
    var qs1 = document.getElementsByName('?p')
    var qs2 = document.getElementsByName('?p2')
    var qs3 = document.getElementsByName('?p3')
    var res1 = document.querySelector('div#r1')
    var res2 = document.querySelector('div#r2')
    var res3 = document.querySelector('div#r')
    if (qs1[1].checked) {
        res1.innerHTML = 'Correto'
        res1.style.color = 'green'
    }else{
        res1.innerHTML = 'Errado'
        res1.style.color = 'red'
    }
    if (qs2[1].checked) {
        res2.innerHTML = 'Correto'
        res2.style.color = 'green'
    }else{
        res2.innerHTML = 'Errado'
        res2.style.color = 'red'
    }
    if (qs3[1].checked) {
       res3.innerHTML = 'Correto'
       res3.style.color = 'green'
    } else {
        res3.innerHTML = 'Errado'
        res3.style.color = 'red'
    }
}
