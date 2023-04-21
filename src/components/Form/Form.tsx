import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

import UndoIcon from "@mui/icons-material/Undo";
import { Link } from "react-router-dom";
export function FormUse() {
  return (
    <div
      style={{
        width: "95%",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "var(--black)",
      }}
    >
      <button
        style={{
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
       style = {{
        width: "95%",
      
       }}
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="ejemplo@gmail.com" />
          </Form.Group>

          {/*<Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>*/}
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Número de teléfono</Form.Label>
          <Form.Control placeholder="3187854785" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Dirección</Form.Label>
          <Form.Control placeholder="Cra 28# --" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control />
          </Form.Group>
          {/*
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Estado</Form.Label>
            <Form.Select defaultValue="Seleccionar...">
              <option>Seleccionar...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>*/}

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control />
          </Form.Group>
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
