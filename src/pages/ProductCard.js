import './ProductCard.css';

const ProductCard = ({img}) => {

    return (
        <article className="product-card">
            <header className='product-tags'>
                <sup>New</sup>
                <sup> Hot</sup>
            </header>
            <img className="product-img" src={img}></img>
            <section className='product-content'>
                <main className='product-summary'>
                    <h1 className="product-name">Current product name</h1>
                    <span className="product-price">$11.99</span>
                </main>
                <footer className='options'>
                    <h2 className='options-type'>Size</h2>
                    <ul className='options-list'>
                        <li className='size'>XL</li>
                        <li className='size'>L</li>
                        <li className='size'>S</li>
                        <li className='size'>M</li>
                    </ul>
                    <h2 className='options-type'>Color</h2>
                    {/* Puede que no séa viable poner que elija colores
                    debido a que si pide + de 1, seria del mismo color. */}
                    <ul className='options-list'>
                        <li className='color blue'></li>
                        <li className='color red'></li>
                        <li className='color green'></li>
                        <li className='color yellow'></li>
                    </ul>
                    <div className='options-buttons'>
                        <button className="add-to-cart">Add to cart</button>
                    </div>
                </footer>
            </section>
        </article>
        
    )
}

export default ProductCard;