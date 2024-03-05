import React, { useState } from "react";
import { Form } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const contact = {
    first: "Your",
    last: "Name",
    pp: "https://placekitten.com/g/200/200",
    notes: "Some notes",
  };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.pp}
          src={contact.pp || null}
          alt="Avatar"
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
        </h1>

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <input
              type="text"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              placeholder="@facebook"
              style={{ height: "50px", fontSize: "20px" }}
            />
            <input
              type="text"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              placeholder="@twitter"
              style={{ height: "50px", fontSize: "20px" }}
            />
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="@instagram"
              style={{ height: "50px", fontSize: "20px" }}
            />
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="@linkedin"
              style={{ height: "50px", fontSize: "20px" }}
            />
          </Form>
        </div>
      </div>
    </div>
  );
}
