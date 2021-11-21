import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import "./News.css";
function NewsPage() {
return (
    <div>
<div className="container" style={{marginTop:"4rem"}}>
            <div className="row align-middle">
              <div className="col-lg-4">
                <div className="d-flex position-relative float-left">
                  <h3 className="section-title">Tin tức công nghệ</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-5 mb-sm-5">
                <div className="position-relative image-hover">
                  <img
                    src={"./img/hp-envy-13-ba0046tu-i5-171m7pa-225859-600x600.jpg"}
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">NEWS</span>
                </div>
                <h5 className="font-weight-bold mt-3" style={{fontFamily:"Montserrat",fontSize:"30px"}}>
                  Refugees flood Turkey's border with Greece
                </h5>
                <h5 className="fs-15 font-weight-normal" style={{fontFamily:"Montserrat",fontSize:"20px"}}>
                  Lorem Ipsum has been the industry's standard dummy text
                </h5>
                <a href="#" className="font-weight-bold text-dark pt-2" style={{fontFamily:"Montserrat",textDecoration:"none",fontSize:"20px"}}>Read Article</a>
              </div>
              <div className="col-lg-6  col-md-11 mb-5 mb-sm-2">
                <div className="row">
                <div className="col-md-12 col-lg-12 column" style={{height:"20vh"}}>
                <div className="card gr-1" style={{height:"11vh"}}>
                  <div className="col-lg-8 txt">
                    <h1>BRANDING AND BLA
          CORPORATE DESIGN</h1>
                  </div>
                  <div className="row">
                      <div className="col-lg-6"><small className="txt"><AiOutlineClockCircle /> October 15, 2020</small></div>
                  </div>
                  <small className="txt"><BsPersonCircle /> Nam Nguyễn</small>
                  <a href="#">more</a>
                  {/* <img className="col-lg-4" src={"./img/testimonials-1.jpg"} alt="Card image" /> */}
                </div>
              </div>
                </div>
                <div className="row">
                <div className="col-md-12 col-lg-12 column" style={{height:"20vh"}}>
                <div className="card gr-2" style={{height:"10vh"}}>
                  <div className="col-lg-8 txt">
                    <h1>BRANDING AND BLA
          CORPORATE DESIGN</h1>
                  </div>
                  <div className="row">
                      <div className="col-lg-6"><small className="txt"><AiOutlineClockCircle /> October 15, 2020</small></div>
                  </div>
                  <small className="txt"><BsPersonCircle /> Nam Nguyễn</small>
                  <a href="#">more</a>
                  {/* <img className="col-lg-4" src={"./img/testimonials-1.jpg"} alt="Card image" /> */}
                </div>
              </div>
                </div>
                <div className="row">
                <div className="col-md-12 col-lg-12 column" style={{height:"20vh"}}>
                <div className="card gr-3" style={{height:"10vh"}}>
                  <div className="col-lg-8 txt">
                    <h1>BRANDING AND BLA
          CORPORATE DESIGN</h1>
                  </div>
                  <div className="row">
                      <div className="col-lg-6"><small className="txt"><AiOutlineClockCircle /> October 15, 2020</small></div>
                  </div>
                  <small className="txt"><BsPersonCircle /> Nam Nguyễn</small>
                  <a href="#">more</a>
                  {/* <img className="col-lg-4" src={"./img/testimonials-1.jpg"} alt="Card image" /> */}
                </div>
              </div>
                </div>
              </div>
            </div>
</div>
<div style={{marginTop:"3rem"}}>
<section className="wrapper mb-5 mt-5">
  <div className="container">
  <div className="row align-middle">
              <div className="col-lg-3">
                <div className="d-flex position-relative float-left">
                  <h3 className="section-title">Tin tức sản phẩm</h3>
                </div>
              </div>
            </div>
  <div className="row">
  <div className="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                  <img
                    src={"./img/testimonials-1.jpg"}
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">TRAVEL</span>
                </div>
                <h5 className="font-weight-bold mt-3" style={{fontFamily:"Montserrat"}}>
                  Refugees flood Turkey's border with Greece
                </h5>
                <h5 className="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </h5>
                <a href="#" className="font-weight-bold text-dark pt-2" style={{fontFamily:"Montserrat",textDecoration:"none"}}>Read Article</a>
              </div>
              <div className="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                  <img
                    src={"./img/testimonials-1.jpg"}
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">TRAVEL</span>
                </div>
                <h5 className="font-weight-bold mt-3" style={{fontFamily:"Montserrat"}}>
                  Refugees flood Turkey's border with Greece
                </h5>
                <h5 className="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </h5>
                <a href="#" className="font-weight-bold text-dark pt-2" style={{fontFamily:"Montserrat",textDecoration:"none"}}>Read Article</a>
              </div>
              <div className="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                  <img
                    src={"./img/testimonials-1.jpg"}
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">TRAVEL</span>
                </div>
                <h5 className="font-weight-bold mt-3" style={{fontFamily:"Montserrat"}}>
                  Refugees flood Turkey's border with Greece
                </h5>
                <h5 className="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </h5>
                <a href="#" className="font-weight-bold text-dark pt-2" style={{fontFamily:"Montserrat",textDecoration:"none"}}>Read Article</a>
              </div>
              <div className="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2">
                <div className="position-relative image-hover">
                  <img
                    src={"./img/testimonials-1.jpg"}
                    className="img-fluid"
                    alt="world-news"
                  />
                  <span className="thumb-title">TRAVEL</span>
                </div>
                <h5 className="font-weight-bold mt-3" style={{fontFamily:"Montserrat"}}>
                  Refugees flood Turkey's border with Greece
                </h5>
                <h5 className="fs-15 font-weight-normal">
                  Lorem Ipsum has been the industry's standard dummy text
                </h5>
                <a href="#" className="font-weight-bold text-dark pt-2" style={{fontFamily:"Montserrat",textDecoration:"none"}}>Read Article</a>
              </div>
</div>
</div>
</section>
</div>
    </div>
);
}
export default NewsPage