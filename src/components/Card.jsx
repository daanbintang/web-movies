import React from "react";

const Card = (props) => {
  return (
    <div {...props}> 
      {props.children}
    </div>
  );
};

const CardBody = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

const CardTitle = ({ children }) => {
  return <h1 className="font-bold text-md">{children}</h1>;
};

const CardImg = ({ src, alt, handleImg}) => {
  return (
    <div className="w-32 rounded-xl text-white">
      <img onClick={handleImg} src={`${import.meta.env.VITE_IMGURL}${src}`} alt={alt} className="rounded-xl" />
    </div>
  );
};

export { Card, CardBody, CardImg, CardTitle };
