<?php
// Conexão com o banco de dados
$pdo = new PDO('mysql:host=localhost;dbname=cadastroclientes', 'root', '');

// Verifica se os dados do formulário foram enviados
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Recebe os dados do formulário
    $nome = $_POST['nome'];
    $cpfCnpj = $_POST['cpfCnpj'];
    $senha = $_POST['password']; // Obtém a senha do formulário
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT); // Aplica o hash na senha
    $cidade = $_POST['cidade'];
    $cep = $_POST['cep'];
    $telefone = $_POST['telefone'];
    $email = $_POST['e-mail']; // Corrigido para corresponder ao nome do campo no formulário

    // Prepara a inserção dos dados no banco de dados
    $stmt = $pdo->prepare('INSERT INTO clientes (nome, cpfCnpj, senha, cidade, cep, telefone, email) VALUES (:nome, :cpfCnpj, :senha, :cidade, :cep, :telefone, :email)');
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':cpfCnpj', $cpfCnpj);
    $stmt->bindParam(':senha', $senhaHash);
    $stmt->bindParam(':cidade', $cidade);
    $stmt->bindParam(':cep', $cep);
    $stmt->bindParam(':telefone', $telefone);
    $stmt->bindParam(':email', $email);

    try {
        // Tentativa de conexão e inserção de dados
        $stmt->execute();
        // Redireciona para a página de confirmação após o sucesso
        header('Location:login.html');
        exit;
    } catch (PDOException $e) {
        echo "Erro de conexão: " . $e->getMessage();
    }
}
?>

