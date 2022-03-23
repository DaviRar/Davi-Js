var ver = document.querySelector('div#hora')
var horario = document.querySelector('div#ola')
var agora = new Date()
var hora = agora.getHours()
if (hora >= 8 && hora < 12) {
    ver.innerHTML = (`A hora agora é ${hora}`)
    horario.innerHTML = ('Bom dia')
} else {
    if (hora >= 12 && hora < 18) {
        ver.innerHTML = (`A hora agora é ${hora}`)
        horario.innerHTML = ('Boa tarde')
    } else {
        if (hora >= 18 && hora < 23) {
            ver.innerHTML = (`A hora agora é ${hora}`)
            horario.innerHTML = ('Boa noite')
        } else {
            ver.innerHTML = (`A hora agora é ${hora}`)
            horario.innerHTML = ('Boa madruga')
        }
        
    }
}