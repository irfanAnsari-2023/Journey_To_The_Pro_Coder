const ProductList = ()=>{ 
const products = [
        {
            id: 1,
            name: "phone",
           price: "20000"
        },
        {
            id: 2,
            name: "Laptop",
             price: "20000"
        },
        {
            id: 3,
            name: "Headphones",
             price: "20000"
        }
    ]

    return <div>
        {products.map(({id, name, price})=>(
            <ul key={id}>
                <li>{name}</li>
                <li>{price}</li>
            </ul>
        ))}
    </div>
}

export default ProductList;