import Header from "../components/Header";
import Slider from "../components/Slider";
import TopHeader from "../components/TopHeader";
import TopSellingPoducts from "../components/TopSellingPoducts";
import NewProducts from "../components/NewProducts";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="cart-page">
      <Header currPage="cart" />
      <div className="container">
        <h3 className="text-center my-3">Giỏ hàng</h3>
        <hr />
        <div className="cart-container">
          <div className="cart-head">
            <div className="table-responsive">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col" style={{ width: "120px" }}>
                      Tùy chọn
                    </th>
                    <th scope="col" style={{ width: "120px" }}>
                      Hình ảnh
                    </th>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col" style={{ width: "120px" }}>
                      Số lượng
                    </th>
                    <th scope="col">Giá</th>
                    <th scope="col" className="text-right">
                      Tổng tiền
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <a href="#" className="text-danger">
                        <i class="bi bi-trash"></i>
                      </a>
                    </td>
                    <td>
                      <img
                        src="https://themesbox.in/admin-templates/olian/html/light-vertical/assets/images/ecommerce/product_01.svg"
                        className="img-fluid"
                        width="35"
                        alt="product"
                      />
                    </td>
                    <td>Apple Watch</td>
                    <td>
                      <div className="form-group mb-0">
                        <input
                          type="number"
                          className="form-control cart-qty"
                          name="cartQty1"
                          id="cartQty1"
                          value="1"
                        />
                      </div>
                    </td>
                    <td>$10</td>
                    <td className="text-right">$500</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <a href="#" className="text-danger">
                        <i class="bi bi-trash"></i>
                      </a>
                    </td>
                    <td>
                      <img
                        src="https://themesbox.in/admin-templates/olian/html/light-vertical/assets/images/ecommerce/product_02.svg"
                        className="img-fluid"
                        width="35"
                        alt="product"
                      />
                    </td>
                    <td>Apple iPhone</td>
                    <td>
                      <div className="form-group mb-0">
                        <input
                          type="number"
                          className="form-control cart-qty"
                          name="cartQty2"
                          id="cartQty2"
                          value="1"
                        />
                      </div>
                    </td>
                    <td>$20</td>
                    <td className="text-right">$200</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <a href="#" className="text-danger">
                        <i class="bi bi-trash"></i>
                      </a>
                    </td>
                    <td>
                      <img
                        src="https://themesbox.in/admin-templates/olian/html/light-vertical/assets/images/ecommerce/product_03.svg"
                        className="img-fluid"
                        width="35"
                        alt="product"
                      />
                    </td>
                    <td>Apple iPad</td>
                    <td>
                      <div className="form-group mb-0">
                        <input
                          type="number"
                          className="form-control cart-qty"
                          name="cartQty3"
                          id="cartQty3"
                          value="1"
                        />
                      </div>
                    </td>
                    <td>$30</td>
                    <td className="text-right">$300</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr />
          <div className="cart-body">
            <div className="row">
              <div className="col-md-12 order-2 order-lg-1 col-lg-5 col-xl-6">
                <div className="order-note">
                  <form>
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Mã giảm giá"
                          aria-label="Search"
                          aria-describedby="button-addonTags"
                        />
                        <div className="input-group-append">
                          <button
                            className="input-group-text rounded-0 rounded-end"
                            type="submit"
                            id="button-addonTags"
                          >
                            Áp dụng
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="specialNotes" className="mt-2 mb-1">
                        Ghi chú:
                      </label>
                      <textarea
                        className="form-control"
                        name="specialNotes"
                        id="specialNotes"
                        rows="3"
                        placeholder="Ghi chú"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-12 order-1 order-lg-2 col-lg-7 col-xl-6">
                <div className="order-total table-responsive ">
                  <table className="table table-borderless text-right">
                    <tbody>
                      <tr>
                        <td>Tổng tiền hàng:</td>
                        <td>$1000.00</td>
                      </tr>
                      <tr>
                        <td>Vận chuyển:</td>
                        <td>$0.00</td>
                      </tr>
                      <tr>
                        <td>VAT (18%):</td>
                        <td>$180.00</td>
                      </tr>
                      <tr>
                        <td className="">
                          <h4>Tổng:</h4>
                        </td>
                        <td className="">
                          <h4>$1180.00</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="cart-footer d-flex justify-content-end">
            <button type="button" className="btn btn-info my-1 me-2">
              <i class="bi bi-file-earmark-plus me-2"></i>Update Cart
            </button>
            <Link to="/checkout" className="btn btn-success my-1">
              Proceed to Checkout
              <i class="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
