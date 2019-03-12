import React from "react";

const SinglePhoto = props => {
  const { url, alt } = props;

  return (
    <li className="masonry_item">
      <img src={url} alt={alt} className="masonry_item_img" />
    </li>
  );
};

export default SinglePhoto;
