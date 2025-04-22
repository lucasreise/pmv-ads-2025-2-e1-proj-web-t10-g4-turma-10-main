document.addEventListener('DOMContentLoaded', function(){

    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));

    
    if (usuarioLogado){
        window.location.href = '/pontosColeta/pontosColeta.html';
        return;
    }

});