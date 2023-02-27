import React, { useState } from "react";

export function TextSubmissionForm() {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (text.trim() === "") {
      alert("Please fill out all required fields.");
    } else {
      // Do something with the submitted text, e.g. send it to a server
      console.log(`Submitted text: ${text}`);
      // Reset the form after submission
      setText("");
    }
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">What class are you uploading for?</label>
                        <input className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label>Give a brief description of your project.</label>
                        <textarea className="form-control" rows="6" value={text} onChange={handleChange} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label>Add any tags that are associated with your project.</label>
                        <textarea className="form-control" rows="6" value={text} onChange={handleChange} required></textarea>
                    </div>
                </form>
            </div>
            <div className="col text-center mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="formFile" className="form-label">Upload your project here</label>
                        <input className="form-control" type="file" id="formFile"></input>
                    </div>
                    <div className="or">
                        <p>or</p>
                    </div>
                    <div className="mb-3 mt-0">
                        <label className="form-label"></label>
                        <input className="form-control" placeholder="Paste a link"></input>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}   
