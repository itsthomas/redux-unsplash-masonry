import React, { Component } from "react";

import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { fetchPhotos } from "../actions/photoActions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.props);
  // }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // Here we pass this.state.term to fetchPothos action-creator function inside photoActions.js
    this.props.fetchPhotos(this.state.term);

    // Optional
    this.setState({
      term: ""
    });
  }

  render() {
    return (
      <div className="header">
        <h1>Search for images on Unsplash</h1>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <input
            placeholder="Type your request"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

/* ============================================================
SOLOUTION 1 - Using mapDispatchToProps and bindActionCreators
============================================================= */
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPhotos }, dispatch);
// }

// export default connect(
//   null,
//   mapDispatchToProps
// )(SearchBar);

/* ============================================================
SOLOUTION 2 - Using mapStateToProps and mapDispatchToProps
============================================================= */
// const mapStateToProps = state => ({
//   photos: state.photos
// });

// const mapDispatchToProps = dispatch => ({
//   fetchPhotos: term => dispatch(fetchPhotos(term))
//   // ...Other actions from other files
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SearchBar);

/* =========================================
SOLOUTION 3 - Using mapStateToProps only
========================================= */
// function mapStateToProps(state) {
//   return { photos: state.photos };
// }

// export default connect(
//   mapStateToProps,
//   { fetchPhotos }
// )(SearchBar);

/* =========================================
SOLOUTION 4 - Using mapStateToProps only
========================================= */
function mapStateToProps(photos) {
  return { photos };
}

export default connect(
  mapStateToProps,
  { fetchPhotos }
)(SearchBar);
