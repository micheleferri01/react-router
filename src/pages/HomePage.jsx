import { Link } from "react-router-dom"

export default function HomePage() {
    return (

        <section className="container p-4 bg-white my-4 rounded-5">
            <h1>Benvenuto nel nostro store online</h1>

            <p className="fs-5">Siamo felici di averti qui! Nel nostro shop troverai prodotti selezionati con cura, qualità garantita e offerte pensate apposta per te.</p>

            <p className="fs-5">Inizia subito a esplorare il catalogo e lasciati ispirare.</p>

            <p className="fs-5">Il tuo prossimo acquisto perfetto ti sta aspettando!</p>

            <p className="fs-4 fw-bold">Buono shopping!</p>

            <div>
                <Link className="btn btn-primary" to="/products">Vai ai prodotti</Link>
            </div>
        </section>


    )


}