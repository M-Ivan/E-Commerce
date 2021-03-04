import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Registrarme</h1>
        </div>
        {password !== confirmPassword ? (
          confirmPassword.length > 0 ? (
            <MessageBox variant="danger">
              Las contraseñas no coinciden
            </MessageBox>
          ) : null
        ) : confirmPassword.length > 0 ? (
          <MessageBox variant="success">Las contraseñas coinciden</MessageBox>
        ) : null}
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Ingresar Nombre"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Dirección de Email</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Crea una contraseña"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirma tu contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Vuelve a ingresar tu contraseña"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Registrarme
          </button>
        </div>
        <div>
          <label />
          <div>
            Ya tienes una cuenta?{" "}
            <Link to={`/signin?redirect=${redirect}`}>Iniciar sesión</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
