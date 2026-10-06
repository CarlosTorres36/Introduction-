import { Alert, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

export const Newsletter = ({ onValidated, status, message }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // só números, espaços e +, e o + só é permitido no início
      const cleaned = value
        .replace(/[^\d+ ]/g, "") // remove tudo o que não for dígito, + ou espaço
        .replace(/(?!^)\+/g, ""); // remove + que não esteja na primeira posição
      setForm({ ...form, phone: cleaned });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.email.indexOf("@") > -1) {
      onValidated({
        EMAIL: form.email,
        FNAME: form.name,
        PHONE: form.phone,
        MESSAGE: form.message,
      });
    }
  };

  const clearFields = () => {
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <Col lg={12} id="contact">
      <div className="newsletter-bx">
        <Row>
          <Col className="newsletter-bx-title" lg={12} md={6} xl={5}>
            <h3>Send me a message</h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <div>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  <input
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                </div>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
                <textarea
                  className="message-input"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                />
                <button className="btn_subscribe" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
