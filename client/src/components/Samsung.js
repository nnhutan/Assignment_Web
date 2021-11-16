import React from 'react';
import Product from './Product';
import ListSamsung from './ListSamsung';
export default function samsung() {
    return ( 
        <>
        <div className="top-selling bg-white mb-5" >
        <h3 className="text-center py-4" >Các sản phẩm của SamSung</h3>
        <div className="container" >
            <div className="row g-2" > {
                ListSamsung.map((product) => (
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
