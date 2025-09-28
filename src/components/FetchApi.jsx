import React, { useEffect, useState } from 'react';

export const FetchApi = () => {
    const [productsData, setProductsData] = useState([]);

    async function getData(url) {
        try {
            const data = await fetch(url);
            const response = await data.json();
            console.log(response.products);
            setProductsData(response.products);
        } catch (err) {
            console.log("Error occurred", err);
        }
    }

    useEffect(() => {
        getData('https://dummyjson.com/products');
    }, []);

    return (
        <>
            <div>MainPage</div> 
            <hr />
            <div className=''>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {productsData.map((product) => (
                        <div className="col" key={product.id}>
                            <div
                                className="card"
                                style={{ width: '17rem', fontSize: '0.9rem' /* smaller font */ }}
                            >
                                <img
                                    src={product.images[0]} // product.images is an array, use first image
                                    className="card-img-top"
                                    alt={product.title}
                                    style={{
                                        width: '100%',
                                        height: '180px',          // fixed height for the card image
                                        objectFit: 'cover',       // cover the container, crop if needed
                                        borderTopLeftRadius: '.25rem',
                                        borderTopRightRadius: '.25rem',
                                    }} // smaller and nicely fit image
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
