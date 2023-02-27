import React, { useState } from "react";

export function TextSubmissionForm() {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (q1.trim() === "" || q2.trim() === "" || q3.trim() === "" || (q4.trim() === "" && q5.trim() === "")) {
      alert("Please fill out all required fields.");
    } else {
      // Do something with the submitted text, e.g. send it to a server
      alert("Thank you for submitting!");
      // Reset the form after submission
      setQ1("");
      setQ2("");
      setQ3("");
      setQ4("");
      setQ5("");
    }
  }

  function handleQ1Change(event) {
    setQ1(event.target.value);
  }
  function handleQ2Change(event) {
    setQ2(event.target.value);
  }
  function handleQ3Change(event) {
    setQ3(event.target.value);
  }
  function handleQ4Change(event) {
    setQ4(event.target.value);
  }
  function handleQ5Change(event) {
    setQ5(event.target.value);
  }

  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">What class are you uploading for?</label>
                        <input className="form-control" value={q1} onChange={handleQ1Change} ></input>
                    </div>
                    <div className="mb-3">
                        <label>Give a brief description of your project.</label>
                        <textarea className="form-control" rows="6" value={q2} onChange={handleQ2Change} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label>Add any tags that are associated with your project.</label>
                        <textarea className="form-control" rows="6" value={q3} onChange={handleQ3Change} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="formFile" className="form-label">Upload your project here</label>
                        <input className="form-control" type="file" id="formFile" value={q4} onChange={handleQ4Change} ></input>
                    </div>
                    <div className="or">
                        <p>or</p>
                    </div>
                    <div className="mb-3 mt-0">
                        <label className="form-label"></label>
                        <input className="form-control" placeholder="Paste a link" value={q5} onChange={handleQ5Change} ></input>
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
