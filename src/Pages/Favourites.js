import React from "react";
import Contact from "../Components/Contact";

function Favourites({ contacts, deleteContact, favToggle }) {
  return (
    <>
    <br/>
    <br/>
    <br/>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 d-flex justify-content-center text-center">
        {contacts.map((singlecontact) => {
          return (
            singlecontact.fav && (
              <Contact
                contacts={singlecontact}
                key={singlecontact.id}
                deleteContact={deleteContact}
                favToggle={favToggle}
              />
            )
          );
        })}
      </div>
      {contacts.filter(singlecontact => singlecontact.fav).length===0 && <h1>No Fav Contacts</h1>}
    </>
  );
}

export default Favourites;
