import React,{Component} from "react";
import Data from "../Data";
import './Modal.css';


class Modal extends Component {
  state = {
  }

  
  render() {
    const {
      selectedItemId,
      onClose,
      previousItem,
      nextItem,
      value,
      onChange,
      addtocart,
    } = this.props;

    return (
      <div
        className="modal fade show"
        style={{ display: "block" }}
        id="myModal1"
        role="dialog"
      >
        <div className="previous" onClick={previousItem}>
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="modal-dialog  modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
              <div>
                <button type="button" className="close1" onClick={onClose}>
                  &times;
                </button>
              </div>
              <br></br>
              <figure className="imgdiv img-wrapper">
                <img
                  className="zoomImg"
                  src={Data[selectedItemId].imgsrc}
                  alt="img"
                />
                {/* <ContentZoom
                  style={{marginLeft : '30px'}}
                  className="imgdiv img-wrapper zoomImg"
                  zoomPercent={200}
                  largeImageUrl={Data[selectedItemId].imgsrc}
                  imageUrl={Data[selectedItemId].imgsrc}
                  contentHeight={400}
                  contentWidth={400}
                /> */}
              </figure>
              <br></br>
              <div className="zoomName">{Data[selectedItemId].name}</div>
              <div>{Data[selectedItemId].desc}</div>
              <div className="desc2">{Data[selectedItemId].desc2}</div>
              <h3 className="zoomPrice">
                ${parseFloat(Data[selectedItemId].price).toFixed(2)}
              </h3>
              <label>Qty</label> &nbsp;
              <input
                className="inputQty"
                type="text"
                name="radioid"
                value={value}
                onChange={onChange}
              />
              &nbsp;
              <button onClick={(() => addtocart(selectedItemId), onClose)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="next" onClick={nextItem}>
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    );
  }
}
 
export default Modal;
