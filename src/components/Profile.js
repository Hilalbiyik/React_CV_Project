import React, { Component } from "react";
import ImgProfile from "../components/images/Profile.png";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="avatarImg">
          <img
            className="circle responsive-img"
            src={ImgProfile}
            alt="Hilal Bıyık"
          />
        </div>
        <div className="card light-blue darken-4 z-depth-0 hide-one-large-only">
          <div className="card-content center social">
            <h2 className="grey-tect text-lighten-1">
              <strong>HİLAL BIYIK</strong>
              </h2>
              <h5 className="grey-text text-lighten-1">
                Computer Engineer Student
              </h5>
              <a href="https://www.linkedin.com/in/hilalbıyık/" target="blank">
                <i className="fab fa-linkedin fa-2x" ></i>
            
              </a>
              <a href="https://www.linkedin.com/in/hilalbıyık/" target="blank">
                <i className=" fab fa-github-square fa-2x"></i>
              </a>
          </div>
        </div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong> PROFİL</strong>
            </h6>
            <hr />
            <p className="grey-text text-lighteen-3 pt">
              Trakya Üniversitesi Bilgisayar Mühendisliği 4.sınıf öğrencisiyim.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
