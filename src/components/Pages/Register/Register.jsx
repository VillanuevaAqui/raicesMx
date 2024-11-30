import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
//import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import { GoogleIcon, FacebookIcon } from './CustomIcons';
import './Register.css';
import { Link } from 'react-router-dom';

// Estilo del contenedor principal del formulario
const Card = styled(MuiCard)({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: '2.4rem',
    gap: '1.6rem',
    margin: 'auto',
    marginTop: '3rem',
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    '@media (min-width: 600px)': {
        width: '450px',
    },
});

const SignUpContainer = styled(Stack)({
    minHeight: '100%',
    padding: '1.6rem',
    position: 'relative',
    '@media (min-width: 600px)': {
        padding: '2.4rem',
    },
});

export default function Register() {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [nameError, setNameError] = React.useState(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState('');
    const [phoneError, setPhoneError] = React.useState(false);
    const [phoneErrorMessage, setPhoneErrorMessage] = React.useState('');
    const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
    const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = React.useState('');

    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const name = document.getElementById('name');
        const phone = document.getElementById('phone');
        const confirmPassword = document.getElementById('confirmPassword');

        let isValid = true;

        if (!phone.value || !/^\d{10}$/.test(phone.value)) {
            setPhoneError(true);
            setPhoneErrorMessage('Please enter a valid 10-digit phone number.');
            isValid = false;
        } else {
            setPhoneError(false);
            setPhoneErrorMessage('');
        }

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        if (confirmPassword.value !== password.value) {
            setConfirmPasswordError(true);
            setConfirmPasswordErrorMessage('Passwords do not match.');
            isValid = false;
        } else {
            setConfirmPasswordError(false);
            setConfirmPasswordErrorMessage('');
        }

        if (!name.value || name.value.length < 1) {
            setNameError(true);
            setNameErrorMessage('Name is required.');
            isValid = false;
        } else {
            setNameError(false);
            setNameErrorMessage('');
        }

        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nameError || emailError || passwordError || phoneError || confirmPasswordError) {
            return;
        }
        const data = new FormData(event.currentTarget);
        const userData = {
            name: data.get('name'),
            email: data.get('email'),
            phone: data.get('phone'),
            password: data.get('password'),
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
        fontSize: '2rem',
        fontWeight: 'bold',
    });
    const CustomFormControlLabel = styled(FormControlLabel)({
        fontSize: '2rem',
        fontWeight: 'bold',
    });

    return (
        <>
            <CssBaseline />
            <SignUpContainer direction="column" justifyContent="space-between">
                <Container>
                    <h1 className='title'>
                        Regístrate
                    </h1>
                </Container>
                <Card variant="outlined">
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                        <FormControl>
                            <CustomFormLabel htmlFor="name">Nombre completo</CustomFormLabel>
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
                                        fontSize: "1.3rem",
                                        fontFamily: "var(--font)"
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                placeholder="your@email.com"
                                name="email"
                                autoComplete="email"
                                variant="outlined"
                                error={emailError}
                                helperText={emailErrorMessage}
                                sx={{
                                    "& .MuiFormHelperText-root": {
                                        fontSize: "1.3rem",
                                        fontFamily: "var(--font)"
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
                                        fontSize: "1.3rem",
                                        fontFamily: "var(--font)"
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
                                        fontSize: "1.3rem",
                                        fontFamily: "var(--font)"
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
                                        fontSize: "1.3rem",
                                        fontFamily: "var(--font)",
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
                                fontSize: '1.6rem', fontFamily: 'var(--font)', backgroundColor: 'var(--tertiary)',
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
                        <Typography sx={{ color: 'var(--fifth)', fontSize: '1.4rem', fontFamily: 'var(--font)' }}>o</Typography>
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
                        <Typography sx={{ textAlign: 'center', fontFamily: 'var(--font)', fontSize: '1.4rem' }}>
                            ¿Ya tienes cuenta?{' '}
                            <Link
                                to="/SignIn"
                                variant="body2"
                                sx={{ alignSelf: 'center', color: 'var(--secondary)', fontSize: '1.4rem', fontFamily: 'var(--font)' }}
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
