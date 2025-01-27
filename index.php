<?php 
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    $to = "henriquemendesp85@gmail.com";
    
    $subject = "Nova Mensagem do site";
    $body = "Nome:$nome\nE-email: $email\nmensagem:\n$mensagem";
    $headers = "From: $email";

    if (mail($to, $subject,$body,$headers)){
        echo"Mensagem enviada com sucesso!";
    } else{
        echo"Erro ao enviar a mensagem.";
    }
}?>