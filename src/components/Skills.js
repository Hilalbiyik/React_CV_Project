import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className='card light-blue darken-4 z-depth-0'>
          <div className='card-content'>
            <h6 className='white-text'>
              <strong> YETENEKLER</strong>
            </h6>
            <hr/>
            <div className='row-pt'>
              <div className='col m6 s12'>
                <p className='grey-text-lighten-3'>FLUTTER</p>
                <div className='progress white'>
                  <div className='determinate grey' style={{width:'88%'}}></div>
                </div>
              </div>
              <div className='col m6 s12'>
                <p className='grey-text-lighten-3'>HTML</p>
                <div className='progress white'>
                  <div className='determinate grey' style={{width:'60%'}}></div>
                </div>
              </div>
              <div className='col m6 s12'>
                <p className='grey-text-lighten-3'>CSS</p>
                <div className='progress white'>
                  <div className='determinate grey' style={{width:'71%'}}></div>
                </div>
              </div>
              <div className='col m6 s12'>
                <p className='grey-text-lighten-3'>JAVA</p>
                <div className='progress white'>
                  <div className='determinate grey' style={{width:'50%'}}></div>
                </div>
              </div>
              <div className='col m6 s12'>
                <p className='grey-text-lighten-3'>JAVASRİPT</p>
                <div className='progress white'>
                  <div className='determinate grey' style={{width:'50%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
