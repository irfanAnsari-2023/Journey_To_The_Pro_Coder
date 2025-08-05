const ProductInfo = ()=> {
    const product = {
        "name": "laptop",
        "price": 120000,
        "Availability": "In Stock"
    }

    return <div>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.Availability}</p>

    </div>
}

export default ProductInfo;