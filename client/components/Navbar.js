import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <Link href="/">
                        <a className="navbar-brand ms-5">LOGO</a>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link active" aria-current="page">
                                        หน้าหลัก
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page">
                                    โปรโมชั่น
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page">
                                    สินค้าทั้งหมด
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page">
                                    เกี่ยวกับเรา
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page">
                                    ติดต่อเรา
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                            <Link href="/cart">
                                <li className="nav-item d-flex justify-content-center align-items-center">
                                    {/* <AiOutlineShoppingCart /> */}
                                    <span className="badge badge-danger navbar-badge bg-danger">
                                        {/* {getItemsCount()} */}
                                    </span>
                                </li>
                            </Link>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Login / Register
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item">login</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item">register</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}
