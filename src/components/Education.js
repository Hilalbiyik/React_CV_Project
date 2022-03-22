import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-graduation-cap"></i> EĞİTİM
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col-s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>Trakya Üniversitesi - Bilgisayar Mühendisliği</strong>
                    <span>09.2018 - 06.2022</span>
                  </h6>
                  <p className="pt">Lisans Eğitimi</p>
                </blockquote>
              </div>
            </div>
            <div className="row mt">
              <div className="col-s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>Edirne Lisesi</strong>
                    <span>09.2013- 06.2017</span>
                  </h6>
                  <p className="pt">Lise Eğitimi</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
