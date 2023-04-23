import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

import UndoIcon from "@mui/icons-material/Undo";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { formValues, addUser, handleChangeForm, resetForm } from "./slice/FormSlice";

import Modal from 'react-bootstrap/Modal';
import { LanguageContext } from "../../context/LanguageContext";

export function FormUse() {
  const { infoLang } = useContext(LanguageContext);
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

        <Modal
          size="sm"
          show={info}
          onHide={() => setInfo(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                textAlign: "center",

              }}
              id="example-modal-sizes-title-sm">
              {infoLang.form.thanks}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              textAlign: "center",
            }}
          >
            {infoLang.form.message}
          </Modal.Body>
        </Modal>
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
            <Form.Label>
              {infoLang.form.email}
            </Form.Label>

            <Form.Control
              name="email"
              value={formSelector.email}
              onChange={handleChange}
              type="email" placeholder={infoLang.form.emailPlaceholder} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>
            {
              infoLang.form.tel
            }
          </Form.Label>
          <Form.Control
            name="tel"
            onChange={handleChange}
            value={formSelector.tel}
            placeholder={
              infoLang.form.telPlaceholder
            } />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>{
            infoLang.form.address
          }</Form.Label>
          <Form.Control
            name="address"
            onChange={handleChange}
            value={formSelector.address}
            placeholder={
              infoLang.form.addressPlaceholder
            } />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>
              {
                infoLang.form.city
              }
            </Form.Label>
            <Form.Control
              name="city"
              onChange={handleChange}
              value={formSelector.city}
              placeholder={
                infoLang.form.cityPlaceholder
              }
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
          {
            infoLang.form.submit
          }
        </Button>
      </Form>
    </div>
  );
}
