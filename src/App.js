import React, { useState } from "react";
import Input from "./components/Input";
import Preview from "./components/Preview";
import Upload from "./components/Upload";

const App = () => {
    const [topText, updateTopText] = useState("");
    const [bottomText, updateBottomText] = useState("");
    console.log(topText);
    console.log(bottomText);
    return (
        <div>
            <form>
                <h1>CREATE A MEME!</h1>
                <Upload />
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
            </form>
            <Preview topText={topText} bottomText={bottomText} />
        </div>
    );
};

export default App;
