import React from "react";
import Contact from "../Components/Contact";
import Form from "../Components/Form";

function HomePage({ formsub, contacts, deleteContact,favToggle }) {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-sm-center my-5">
          <Form formsub={formsub} />
        </div>
        <br />

        <h2 className="text-center">CONTACT LIST</h2>
        <br />

        <br />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 d-flex justify-content-center text-center">
          {contacts.map((singlecontact) => {
            return (
              <Contact
                contacts={singlecontact}
                key={singlecontact.id}
                deleteContact={deleteContact}
                favToggle={favToggle}
              />
            );
          })}
        </div>
        {contacts.length === 0 &&(
          <div>No contacts yet...........</div>
        )}
      </div>
    </>
  );
}

export default HomePage;
