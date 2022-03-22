import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='card z-depth-0 hide-on-med-and-down pt'>
          <div className='card-content social'>
            <h2 className='grey-text text-darken-3'>
              <strong>HİLAL BIYIK</strong>
            </h2>
            <h5 className="grey-text text-Darken-1">
                Computer Engineer Student
              </h5>
              <a href="https://www.linkedin.com/in/hilalbıyık/" target="blank">
                <i className="fab fa-linkedin fa-2x" ></i>
            
              </a>
              <a href="https://github.com/Hilalbiyik" target="blank">
                <i className=" fab fa-github-square fa-2x"></i>
              </a>
          </div>
        </div>
      </div>
    )
  }
}
