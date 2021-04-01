import React, { Component } from "react";
import "./Header.css";
import Data from "../Data";
import "./Products.css";
import Product from "./Product";
import "./Footer.css";

var countClick = 0;

class Header extends Component {
  state = {
    switch: true,
    Items: [],
    Qty: 1,
  };
  onCartClick = () => {
    if (this.state.switch) {
      this.setState({ switch: false });

      document.getElementById("btn1").style.display = "block";
      // document.getElementById("btn2").style.display = "none";
    } else {
      this.setState({ switch: true });
      // document.getElementById("btn1").style.display = "none";
      document.getElementById("btn2").style.display = "block";
    }
  };

  addtocart = (id, Qty) => {
    console.log(Qty);

    let newItems;

    var temp = 0;
    var that = this;

    if (this.state.Items.length !== 0) {
      this.state.Items.forEach(function (i) {
        if (i.id === id) {
          temp = 1;
        }
        if (temp === 1) {
          return;
        }
      });

      if (temp === 0) {
        let obj = {
          sku: Data[id].id,
          id: Data[id].id,
          img: Data[id].imgsrc,
          name: Data[id].name,
          desc: Data[id].desc,
          price: Data[id].price,
          quantity: parseInt(this.state.Qty),
        };
        newItems = [...this.state.Items, obj];
        this.setState({
          Items: newItems,
          Qty: 1,
        });
      }
    } else {
      let obj = {
        sku: Data[id].id,
        id: Data[id].id,
        img: Data[id].imgsrc,
        name: Data[id].name,
        desc: Data[id].desc,
        price: Data[id].price,
        quantity: parseInt(this.state.Qty),
      };

      newItems = [...this.state.Items, obj];
      console.log("else", newItems);
      this.setState({
        Items: newItems,
        Qty: 1,
      });
    }
    if (temp === 1) {
      this.state.Items.map((i) => {
        if (i.id === id) {
          i.quantity = i.quantity + parseInt(1);
        }
        this.setState({ Qty: i.quantity });
      });

      countClick = countClick + parseInt(1);
    }
    this.setState({ Qty: 1 });
  };

  clearCart = () => {
    this.setState({
      Items: [],
      Qty: 1,
      switch: true,
    });

    countClick = 0;
  };

  minusbtn = (id) => {
    var temp = [...this.state.Items];

    temp[id].quantity = temp[id].quantity - 1;
    // countClick = countClick - 1;
    this.setState({ Items: temp });
  };

  plusbtn = (id) => {
    var temp = [...this.state.Items];

    temp[id].quantity = parseInt(temp[id].quantity) + 1;
    // countClick = parseInt(countClick) + 1;
    this.setState({ Items: temp });
  };

  removeFromCart = (id) => {
    let rows = [...this.state.Items];
    rows.splice(id, 1);
    this.setState({ Items: rows });
  };
  addQty = (e) => {
    this.setState({ Qty: e.target.value });
  };
  render() {
    const subTotal = this.state.Items.reduce(
      (a, c) => a + c.quantity * c.price,
      0
    );
    const Tax = parseFloat(subTotal * 0.065).toFixed(2);
    const total = (parseFloat(subTotal) + parseFloat(Tax)).toFixed(2);
    const quantity = this.state.Items.reduce(
      (a, c) => parseInt(a) + parseInt(c.quantity),
      0
    );

    return (
      <>
        <div className="header">
          <h1>Shopping Cart</h1>
        </div>
        <div>
          {this.state.switch === true ? (
            <div onClick={this.onCartClick} id="btn1">
              <button className="cartbtn">
                <b>
                  {this.state.Items.reduce(
                    (a, c) => parseInt(a) + parseInt(c.quantity),
                    0
                  )}
                  &nbsp;
                  <i className="fa fa-shopping-cart"></i>
                </b>
              </button>
            </div>
          ) : (
            <>
              <div className="cartDiv" id="btn2">
                <button className="cartbtn" onClick={this.onCartClick}>
                  <b>
                    {this.state.Items.reduce(
                      (a, c) => parseInt(a) + parseInt(c.quantity),
                      0
                    )}
                    &nbsp;
                    <i className="fa fa-shopping-cart"></i>
                  </b>
                </button>
                <br />
                {this.state.Items.length > 0 && (
                  <div>
                    {this.state.Items.map((val, id) => {
                      return (
                        this.state.Items[id].quantity > 0 && (
                          <div className="cartItems" key={id}>
                            <div
                              className="cart-img"
                              onClick={() => this.removeFromCart(id)}
                            >
                              <img
                                className="cartimg"
                                src={val.img}
                                alt="img"
                              ></img>
                              <i className="fa fa-times hover1"></i>
                            </div>
                            <div className="addremove">
                              <button
                                className="cartItemBtn"
                                onClick={() => this.minusbtn(id)}
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                              &nbsp;&nbsp;
                              <p style={{ margin: "0px !impoortant" }}>
                                {parseInt(this.state.Items[id].quantity)}
                              </p>
                              &nbsp;&nbsp;
                              <button
                                className="cartItemBtn"
                                onClick={() => this.plusbtn(id)}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                            <div className="cartname">
                              <p>{val.name}</p>
                            </div>
                            <div className="cartprice">
                              <p>${parseFloat(val.price).toFixed(2)}</p>
                            </div>
                          </div>
                        )
                      );
                    })}
                  </div>
                )}

                <hr className="hr" />
                <p style={{ textAlign: "right" }}>
                  <b>${subTotal.toFixed(2)}</b>
                </p>
                <br />
                {quantity > 0 && (
                  <>
                    <button onClick={this.clearCart} className="clearCart">
                      Clear Cart
                    </button>
                    <button
                      className="checkout"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      Checkout
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
        <h1 className="productsHeader">Products</h1>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>

              <div className="modal-body">
                <h1 className="modelHeading">Checkout</h1>
                <div>
                  We accept: <i className="fa fa-cc-visa"></i>&nbsp;
                  <i className="fa fa-cc-mastercard"></i>&nbsp;
                  <i className="fa fa-cc-amex"></i>&nbsp;
                  <i className="fa fa-cc-discover"></i>
                </div>
                <br />
                <h3 className="subtotal">Subtotal: ${subTotal.toFixed(2)}</h3>
                <h3 className="tax">Tax: ${Tax}</h3>
                <h1 className="total">Total: ${total}</h1>
                <br />
                <div>This is where our payment processor goes</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row col-sm-12 col-md-12 col-lg-12">
          {Data.map((value) => {
            return (
              <Product
                data={value}
                key={value.id}
                id={value.id}
                imgsrc={value.imgsrc}
                name={value.name}
                desc={value.desc}
                price={value.price}
                addtocart={this.addtocart}
                Qty={this.state.Qty}
                addQty={this.addQty}
                Items={this.state.Items}
              />
            );
          })}
        </div>

        {this.state.Items.length > 0 && (
          <div className="footer">
            <h1>Checkout Area</h1>
            <div className="checkout-area">
              <span>
                {this.state.Items.reduce(
                  (a, c) => parseInt(a) + parseInt(c.quantity),
                  0
                )}
              </span>
              <i className="fa fa-shopping-cart"></i>
              <table>
                <thead>
                  <tr>
                    <th className="align-center">SKU</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th className="align-right">quantity</th>
                    <th className="align-right">Price</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.Items.map((val, id) => {
                    return (
                      this.state.Items[id].quantity > 0 && (
                        <tr key={id}>
                          <td className="align-center">{val.sku}</td>
                          <td>{val.name}</td>
                          <td>{val.desc}</td>
                          <td className="align-right">
                            {this.state.Items[id].quantity}
                          </td>
                          <td className="align-right">
                            ${parseFloat(val.price).toFixed(2)}
                          </td>
                        </tr>
                      )
                    );
                  })}
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="align-right">Subtotal:</td>
                    <td className="align-right">
                      <h4>${subTotal.toFixed(2)}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="align-right">Tax:</td>
                    <td className="align-right">
                      <h4>${Tax}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="align-right vert-bottom">Total:</td>
                    <td className="align-right vert-bottom">
                      <h2> ${total} </h2>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button data-toggle="modal" data-target="#myModal">
                Checkout
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Header;
