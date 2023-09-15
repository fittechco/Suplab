import ProductController from "../../server/controllers/productController";


async function storeFrontApiTest() {
    // const PS = await ProductController.getProductById({
    //     id: 'gid://shopify/Product/8598241116473'
    // })

    const PS = await ProductController.getAllProducts()

    console.log(JSON.stringify(PS, null, 2), "PS");
    console.log("Hello World");

}

void storeFrontApiTest()