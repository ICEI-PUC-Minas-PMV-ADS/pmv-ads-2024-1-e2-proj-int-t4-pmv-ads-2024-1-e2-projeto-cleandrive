<?php
// Conectar ao banco de dados
$pdo = new PDO('mysql:host=localhost;dbname=meubanco', 'root', '');

// Verificar se os dados do formulário foram enviados
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Preparar a declaração SQL
    $stmt = $pdo->prepare("INSERT INTO Contatos (nome, email, mensagem) VALUES (:nome, :email, :mensagem)");

    // Vincular parâmetros
    $stmt->bindParam(':nome', $_POST['nome']);
    $stmt->bindParam(':email', $_POST['email']);
    $stmt->bindParam(':mensagem', $_POST['mensagem']);

    // Executar a declaração
    $stmt->execute();
}
?>