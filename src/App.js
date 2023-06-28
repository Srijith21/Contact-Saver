import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favourites from "./Pages/Favourites";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import Nav from "./Components/Nav";
import { useState } from "react";

function App() {
  const [contacts, Setcontacts] = useState([]);

  const formsub = (data) => {
    Setcontacts([...contacts, data]);
  };
  const deleteContact = (id) => {
    let newContact = contacts.filter((singleContact) => {
      return singleContact.id !== id;
    });
    Setcontacts(newContact);
  };
  const favToggle = (id) => {
    let FavList = contacts.map((singleContact) => {
      return singleContact.id === id
        ? { ...singleContact,fav: !singleContact.fav }
        : singleContact;
    });
    Setcontacts(FavList);
  };
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                formsub={formsub}
                contacts={contacts}
                deleteContact={deleteContact}
                favToggle={favToggle}
              />
            }
          />
          <Route
            path="/favourite"
            element={
              <Favourites
                contacts={contacts}
                deleteContact={deleteContact}
                favToggle={favToggle}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
