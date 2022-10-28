import React from "react";
import { useState } from "react";

function Contact() {
  const [details, setDetails] = useState({
    Name: "",
    Mobile: "",
    Email: "",
    Messages: "",
  });

  const inputChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
           Name    : ${details.Name}
           Mobile  : ${details.Mobile}
           Email   : ${details.Email}
           Messages: ${details.Messages}
           `);
    setDetails({ Name: "", Mobile: "", Email: "", Messages: "" });
  };
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Full Name"
                  name="Name"
                  value={details.Name}
                  onChange={(e) => inputChange(e)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Mobile Number"
                  name="Mobile"
                  value={details.Mobile}
                  onChange={(e) => inputChange(e)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="Email"
                  value={details.Email}
                  onChange={(e) => inputChange(e)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="Messages"
                  value={details.Messages}
                  onChange={(e) => inputChange(e)}
                ></textarea>
              </div>
              <div class="col-12">
                <button
                  class="btn btn-outline-primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
