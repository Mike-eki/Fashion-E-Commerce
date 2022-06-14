import './ProductCard.css';
import { useState } from 'react';

const ProductCard = ({img}) => {

    const [amount, setAmount] = useState(0);

    const increase = () => {
        setAmount(amount + 1)
    }
    const decrease = () => {
        if (amount > 0) setAmount(amount - 1)
    }
    const zero = () => {
        if(amount < 0) setAmount(amount + amount)
    }


    return (
        <article className="product-card">
            <header className='product-tags'>
                <sup>New</sup>
                <sup> Hot</sup>
            </header>
            <img className="product-img" src={img}></img>
            <section className='product-content'>
                <h1 className="product-name">Product name simple as possible</h1>
                <span className="product-price">$11.99</span>
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
                        <div className='amount-buttons'>
                            <button className='amount-op left' onClick={decrease}> - </button>
                            <input className="amount" onChange={zero} value={amount} ></input>
                            <button className='amount-op rigth' onClick={increase}> + </button>
                        </div>
                        <div>
                            <button className="add-to-cart">Add to cart</button>
                        </div>
                    </div>
                </footer>
            </section>
        </article>
        
    )
}

export default ProductCard;