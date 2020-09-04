import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadImg } from '../store/actions/projectActions';

class UploadImg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      url: null,
      progress: 0,
    };
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      this.setState({
        image: e.target.files[0],
      });
    }
  };

  handleSubmit = (e) => {
    this.props.uploadImg(this.state);
  };

  render() {
    return (
      <div>
        <input type="file" name="" id="" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Upload</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  uploadImg,
};

export default connect(null, mapDispatchToProps)(UploadImg);
