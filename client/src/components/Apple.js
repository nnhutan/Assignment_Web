import React from 'react';
import Product from './Product';
import ListApple from './ListApple';
export default function Aplle() {
    return ( 
        <>
        <div className="top-selling bg-white mb-5" >
        <h3 className="text-center py-4" >Các sản phẩm của Apple</h3>
        <div className="container" >
            <div className="row g-2" > {
                ListApple.map((product) => (
                    <div className="col-lg-3" >
                        <Product product={product} />
                    </div>
                ))
            } </div>
        </div>
    </div>
        </>
    )
}
