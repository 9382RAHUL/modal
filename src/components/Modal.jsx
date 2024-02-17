import React from "react";
const Modal = ({ id, header, footer, body }) => {
  return (
    <>
      <div id={id || "Modal"} className="modal">
        <div className="content">
          <div className="header">
            <span className="close-modal-icon">&times</span>
            <h2>{header ? header : "Header"}</h2>
          </div>
          <div className="body">
            {body ? (
              body
            ) : (
              <div>
                <p>This is modal body</p>
              </div>
            )}
          </div>
          <div className="footer">
            {
                footer? footer: <h2>Hello footer</h2>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
