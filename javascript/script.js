document.getElementById('destaque-img').addEventListener('click', () =>{
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('catalogo').style.display = 'block'

});

document.getElementById('voltar-inicio').addEventListener('click', () =>{
    document.getElementById('catalogo').style.display = 'none';
    document.getElementById('inicio').style.display = 'block'

});

function carregarDetalhes(imagem,titulo,descricao,teor,notas){
    document.getElementById('modalImagem').src = imagem;
    document.getElementById('modalTitulo').innerText = titulo;
    document.getElementById('modalDescricao').innerText = descricao;
    document.getElementById('modalTeor').innerText = teor;
    document.getElementById('modalNotas').innerText = notas;
}