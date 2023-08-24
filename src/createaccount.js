import React from "react";
import { useFormik } from "formik";
import UserContext from "./context";
import { useContext } from "react";
import { useState } from "react";
export default function CreateAccount() {
  const ctx = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      if (!values.name);
      if (!values.email);
      if (!values.password);
      alert(`Account Created Successfull`);

      ctx.users.push({
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
        balance: 0
      });
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "***Required!!!";
      } else if (values.name.length > 15) {
        errors.name = "Must be 15 characters or less";
      }
      if (!values.email) {
        errors.email = "***Required!!!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Must be 8 Charecters!!";
      } else if (
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/i.test(values.password)
      ) {
        errors.password = "Special characters***";
      }
      return errors;
    }
  });
  // function handle(){
  //   console.log(name,email,password);
  //   const url =`/account/create/${name}/${email}/${password}`
  //   (async()=>{
  //     var res = await fetch(url);
  //     var data = await res.json();
  //     console.log(data);
  //   })
  // }

  return (
    <>
      <div className="kishore">
        <div class="container">
          <div className="account">
            <div class="card">
              <br />
              <center>
                <div>
                  <h3
                    style={{
                      backgroundColor: "lightskyblue",
                      width: "1000px",
                      minHeight: "100px"
                    }}
                    className="tag"
                  >
                    <br />
                    Create User Account
                  </h3>
                </div>
              </center>
              <div class="bg-primary card-headera"></div>
              <div class="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div class="mb-3">
                    <label className="form-label">Name:</label>

                    <input
                      class="form-control"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter Your Name..."
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />

                    {formik.errors.name ? (
                      <div>{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div class="mb-3">
                    <label class="form-label"> Email Address: </label>
                    <input
                      class="form-control"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter Your Mail..."
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Password: </label>
                    <input
                      class="form-control"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password..."
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />

                    {formik.errors.password ? (
                      <div>{formik.errors.password}</div>
                    ) : null}
                  </div>

                  <button type="submit" class="btn btn-primary" disabled="">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
