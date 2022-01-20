import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Data from '../public/data'

export default function ShopPage() {

    const data = Data
    // console.log(data)
    return (
        <>
            <Navbar />
            <div className='col-12 px-5 mt-5'>
                <div className='row'>
                    {data.map((item) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-12 p-4 p-md-2 p-sm-1" key={item.id}>
                                <div className="card border" style={{ borderRadius: 10, boxShadow: "1px 1px 20px", border: 'solid 1px 1px #000' }}>
                                    {/* <Image className="" width={200} height={100} layout='responsive' style={{ borderRadius: 10, boxShadow: "1px 1px 20px", border: 'solid 1px 1px #000' }} src={"https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_1280.jpg"} /> */}
                                    <img className="card-img-top" style={{ borderRadius: 10, boxShadow: "1px 1px 20px", border: 'solid 1px 1px #000' }} src={item.product_image}></img>
                                    <div className="card-body">
                                        <h5 className='card-title'>{item.product_name}</h5>
                                        <p className="card-text">{item.product_detail}</p>
                                        <a className="btn btn-success">Sell</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
