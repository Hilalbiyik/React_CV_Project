import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className='card light-blue darken-4 z-depth-0'>
          <div className='card-content'>
            <h6 className='white-text'>
                <strong> İLETİŞİM</strong>
            </h6>
            <hr />
            <p className='grey-text tex-lighten-3 pt'>
              Adres: Edirne / Merkez
              <br/>
              Telefon: +1 234 567 89
              <br/>
              E-mail: hhilalbiyik@gmail.com
            </p>
              
          </div>
        </div>
      </div>
    )
  }
}
