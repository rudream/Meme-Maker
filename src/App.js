import React, { useState } from "react";
import Input from "./components/Input";
import Preview from "./components/Preview";
import Upload from "./components/Upload";

const App = () => {
    const [topText, updateTopText] = useState("");
    const [bottomText, updateBottomText] = useState("");
    const [imgSrc, updateImage] = useState(
        "https://images.unsplash.com/photo-1589285874275-c5b16f4b3f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
    );

    function handleUpload({ target }) {
        if (target.files.length > 0) {
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                updateImage(reader.result);
            });
            reader.readAsDataURL(target.files[0]);
        }
    }

    return (
        <div>
            <form>
                <h1>MEME MAKER</h1>
                <Upload onUpload={handleUpload} />
                <Input
                    name='top-text'
                    placeholder='TOP TEXT'
                    onChange={(e) => updateTopText(e.target.value)}
                />
                <Input
                    name='bottom-text'
                    placeholder='BOTTOM TEXT'
                    onChange={(e) => updateBottomText(e.target.value)}
                />
                <h1 id='download-label'>Click on the image to download it!</h1>
            </form>
            <Preview src={imgSrc} topText={topText} bottomText={bottomText} />
        </div>
    );
};

export default App;
