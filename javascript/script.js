document.getElementById('destaque-img').addEventListener('click', () =>{
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('catalogo').style.display = 'block'

});

document.getElementById('voltar-inicio').addEventListener('click', () =>{
    document.getElementById('catalogo').style.display = 'none';
    document.getElementById('inicio').style.display = 'block'

});
