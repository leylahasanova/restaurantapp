import React, { Component } from 'react';

export default class Model extends Component {
  render() {
    // const { img, hide, images } = this.props;
    let modelStyle = {
      display: 'block',
      backgroundColor: 'rgba(0,0,0,0.8)',
    };

    return (
      <div className="modal show fade" style={modelStyle} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">            
              <div >
                <div className="modal-header">
                  <h5 className="modal-title">{this.props.name}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.hide}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                   <img src={this.props.img} className="img-fluid" alt="img" />                 
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
