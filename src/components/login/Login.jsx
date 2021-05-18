import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

import { login, register } from "../../redux/actions";

import '../../styles/Login.scss';

const Login = (props) => {
    const [action, setAction] = useState("login")
    const [showAlert, setShowAlert] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        if(props.errorMessage) {
            setShowAlert(true)
        }
    }, [props.errorMessage])

    const onSubmit = data => {
        const { login, register } = props;

        if (action === 'login') {
            login(data)
        } else {
            data.password_confirmation = data.passwordConfirmation
            register(data)
        }
    };

    const changeAction = (e, action) => {
        e.preventDefault();

        setAction(action);
    }

    const password = watch("password", "");

    return (
        <Container fluid className="login-page">
            {showAlert && <Alert variant={'danger'} onClose={() => setShowAlert(false)} dismissible>
                {props.errorMessage}
            </Alert>}
            <Container>
                <h1 className="login-title">emprenD</h1>
                <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="login-group" controlId="email">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingresa tu usuario"
                            {...register("email", { required: "Este campo es requerido", maxLength: 80 })}
                        />
                        {errors.email && <Form.Label type="invalid">{errors.email.message}</Form.Label>}
                    </Form.Group>

                    {action === 'register' &&
                        <Form.Group className="login-group" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                placeholder="Ingresa tu nombre"
                                {...register("name", { required: "Este campo es requerido", maxLength: 80 })}
                            />
                            {errors.name && <Form.Label type="invalid">{errors.name.message}</Form.Label>}
                        </Form.Group>}

                    <Form.Group className="login-group" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            {...register("password", {
                                required: "Este campo es requerido",
                                minLength: {
                                    value: 8,
                                    message: "La contraseña debe de contener minimo 8 caracteres"
                                }
                            })}
                        />
                        {errors.password && <Form.Label type="invalid">{errors.password.message}</Form.Label>}
                    </Form.Group>

                    {action === 'register' &&
                        <Form.Group className="login-group" controlId="formBasicPassword">
                            <Form.Label>Confirmacion de contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingresa la confirmacion de contraseña"
                                {...register("passwordConfirmation", {
                                    required: "Este campo es requerido",
                                    validate: value => value === password || "Las contrasenas no coinciden"
                                })}
                            />
                            {errors.passwordConfirmation && <Form.Label type="invalid">{errors.passwordConfirmation.message}</Form.Label>}
                        </Form.Group>}

                    <Form.Group className='buttons-container' controlId="buttons">
                        {action === 'login' &&
                            <Button onClick={(e) => changeAction(e, 'register')} className="bg-login-button" variant="default">
                                Registrar
                            </Button>}

                        {action === 'register' &&
                            <Button onClick={(e) => changeAction(e, 'login')} className="bg-login-button" variant="default">
                                Regresar
                            </Button>}

                        <Button type="submit" className="bg-login-button" variant="default">
                            {action === 'login' ? 'Entrar' : 'Registrar'}
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        errorMessage: state.login.errorMessage
    };
};

export default connect(mapStateToProps, { login, register })(Login);
