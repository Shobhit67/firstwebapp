import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <div className="my-5">
      <h1 className="text-center">Contact US</h1>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action="">
              <div class="mb-3">
                <Form
                  label="First name :"
                  type="text"
                  name="fname"
                  placeholder="Enter first name"
                />

                <Form
                  label="Last name :"
                  type="text"
                  name="lname"
                  placeholder="Enter Last name"
                />

                <Form
                  label="Contact No.:"
                  type="text"
                  name="contactNo"
                  placeholder="Enter your contact no."
                />

                <Form
                  label="Email:"
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                />
              </div>

              <div class="mb-3">
                <label for="note" class="form-label">
                  Note:
                </label>
                <textarea
                  class="form-control"
                  placeholder="Enter any query/Suggestion..."
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
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
