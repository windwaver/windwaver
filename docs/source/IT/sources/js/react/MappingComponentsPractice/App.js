import React from "react"
import Product from "./Product"
import productsData from "./vschoolProducts"

const productComponents = productsData.map(item => <Product key={item.id} product={item} />)

function App() {
    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App