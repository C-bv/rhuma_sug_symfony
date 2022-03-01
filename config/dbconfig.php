<?php

// DB
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'phpmyadmin');
define('DB_PASSWORD', 'bouveret');
define('DB_NAME', 'rhuma_sug');

// DB CONN
try {
    $conn = new PDO("mysql:host=" . DB_SERVER . ";dbname=" . DB_NAME, DB_USERNAME, DB_PASSWORD);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("ERROR: Could not connect. " . $e->getMessage());
};

// REGEX
$nameRegex = "/[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/";
$mdpRegex = "/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/";
$cpRegex = "/(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$/";
$phoneRegex = "/((\+)33|0)[1-9](\d{2}){4}$/";

// FORMS INPUT ERRORS
$nomClient = $nomClientErr = "";
$prenomClient = $prenomClientErr = "";
$emailClient = $emailClientErr = "";
$mdpClient = $mdpClientErr = "";
$telClient = $telClientErr = "";
$addresseClient = $addresseClientErr = "";
$villeClient = $villeClientErr = "";
$cpClient = $cpClientErr = "";

$mdpClientNew = $mdpClientNewErr = "";
$mdpClientNewCheck = $mdpClientNewCheckErr = "";
