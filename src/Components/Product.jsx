import React, { Component } from "react";
import "./Product.css";
import ReactImageMagnify from "react-image-magnify";
import Data from "../Data";
import Modal from "./Modal";
import Images from './Images'


class Product extends Component {
  state = {
    selectedImg: Images[0],
    isModelOpen: false,
    selectedItemId: null,
    imgsrc: null,
    desc: null,
    price: null,
    name: null,
  };

  handleChange = (id) => {
    this.setState({
      isModelOpen: true,
      selectedItemId: id,
      name: Data[id].name,
      imgsrc: Data[id].imgsrc,
      desc: Data[id].desc,
      price: Data[id].price,
    });
  };

  previousItem = (id) => {
    const lastIndex = Data.length - 1;
    const { selectedItemId } = this.state;
    const shouldResetIndex = selectedItemId === 0;
    const index = shouldResetIndex ? lastIndex : selectedItemId - 1;

    this.setState({
      selectedItemId: index,
    });

    console.log(this.state.selectedItemId);
  };

  nextItem = (id) => {
    const lastIndex = Data.length - 1;
    const { selectedItemId } = this.state;
    const shouldResetIndex = selectedItemId === lastIndex;
    const index = shouldResetIndex ? 0 : selectedItemId + 1;

    this.setState({
      selectedItemId: index,
    });

    console.log(this.state.selectedItemId);
  };

  onClose = () => {
    this.setState({ isModelOpen: false });
  };

  mouseMove = (e) => {
    document.getElementById("module").style.backgroundPositionX =
      -e.offsetX + "px";
    document.getElementById("module").style.backgroundPositionY =
      -e.offsetY + "px";
  };

  change = (src) => {
    console.log(src);
    document.getElementById("module").src = src;
  };
  render() {
    return (
      <>
        <div className="card">
          <div className="card-img">
            <img src={this.props.imgsrc} alt="1" />

            <div
              className="hover"
              // data-toggle="modal"
              // data-target="#myModal1"
              onClick={() => this.handleChange(this.props.id)}
            >
              <i className="fa fa-search-plus"></i>
            </div>
          </div>
          <div className="card-body">
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              {this.props.name}
            </span>
            <h3 style={{ fontSize: "16px" }}> {this.props.desc}</h3>
            <h4 style={{ fontSize: "16px", fontWeight: "bold" }}>
              ${parseFloat(this.props.price).toFixed(2)}
            </h4>
            <button
              className="cardbtn"
              onClick={() =>
                this.props.addtocart(this.props.id, this.props.Qty)
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
        {/* {this.state.isModelOpen && (
        
          <Modal
            selectedItemId={this.state.selectedItemId}
            onClose={this.onClose}
            previousItem={this.previousItem}
            nextItem={this.nextItem}
            value={this.props.qty}
            onChange={this.props.addQty}
            addtocart={this.props.addtocart}
          />
        )} */}


        {this.state.isModelOpen && (
          <>
            <div
              className="modal fade show"
              style={{ display: "block" }}
              id="myModal1"
              role="dialog"
            >
              <div className="previous" onClick={this.previousItem}>
                <i className="fa fa-angle-left"></i>
              </div>
              <div className="modal-dialog  modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-body">
                    <div>
                      <button
                        type="button"
                        className="close1"
                        onClick={this.onClose}
                      >
                        &times;
                      </button>
                    </div>
                    <br></br>
                    <figure className="imgdiv img-wrapper" id="module">
                      <ReactImageMagnify
                        {...{
                          enlargedImageContainerStyle: {
                            border: "none",
                            left: "0px",
                            marginLeft: "-1px",
                          },
                          smallImage: {
                            alt: "Wristwatch by Versace",
                            isFluidWidth: true,
                            src:
                              this.state.selectedItemId === 0
                                ? this.state.selectedImg
                                : Data[this.state.selectedItemId].imgsrc,
                            srcSet:
                              this.state.selectedItemId === 0
                                ? this.state.selectedImg
                                : Data[this.state.selectedItemId].imgsrc,
                          },
                          largeImage: {
                            src:
                              this.state.selectedItemId === 0
                                ? this.state.selectedImg
                                : Data[this.state.selectedItemId].imgsrc,
                            width: 800,
                            height: 800,
                          },
                          lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                        }}
                      />
                    </figure>
                    {this.state.selectedItemId === 0 && (
                      <div className="monkeyDiv">
                        {Images.map((img, index) => (
                          <img
                            src={img}
                            alt="images"
                            key={index}
                            onClick={() => this.setState({ selectedImg: img })}
                          ></img>
                        ))}
                      </div>
                    )}
                    <br></br>
                    <div className="zoomName">
                      {Data[this.state.selectedItemId].name}
                    </div>
                    <div>{Data[this.state.selectedItemId].desc}</div>
                    <div className="desc2">
                      {Data[this.state.selectedItemId].desc2}
                    </div>
                    <h3 className="zoomPrice">
                      $
                      {parseFloat(
                        Data[this.state.selectedItemId].price
                      ).toFixed(2)}
                    </h3>
                    <label>Qty</label> &nbsp;
                    <input
                      className="inputQty"
                      id="inputQty"
                      type="text"
                      name="radioid"
                      value={this.props.Qty}
                      onChange={this.props.addQty}
                    />
                    &nbsp;
                    <button
                      onClick={
                        () => {
                          this.props.addtocart(
                            this.state.selectedItemId,
                            this.props.Qty
                          ); this.onClose();
                        }
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="next" onClick={this.nextItem}>
                <i className="fa fa-angle-right"></i>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Product;

 