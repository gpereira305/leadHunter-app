import React from "react";

const LeadFooter = () => {
  const updatedDate = new Date().getFullYear();

  return (
    <footer className="lead-footer">
      <div className="d-flex justify-content-center lead-footer__text">
        <div>
          <small> &copy; {updatedDate} | LeadHunter, All rights reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default LeadFooter;
