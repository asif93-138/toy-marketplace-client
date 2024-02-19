import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-5">
      <section className="container d-md-flex align-items-center px-0 py-3">
      <h3 className="logo-txt m-0 border-end border-white p-3 ps-sm-0 pe-sm-5 py-sm-4 text-center text-md-start"><b>Learning Toys World</b></h3>
     <article className="fl-sp">
     <p className="text-center">
      <i className="bi px-3 fs-3 bi-facebook"></i>
      <i className="bi px-3 fs-3 bi-linkedin"></i>
      <i className="bi px-3 fs-3 bi-youtube"></i>
      </p>
      <p className='m-0'>Toy Company, Dhaka, BD.</p>
      <p className='m-0'>Email : someone@exapmle.com</p>
      <p className='m-0'>Phone : 011-XXXXXXXXX</p>
     </article>
      </section>
      <p className="text-center text-bg-primary m-0 py-2">Copyright &#169; 2024</p>
    </footer>
  );
}
