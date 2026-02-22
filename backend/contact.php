<?php

// HEADERS CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Répondre au preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Charger PHPMailer (CHEMINS CORRIGÉS)
require __DIR__ . '/PHPMailer-7.0.2/src/PHPMailer.php';
require __DIR__ . '/PHPMailer-7.0.2/src/SMTP.php';
require __DIR__ . '/PHPMailer-7.0.2/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Lire JSON
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Aucune donnée reçue"]);
    exit;
}

// Nettoyage
$name    = trim(htmlspecialchars($data["name"] ?? ''));
$email   = trim($data["email"] ?? '');
$message = trim(htmlspecialchars($data["message"] ?? ''));

// Validation
if (!$name || !$email || !$message) {
    echo json_encode(["success" => false, "message" => "Tous les champs sont obligatoires"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Email invalide"]);
    exit;
}

$mail = new PHPMailer(true);

try {

    // CONFIG SMTP GMAIL
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'nambinitsoam6@gmail.com';
    $mail->Password   = 'nklq tgbt xgaz bdvk'; // ⚠️ mot de passe d'application Gmail
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';

    // Expéditeur / destinataire
    $mail->setFrom('nambinitsoam6@gmail.com', 'Portfolio Contact');
    $mail->addAddress('nambinitsoam6@gmail.com');
    $mail->addReplyTo($email, $name);

    // Contenu
    $mail->isHTML(false);
    $mail->Subject = "Nouveau message depuis ton portfolio";

    $mail->Body =
        "Nom : $name\n" .
        "Email : $email\n\n" .
        "Message :\n$message";

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Message envoyé avec succès"
    ]);

} catch (Exception $e) {

    echo json_encode([
        "success" => false,
        "message" => "Erreur lors de l'envoi : " . $mail->ErrorInfo
    ]);
}