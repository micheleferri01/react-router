import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ProductsPage() {

    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data)
                console.log(res.data)
            })
            .catch((err) => (setError(true)));
    }, [])

    return (
        <>
            {error && <>
                <div className="alert alert-danger my-3 text-center">Si è verificato un error durante il caricamento. Riprova.</div>
            </>}
            {error === false && <div className="container-fluid py-4 bg-orange">
                <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
                    {products.map((product) => (
                        <div key={product.id} className="col">
                            <Link to={`/products/${product.id}`} className="text-decoration-none">
                                <div className="card pt-3 h-100">
                                    <div className="productCard-image mx-auto">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <h1 className="fs-5 card-title align-self-center">{product.title}</h1>
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-4 align-self-end">{product.rating.rate}<span className="star-color">&#9733;</span></p>
                                            <p className="d-flex flex-column">prezzo <span className="fs-4">{product.price.toFixed(2)} &euro;</span></p>
                                        </div>
                                    </div>
                                </div>
                            </Link>



                        </div>))}
                </div>
            </div >}
        </>

    )
}