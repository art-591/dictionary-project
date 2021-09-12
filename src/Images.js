import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.photos) {
    return (
      <section className="Images">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div key={index} className="col-4">
                <a href={photo.src.original} rel="noreferrer" target="_blank">
                  <img className="img-fluid" src={photo.src.landscape} alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
