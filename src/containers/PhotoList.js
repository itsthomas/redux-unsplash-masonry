import React, { Component } from "react";
import { connect } from "react-redux";
import Masonry from "react-masonry-component";

import SinglePhoto from "../components/SinglePhoto";

const masonryOptions = {
  transitionDuration: 1
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class PhotoList extends Component {
  renderPhotos() {
    // Destructuring. we put this.props.photos in photos
    const { photos } = this.props;

    if (!photos) {
      return <div className="loader">Loading...</div>;
    }

    return photos.map(photo => {
      const url = photo.urls.full;
      const id = photo.id;
      const alt = photo.description;
      return <SinglePhoto url={url} key={id} alt={alt} />;
    });
  }

  render() {
    return (
      <Masonry
        className={"masonry"} // default ''
        elementType={"ul"} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {this.renderPhotos()}
      </Masonry>
    );
  }
}

function mapStateToProps(photos) {
  return { photos };
}

export default connect(mapStateToProps)(PhotoList);
