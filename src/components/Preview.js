import React, { useRef, useEffect, useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const Preview = (props) => {
    const image = useRef(null);
    const frame = useRef(null);
    const topText = useRef(null);
    const bottomText = useRef(null);

    useEffect(() => {
        if (image.current) {
            if (
                image.current.offsetWidth < 800 ||
                image.current.offsetHeight < 800
            ) {
                if (image.current.offsetWidth >= image.current.offsetHeight) {
                    image.current.style.width = "800px";
                    frame.current.style.height = `${image.current.offsetHeight}px`;
                    frame.current.style.width = `${image.current.offsetWidth}px`;
                } else {
                    image.current.style.height = "800px";
                    frame.current.style.width = `${image.current.offsetWidth}px`;
                    frame.current.style.height = `${image.current.offsetHeight}px`;
                }
            }
        }
        topText.current.innerHTML = `${topText.current.innerText}`.toUpperCase();
        bottomText.current.innerHTML = `${bottomText.current.innerText}`.toUpperCase();
        if (topText.current.innerText.length > 20) {
            topText.current.style.fontSize = "3rem";
        } else {
            topText.current.style.fontSize = "5rem";
        }
        if (bottomText.current.innerText.length > 20) {
            bottomText.current.style.fontSize = "3rem";
        } else {
            bottomText.current.style.fontSize = "5rem";
        }
    });

    const downloadImage = () => {
        domtoimage.toBlob(frame.current).then(function (blob) {
            saveAs(blob, "my-meme.png");
        });
    };

    return (
        <div className='output' ref={frame} onClick={downloadImage}>
            <h1 ref={topText}>{props.topText}</h1>
            <h1 ref={bottomText}>{props.bottomText}</h1>
            <img src={props.src} ref={image} />
        </div>
    );
};

export default Preview;
