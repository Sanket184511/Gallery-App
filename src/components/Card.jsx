import React from "react";

const Card = (props) => {
  return (
    <div className="w-full sm:w-auto">
      <a href={props.elem.url} target="_blank" rel="noreferrer">
        <div className="h-32 w-full sm:h-40 sm:w-45 overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover"
            src={props.elem.download_url}
            alt="image"
          />
        </div>
        <h2 className="font-bold text-sm sm:text-base mt-1">
          {props.elem.author}
        </h2>
      </a>
    </div>
  );
};

export default Card;
