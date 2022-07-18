import React from "react";
import "./Photos.css";

function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div key={index}>
              <a href={photo.src.original}>
                <img src={photo.src.tiny} alt="" className="img-fluid" />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}

export default Photos;
