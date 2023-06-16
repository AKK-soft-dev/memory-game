export default function Modal({ show, children }) {
  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      id="staticBackdrop"
      style={{
        display: showModal ? "block" : "none",
        top: "50%",
        transform: "translateY(-30%)",
      }}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Downloading resources...
            </h1>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
