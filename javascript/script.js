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

document.getElementById('formRevendedor').addEventListener('submit', function (e){
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const cidade= document.getElementById('cidade').value;
    const experiencia = document.getElementById('experiencia').value;

    const mensagem = `Olá, gostariade me cadastrar como revendedor!\n\n`+
    `*Nome*:${nome}\n`+
    `*Telefone*:${telefone}\n`+
    `*E-mail*:${email}\n`+
    `*Cidade*:${cidade}\n`+
    `*Experiência com vendas*:${experiencia}\n;`

    const mensagemCodificada = encodeURIComponent(mensagem);

    const numeroWhatsApp = '5543996465575';

    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada};`

    window.open(linkWhatsApp,'_blank');
});