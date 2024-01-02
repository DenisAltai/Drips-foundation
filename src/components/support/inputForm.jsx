import React, { useState } from "react";
import MyButton from "../button/button.jsx";
import "./InputForm.css";

const InputForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для отправки данных, например, на сервер
    console.log("Отправленные данные:", formData);
    // После отправки формы можно сбросить состояние
    setFormData({
      name: "",
      phone: "",
      email: "",
      comment: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="table">
        <h3>Do you have any questions?</h3>
        <div className="name">
          <label>Your name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
            required
          />
        </div>
        <div className="your_phone">
          <label>Your phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone*"
            required
          />
        </div>
        <div className="your_mail">
          <label>Your mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Mail*"
            required
          />
        </div>
        <div className="your_message">
          <label>Your message:</label>
          <textarea
            name="comment"
            placeholder="Knowledge backed by experience"
            value={formData.comment}
            onChange={handleChange}></textarea>
        </div>
        <div className="my_button">
          <MyButton type="submit">Send</MyButton>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
