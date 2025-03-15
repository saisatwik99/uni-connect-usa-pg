import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";

const StateModal = (props) => {
  const [pdfExists, setPdfExists] = useState(true);
  const stateName = props.content.name;
  
  // Handle special case for Virginia (typo in filename)
  const pdfFileName = stateName === "Virginia" 
    ? "Virginia app contert.pdf" 
    : `${stateName} app content.pdf`;
    
  const pdfPath = `/USA_States_app content/${pdfFileName}`;

  useEffect(() => {
    // Reset PDF exists state when modal content changes
    setPdfExists(true);
  }, [props.content]);

  const handlePdfError = () => {
    setPdfExists(false);
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        scrollable={true}
        aria-labelledby="contained-modal-title-vcenter"
        className="custom-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {stateName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content">
            {pdfExists ? (
              <div className="embedded-pdf-container">
                <iframe
                  src={`${process.env.PUBLIC_URL}${pdfPath}#toolbar=0&navpanes=0&scrollbar=0`}
                  title={`${stateName} Information`}
                  className="embedded-pdf"
                  frameBorder="0"
                  onError={handlePdfError}
                />
              </div>
            ) : (
              <div className="no-content-message">
                <p>No detailed information is available for {stateName} at this time.</p>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StateModal; 