import React from "react";
import { useForm } from "react-hook-form";

function Form({formsub}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSub = (data) => {
    // console.log(data);
    data.id = Date.now();
    data.fav =false;
    reset();
    formsub(data);
  };

  return (
    <>
      <div className="container">
        <h2>CONTACT FORM</h2>
        <form onSubmit={handleSubmit(onSub)}>
          <div className="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
              {...register("name", {
                required: "name is required ",
              })}
            />
          </div>

          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email"
              {...register("email", {
                required: "email is required ",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "valid email is required",
                },
              })}
            />
          </div>
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
          <div className="form-group">
            <label for="phone">Phone Number:</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="phone number"
              {...register("phone", {
                required: "phone is required ",
                pattern: {
                  value:
                    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "valid phone is required",
                },
              })}
            />
          </div>
          {errors.phone && (
            <small className="text-danger">{errors.phone.message}</small>
          )}
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
