import React, { useState } from "react";

function TextSubmissionForm() {
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
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label class="form-label">What class are you uploading for?</label>
                        <input class="form-control"></input>
                    </div>
                    <div class="mb-3">
                        <label>Give a brief description of your project.</label>
                        <textarea class="form-control" rows="6" value={text} onChange={handleChange} required></textarea>
                    </div>
                    <div class="mb-3">
                        <label>Add any tags that are associated with your project.</label>
                        <textarea class="form-control" rows="6" value={text} onChange={handleChange} required></textarea>
                    </div>
                </form>
            </div>
            <div class="col text-center mx-auto">
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Upload your project here</label>
                        <input class="form-control" type="file" id="formFile"></input>
                    </div>
                    <div class="or">
                        <p>or</p>
                    </div>
                    <div class="mb-3 mt-0">
                        <label class="form-label"></label>
                        <input class="form-control" placeholder="Paste a link"></input>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary mb-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}   

export default TextSubmissionForm;