import React from "react";

function PageHeader({ heading, para, buttons = [] }) {
  return (
    <div className="bg-primary-10 relative py-[5rem]">
      <div className="container text-center z-10 relative">
        <h1 className="mb-4 leading-snug">
          {heading.normal}
          <br/>
          <span className="text-primary-100">{heading.colored}</span>
        </h1>
        <p className="text-base max-w-[600px] mx-auto">{para}</p>
      </div>
    </div>
  );
}

export default PageHeader;
