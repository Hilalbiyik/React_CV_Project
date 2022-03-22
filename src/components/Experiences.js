import React, { Component } from 'react'

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <h6>
              <strong>
                <i className='fas fa-tools'> DENEYİMLER</i>
              </strong>
            </h6>
            <hr/>
            <div className='row mt'>
              <div className='col-s12'>
                <blockquote className='content-right'>
                  <h6 className='no-pad mt-bottom'>
                    <strong>Google Oyun ve Uygulama Akademisi</strong>
                    <span>01.12.2021 - 01.06.2022</span>
                  </h6>
                  <p>
                    Google Türkiye,Türkiye Girişimcilik Vakfı,T3 Girişim Merkezi, T.C Sanayi ve Teknoloji Bakanlığı,T.C Cumhurbaşkanlığı Dijital Dönüşüm Ofisi destekleriyle hayata geçirilen bu akademinin bir katılımcısıyım.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className='row mt'>
              <div className='col-s12'>
                <blockquote className='content-right'>
                  <h6 className='no-pad mt-bottom'>
                    <strong>Trakya Teknopark / Aloha Akademi</strong>
                    <span>01.08.2021 - 01.09.2021</span>
                  </h6>
                  <p>
                    Zorunlu stajımı yaz döneminde Trakya Teknoparkta gerçekeştirdim.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
