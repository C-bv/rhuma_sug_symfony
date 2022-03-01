<?php

// PUBLIC
define("PUB", "public");
define("ASSETS", PUB . "/assets");
define("CSS", ASSETS . "/css");
define("JS", ASSETS . "/js");
define("IMG", ASSETS . "/img");
define("MODULES", JS . "/modules");

// SRC
define("SRC", "src");
define("CLASSES", SRC . "/classes");
define("SCRIPTS", SRC . "/scripts");
define("TEMPLATE", SRC . "/template");
define("TEMPLATE_PAGES", TEMPLATE . "/pages");
define("TEMPLATE_PARTS", TEMPLATE . "/template_parts");

// ROUTES
define("DB_CONFIG", SRC . "/config/dbconfig.php");
define("ROUTES", include SRC . "/config/routes.php");
define("DEFAULT_ROUTE", "home");
define("NOT_FOUND_ROUTE", "page404");
