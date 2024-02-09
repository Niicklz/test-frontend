import React, { useState } from "react";
import "./FormSection.css";
import { Button } from "../commons/Button/Button";
import { Paragraph } from "../commons/Paragraph/Paragraph";

export const FormSection = () => {
  const [formdata, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    department: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      surname: "",
      phone: "",
      email: "",
      department: "",
      message: "",
    });
  };
  return (
    <section className="form-section">
      <form className="form" onSubmit={handleSubmit}>
        <div className="main-info">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formdata.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            required
            value={formdata.surname}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            required
            value={formdata.phone}
            onChange={handleInputChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formdata.email}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="text"
          name="department"
          placeholder="Departament"
          required
          value={formdata.department}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Mensaje(opcional)"
          value={formdata.message}
          onChange={handleInputChange}
        ></textarea>
        <Button text="I'm in" variant="solid" size="md" />
        <Paragraph className="form-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          veritatis quo accusamus et exercitationem ex inventore explicabo
          nostrum architecto facilis!
        </Paragraph>
      </form>
    </section>
  );
};
