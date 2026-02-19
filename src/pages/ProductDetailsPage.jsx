import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function ProductDetailsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const navigate = useNavigate();

    const fetchProduct = () => {
        setIsLoading(true);

        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {

                if (!res.data || Object.keys(res.data).length === 0) {
                    throw new Error('Prodotto non trovato');
                }

                console.log(res.data);
                setProduct(res.data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => { setIsLoading(false) });
    }

    useEffect(fetchProduct, []);

    if (isLoading) return (
        <div className="loading-screen">
            <h1>Loading...</h1>
        </div>
    )

     return (
        error ? navigate('/products') :  <>
            <div className="container py-5">
                <div className="bg-white p-4 rounded-5">
                    <div className="d-flex flex-column-reverse flex-md-row gap-5">
                        <div>
                            <h1 className="mb-3">{product.title}</h1>

                            <p><strong>Categoria:</strong> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>

                            <p><strong>Descrizione:</strong> {product.description}</p>

                            <div className="d-flex justify-content-between">
                                <p>Prezzo <span className="fs-2">{product.price.toFixed(2)} &euro;</span></p>
                                <p>Rating <span className="fs-2">{product.rating.rate}<span className="star-color">&#9733;</span></span></p>
                            </div>
                        </div>
                        <div className="productDetailImage">
                            <img src={product.image} alt={product.title} />
                        </div>
                    </div>

                </div>
            </div>
        </>
       
    )
}