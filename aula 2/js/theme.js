const btnTema = document.getElementById('tema');
const body = document.body;

btnTema.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

/*    let icone = document.getElementById('icone-tema');

    if(icone.classList.contains('fa-sun')){
        icone.classList.remove('fa-sun');
        icone.classList.add('fa-moon');
    }else{
        icone.classList.remove('fa-moon');
        icone.classList.add('fa-sun');
    }
*/
/*
    if(body.classList.contains('dark-mode')){
        btnTema.textContent = "Modo Claro";
    }else{
        btnTema.textContent = "Modo Escuro";
    }
    */

    if(body.classList.contains('dark-mode')){
        btnTema.innerHTML = 'Modo Claro <i class="fa-solid fa-sun"></i>';
    }else{
        btnTema.innerHTML = 'Modo Escuro <i class="fa-solid fa-moon"></i>';
    }
});