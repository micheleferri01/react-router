import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ProductDetailsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState();

    const fetchProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => { console.log(res.data)
                setProduct(res.data)
             });
    }

    useEffect(fetchProduct, []);

    return <h1>Details Page {id}</h1>
}