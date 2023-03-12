import React, { useState } from "react";

export function TextSubmissionForm() {
  const [className, setClassName] = useState("");
  const [projDescription, setProjDescription] = useState("");
  const [tagNames, setTagNames] = useState("");
  const [fileUpload, setFileUpload] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (className.trim() === "" || projDescription.trim() === "" || tagNames.trim() === "" || fileUpload.trim() === "") {
      alert("Please fill out all required fields.");
    } else {
      // Do something with the submitted text
      alert("Thank you for submitting!");
      // Reset the form after submission
      setClassName("");
      setProjDescription("");
      setTagNames("");
      setFileUpload("");
    }
  }

  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">What class are you uploading for?</label>
                        <input className="form-control" value={className} onChange={(event) => (setClassName(event.target.value))} required></input>
                    </div>
                    <div className="mb-3">
                        <label>Give a brief description of your project.</label>
                        <textarea className="form-control" rows="6" value={projDescription} onChange={(event) => (setProjDescription(event.target.value))} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label>Add any tags that are associated with your project.</label>
                        <textarea className="form-control" rows="6" value={tagNames} onChange={(event) => (setTagNames(event.target.value))} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="formFile" className="form-label">Upload your project here</label>
                        <input className="form-control" type="file" id="formFile" value={fileUpload} onChange={(event) => (setFileUpload(event.target.value))} required></input>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <footer className='mt-3 mb-0 profileFooter'>
                <p>&copy; 2023 Informatics Portfolio Manager</p>
        </footer>
    </div>
    )
}   
