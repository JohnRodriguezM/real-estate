import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

import UndoIcon from "@mui/icons-material/Undo";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { formValues, addUser, handleChangeForm, resetForm } from "./slice/FormSlice";

export function FormUse() {
  const dispatch = useDispatch();
  const formSelector = useSelector(formValues);

  const [info, setInfo] = useState(false)

  const handleChange = (e) => {
    dispatch(
      handleChangeForm(e.target)
    );
  };

  const handleSubmit = (e) => {
    if (
      formSelector.email === '' ||
      formSelector.tel === '' ||
      formSelector.address === '' ||
      formSelector.city === ''

    ) {
      return
    }
    e.preventDefault();
    dispatch(addUser(formSelector));
    setInfo(true)
    dispatch(resetForm())
  };

  return (
    <div
      style={{
        margin: "0 auto",
        width: "100%",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "var(--black)",
      }}
    >

      {info && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "var(--primary)",
              padding: "50px",
              borderRadius: "10px",
            }}
          >
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "white",
                color: "var(--primary)",
                padding: "5px 10px",
                border: "none",
                fontSize: "25px",
                cursor: "pointer",
              }}
              onClick={() => setInfo(false)}
            >
              X
            </button>
            <h2>En breve nos pondremos en contacto contigo</h2>
          </div>
        </div>
      )}

      <button
        style={{
          marginLeft: "20px",
          backgroundColor: "var(--primary)",
          boxShadow: "5px 4px 4px var(--primary)",
          color: "var(--black)",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          position: "absolute",
          top: "10px",
          left: "10px",
        }}
      >
        <Link to="/">
          <UndoIcon />
        </Link>
      </button>

      <Form
        onSubmit={handleSubmit}
        style={{
          width: "95%",
          maxWidth: "500px",
        }}
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Correo electrónico</Form.Label>

            <Form.Control
              name="email"
              value={formSelector.email}
              onChange={handleChange}
              type="email" placeholder="ejemplo@gmail.com" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Número de teléfono</Form.Label>
          <Form.Control
            name="tel"
            onChange={handleChange}
            value={formSelector.tel}
            placeholder="3187854785" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            name="address"
            onChange={handleChange}
            value={formSelector.address}
            placeholder="Cra 28# --" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              name="city"
              onChange={handleChange}
              value={formSelector.city}
              placeholder="Bogotá"
            />
          </Form.Group>
          {/*
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Estado</Form.Label>
            <Form.Select defaultValue="Seleccionar...">
              <option>Seleccionar...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>*/}

          {/*<Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control />
          </Form.Group>*/}
        </Row>

        {/* <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Recordarme" />
        </Form.Group>*/}

        <Button
          style={{
            backgroundColor: "var(--primary)",
            boxShadow: "8px 4px 4px var(--primary)",
          }}
          variant="primary"
          type="submit"
        >
          Enviar
        </Button>
      </Form>
    </div>
  );
}
