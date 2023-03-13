import React, { useState } from "react";

export function TextSubmissionForm() {
    const [projName, setProjName] = useState("");
    const [projDescription, setProjDescription] = useState("");
    const [projImg, setProjImg] = useState("");
    const [courseName, setCourseName] = useState("");
    const [projGrade, setProjGrade] = useState("");
    const [timeSpent, setTimeSpent] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        alert("Thank you for submitting!");
        // Reset the form after submission
        setProjName("");
        setCourseName("");
        setProjDescription("");
        setTimeSpent("");
        setProjGrade("");
        setProjImg("");
    }

    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Project name</label>
                        <input className="form-control" value={projName} onChange={(event) => (setProjName(event.target.value))} required />
                    </div>
                    <div className="mb-3">
                        <label>Course name</label>
                        <input className="form-control" value={courseName} onChange={(event) => (setCourseName(event.target.value))} required />
                    </div>
                    <div className="mb-3">
                        <label>Brief project description</label>
                        <textarea className="form-control" rows="6" value={projDescription} onChange={(event) => (setProjDescription(event.target.value))} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="grade" className="form-label">Percentage grade</label>
                        <select id="grade" name="grade" className="form-select" value={projGrade} onChange={(event) => (setProjGrade(event.target.value))} required>
                            {Array.from({length: 101}, (_, i) => i).reverse().map(i => (
                                <option value={i} key={i}>{i}%</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">Hours spent on project</label>
                        <input type="number" id="number" name="number" className="form-control" pattern="[0-9]+" value={timeSpent} onChange={(event) => (setTimeSpent(event.target.value))} required />
                        <div className="invalid-feedback">
                            Please enter an integer.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="formFile" className="form-label">Upload a screenshot of your project</label>
                        <input className="form-control" type="file" id="formFile" value={projImg} onChange={(event) => (setProjImg(event.target.value))} required />
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
