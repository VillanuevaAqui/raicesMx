import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { GoogleIcon, FacebookIcon } from './CustomIcons';
import './Register.css';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import CryptoJS, { MD5 } from 'crypto-js';
import { Password } from '@mui/icons-material';

// Estilo del contenedor principal del formulario
const Card = styled(MuiCard)({
    fontFamily: 'var(--font)',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: '2.4rem',
    gap: '1.6rem',
    margin: 'auto',
    marginTop: '3rem',
    borderRadius: '20px',
    overflowY: 'auto',
    overflowX: 'hidden',
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    '@media (min-width: 600px)': {
        width: '450px',
    },
});

const SignUpContainer = styled(Stack)({
    height: '100%',
    padding: '1.6rem',
    position: 'fixed',
    '@media (min-width: 600px)': {
        padding: '2.4rem',
    },
});

export default function Register({ setShowRegister, setShowLogin }) {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [nameError, setNameError] = React.useState(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState('');
    const [lastNameError, setLastNameError] = React.useState(false);
    const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState('');
    const [phoneError, setPhoneError] = React.useState(false);
    const [phoneErrorMessage, setPhoneErrorMessage] = React.useState('');
    const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
    const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = React.useState('');

    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const name = document.getElementById('name');
        const lastName = document.getElementById('lastName');
        const phone = document.getElementById('phone');
        const confirmPassword = document.getElementById('confirmPassword');

        let isValid = true;

        if (!phone.value || !/^\d{10}$/.test(phone.value)) {
            setPhoneError(true);
            setPhoneErrorMessage('Ingresa un número de teléfono válido.');
            isValid = false;
        } else {
            setPhoneError(false);
            setPhoneErrorMessage('');
        }

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Ingresa un email válido.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('La contraseña debe tener al menos 6 caracteres.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        if (confirmPassword.value !== password.value) {
            setConfirmPasswordError(true);
            setConfirmPasswordErrorMessage('Las contraseñas no coinciden.');
            isValid = false;
        } else {
            setConfirmPasswordError(false);
            setConfirmPasswordErrorMessage('');
        }

        if (!name.value || name.value.length < 1) {
            setNameError(true);
            setNameErrorMessage('Nombre no válido.');
            isValid = false;
        } else {
            setNameError(false);
            setNameErrorMessage('');
        }

        if (!lastName.value || lastName.value.length < 1) {
            setLastNameError(true);
            setLastNameErrorMessage('Apellido no válido.');
            isValid = false;
        } else {
            setLastNameError(false);
            setLastNameErrorMessage('');
        }

        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nameError || emailError || passwordError || phoneError || confirmPasswordError || lastNameError) {
            return;
        }

        const data = new FormData(event.currentTarget);
        const userData = {
            name: data.get('name'),
            lastName: data.get('lastName'),
            email: CryptoJS.MD5(data.get("email").toLowerCase()).toString(),
            phone: data.get('phone'),
            password: CryptoJS.MD5(data.get("password")).toString(),
        }
        console.log('Usuario registrado:', JSON.stringify(userData, null, 2));

        // Convierte el objeto a JSON y lo almacena en localStorage.
        // localStorage.setItem('userData', JSON.stringify(userData));
        // console.log('Datos guardados en localStorage:', userData);

        const storedUsers = localStorage.getItem('users');
        const users = storedUsers ? JSON.parse(storedUsers) : []; // Si no hay usuarios, inicializar como arreglo vacío.
        users.push(userData);

        // Guardar el arreglo actualizado en localStorage.
        localStorage.setItem('users', JSON.stringify(users));
        console.log('Usuarios almacenados:', users);
        alert('Usuario agregado correctamente');

        // Do u think about me?
        // fetch('API_URL', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(userData),
        // });
    };

    const CustomFormLabel = styled(FormLabel)({
        fontFamily: 'var(--font)',
        fontSize: '1.6rem',
        fontWeight: 'bold',
        minWidth: '100vh'
    });

    const handleLinkClick = () => {
        setShowLogin(true);
        setShowRegister(false);
    };

    return (
        <>
            <CssBaseline />
            <SignUpContainer direction="column" justifyContent="space-between" className='register-popup'>
                <Card variant="outlined" className='register-popup-container'>
                    <div className="register-popup-title">
                        <h2 className='register-title'>
                            Regístrate
                        </h2>
                        <CloseIcon onClick={() => setShowRegister(false)} style={{
                            fontSize: '30px',
                            cursor: 'pointer',
                        }} />
                    </div>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                        <div style={{ display: 'flex', gap: '10px'}}>
                        <FormControl>
                            <CustomFormLabel htmlFor="name">Nombre</CustomFormLabel>
                            <TextField
                                autoComplete="name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                placeholder="Ingresa tu nombre"
                                error={nameError}
                                helperText={nameErrorMessage}
                                sx={{
                                    "& .MuiFormHelperText-root": {
                                        fontSize: "1.1rem",
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <CustomFormLabel htmlFor="lastName">Apellido</CustomFormLabel>
                            <TextField
                                autoComplete="lastName"
                                name="lastName"
                                required
                                fullWidth
                                id="lastName"
                                placeholder="Ingresa tu apellido"
                                error={lastNameError}
                                helperText={lastNameErrorMessage}
                                sx={{
                                    "& .MuiFormHelperText-root": {
                                        fontSize: "1.1rem",
                                    },
                                }}
                            />
                        </FormControl>
                        </div>
                        <FormControl>
                            <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                placeholder="ejemplo@email.com"
                                name="email"
                                autoComplete="email"
                                variant="outlined"
                                error={emailError}
                                helperText={emailErrorMessage}
                                sx={{
                                    "& .MuiFormHelperText-root": {
                                        fontSize: "1.1rem",
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <CustomFormLabel htmlFor="phone">Teléfono</CustomFormLabel>
                            <TextField
                                required
                                fullWidth
                                id="phone"
                                placeholder="Ingresa tu teléfono"
                                name="phone"
                                autoComplete="phone"
                                variant="outlined"
                                error={phoneError}
                                helperText={phoneErrorMessage}
                                sx={{
                                    "& .MuiFormHelperText-root": {
                                        fontSize: "1.1rem",
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <CustomFormLabel htmlFor="password">Contraseña</CustomFormLabel>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                placeholder="Ingresa tu contraseña"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                variant="outlined"
                                error={passwordError}
                                helperText={passwordErrorMessage}
                                sx={{
                                    "& .MuiFormHelperText-root": {
                                        fontSize: "1.1rem",
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <CustomFormLabel htmlFor="confirmPassword">Confirmar contraseña</CustomFormLabel>
                            <TextField
                                required
                                fullWidth
                                name="confirmPassword"
                                placeholder="Repite tu contraseña"
                                type="password"
                                id="confirmPassword"
                                autoComplete="new-password"
                                variant="outlined"
                                error={confirmPasswordError}
                                helperText={confirmPasswordErrorMessage}
                                sx={{
                                    "& .MuiFormHelperText-root": {
                                        fontSize: "1.1rem",
                                    },
                                }}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={validateInputs}
                            sx={{
                                fontSize: '1.3rem', fontFamily: 'var(--font)', backgroundColor: 'var(--tertiary)',
                                color: 'var(--primary)',
                                ':hover': {
                                    backgroundColor: 'var(--fourth)',
                                },
                            }}
                        >
                            Registrarse
                        </Button>
                    </Box>
                    <Divider>
                        <Typography sx={{ color: 'var(--fifth)', fontSize: '1.3rem', fontFamily: 'var(--font)' }}>o</Typography>
                    </Divider>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => alert('Sign up with Google')}
                            startIcon={<GoogleIcon />}
                        >
                            Regístrate con Google
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => alert('Sign up with Facebook')}
                            startIcon={<FacebookIcon />}
                        >
                            Regístrate con Facebook
                        </Button>
                        <Typography sx={{ textAlign: 'center', fontFamily: 'var(--font)', fontSize: '1.2rem' }}>
                            ¿Ya tienes cuenta?{' '}
                            <Link
                                onClick={handleLinkClick}
                                variant="body2"
                                sx={{ alignSelf: 'center', color: 'var(--secondary)', fontSize: '1.2rem', fontFamily: 'var(--font)' }}
                            >
                                Iniciar sesión
                            </Link>
                        </Typography>
                    </Box>
                </Card>
            </SignUpContainer>
        </>
    );
}
