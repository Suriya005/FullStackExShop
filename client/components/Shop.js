import React from 'react'
import Image from 'next/image'

export default function Shop() {
    return (
        <div className='col-12 pt-5 mx-2' id='test'>
            <div className="col-lg-4 col-md-6 col-sm-12" id='test'>
                <div className="card" id='test'>
                    <Image className="card-img-top" width={200} height={100} layout='responsive' src={"https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_1280.jpg"} />
                    <div className="card-body">
                        <h5 className='card-title'>Strawberry</h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem? Obcaecati vel maxime odit. Distinctio pariatur officiis voluptas commodi ea.</p>
                        <a className="btn btn-primary">test123</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
