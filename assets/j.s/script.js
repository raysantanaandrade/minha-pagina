
function toggleMode() {
    const body = document.documentElement;

    // Alternar entre a classe 'light' e 'dark'
    body.classList.toggle('light');
    
    // Pegar a tag img
    const img = document.querySelector("#profile img");

    // Substituir a imagem com base no modo ativo
    if (body.classList.contains('light')) {
        // Se estiver em modo claro, adicionar a imagem light
        img.setAttribute('src', './assets/img/foto-perfil-light.jpg');
    } else {
        // Se estiver em modo escuro, adicionar a imagem normal
        img.setAttribute('src', './assets/img/foto-perfil-moon.jpg');
    }
}




