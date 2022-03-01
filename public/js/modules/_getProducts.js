export default async function getProducts(idcat) {

    const params = {
        idCat: idcat
    };
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(params)
    };
    const response = await fetch("src/scripts/getProductsJson.php", options),
        dataJson = await response.json();

    return dataJson;
};