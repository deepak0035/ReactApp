import { getByTestId } from "@testing-library/react";
import React, { useState } from "react";

export default function TextArea(props) {

    const handleChange = (event) => {
        settext(event.target.value)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        settext(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        settext(newText)
    }
    const handleClear = () => {
        settext("")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
    }
    const copyText = () => {
        let text = document.getElementById("myArea");
        text.select();
        navigator.clipboard.writeText(text);
    }





    const [text, settext] = useState("")
    return (
        <>
            <div className="container" style={{
                color: props.mode === "dark" ? "white" : "black"
            }}>
                <h3 className="d-flex justify-content-center my-2">{props.heading}</h3>
                <div className="mb-3">
                    <textarea
                        value={text}
                        onChange={handleChange}
                        className="form-control"
                        id="myArea"
                        rows="5"
                        style={{
                            backgroundColor: props.mode === "dark" ? "#04010c" : "white",
                            color: props.mode === "dark" ? "white" : "black"
                        }}
                    ></textarea>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center my-1">
                        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
                        <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>

                    </div>
                    <div className="row ">
                        <h3 className="d-flex justify-content-center my-2">Your Text Summary</h3>

                        <div className="col  ">
                            <p>Total character in your text is : {text.length}</p>
                        </div>
                        <div className="col  ">
                            <p>Total words in your text is : {text ? text.split(' ').filter(function (t) { return t !== '' }).length : 0}</p>

                        </div>
                        <div className="col  ">
                            <p>Total Sentences in your text is : {text.split(/[".!?"]/).length - 1} </p>
                        </div>
                        <div className="col  ">
                            <p>Estimated time to read : {text ? Math.ceil(0.008 * text.split(' ').length) : 0} min </p>
                        </div>
                    </div>
                </div>
                <div className="card text-center my-3" style={{
                    backgroundColor: props.mode === "dark" ? "#04010c" : "white", color: props.mode==="dark"?"white":"black"
                }} >
                    <div className="card-header">
                        <h3>Preview</h3>
                    </div>
                    <div className="card-body">
                        <p>{text.length>0?text:"Enter text in the above textbox to preview here."}</p>
                    </div>
                    <div className="card-footer ">
                        Thanks for using TextUtils.
                    </div>
                </div>
            </div>

        </>
    );
}

TextArea.defaultProps = { heading: "Enter your text to analyze below" }