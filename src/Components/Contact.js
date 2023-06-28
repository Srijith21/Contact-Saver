import React from "react";

function Contact({ contacts, deleteContact, favToggle }) {
  return (
    <>
      <br />
      <div className="container text-success border border-info mx-1 my-1">
        <div
          className=""
          onClick={() => {
            favToggle(contacts.id);
          }}
        >
          <i
            class={
              contacts.fav
                ? "fa-solid fa-star text-warning"
                : "fa-regular fa-star text-warning"
            }
          ></i>
        </div>
        <br />

        <p className=" text-danger m-1">Name: {contacts.name}</p>
        <br />
        <p className=" m-0">No:{contacts.phone}</p>
        <br />
        <p className=" m-0">Email: {contacts.email}</p>

        <br />
        <button
          onClick={() => {
            deleteContact(contacts.id);
          }}
          className="mx-5 my-1"
        >
          Delete
        </button>
        <br />
      </div>
    </>
  );
}

export default Contact;
