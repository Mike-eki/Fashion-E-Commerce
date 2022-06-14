import { useState } from "react";
import ProductCard from "./ProductCard";
import './Showcase.css';

const Showcase = () => {

    const imgExamples = [
    'https://i.pinimg.com/564x/5b/8f/4a/5b8f4a2725b3b52cb28f8a37b72c96d0.jpg',
    'https://i.pinimg.com/564x/cc/15/f3/cc15f330691aa09baef5a51f0ba3754c.jpg',
    'https://i.pinimg.com/564x/5c/22/50/5c22509c49fb31cbedc13368ef2ed85c.jpg',
    'https://i.pinimg.com/564x/7f/52/02/7f5202ee2f1c795ff3e1e9bfde600357.jpg',
    'https://i.pinimg.com/564x/68/fc/da/68fcda686724b1e1d539adcb3a77226c.jpg',
    'https://i.pinimg.com/564x/a0/88/0f/a0880f386834de63d63dde75d76a137f.jpg',
    'https://i.pinimg.com/564x/04/fa/24/04fa24e110442302248f47ab453d8184.jpg',
    'https://i.pinimg.com/564x/85/4c/3f/854c3ff2dd729ca9db9c8f87b347daec.jpg',
    'https://i.pinimg.com/564x/62/52/fa/6252fa87b5a704447811e24da21b543c.jpg',
    'https://i.pinimg.com/564x/63/b3/fd/63b3fd395a96d911f1ca7b20c2e07396.jpg'
    ]

    const [clothImg, setClothImg] = useState(imgExamples)


    return(
        
            <section className="showcase-grid">
                {clothImg.map(singleImg => {
                    return(
                        <ProductCard key={singleImg} img={singleImg} />
                    )
                })}
            </section>
    )
}

export default Showcase;