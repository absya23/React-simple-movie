import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-6xl text-primary mb-10">404 NOT FOUND</h1>
      <p>
        Quay về trang chủ{" "}
        <Link to="/" className="text-secondary">
          tại đây
        </Link>
      </p>
    </div>
  );
};

export default Notfound;
