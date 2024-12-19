import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon } from './CustomIcons';
import CssBaseline from '@mui/material/CssBaseline';
import CryptoJS from 'crypto-js';
import { Link } from 'react-router-dom';
import "./SignIn.css";
import UsersExample from './database';
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router'

const API_URL = 'http://3.135.216.95:8080/api/user';

async function loadExampleUsers() {

  const usersExample = new UsersExample
  usersExample.dataUserToLocalStorage()

}

loadExampleUsers();

const Card = styled(MuiCard)({
  fontFamily: 'var(--font)',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: '32px',
  gap: '16px',
  margin: 'auto',
  borderRadius: '20px',
  overflowY: 'auto',
  overflowX: 'hidden',
  '@media (min-width: 600px)': {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
});

// const SignInContainer = Stack;
const SignInContainer = styled(Stack)({
  height: '100%',
  padding: '1.6rem',
  position: 'fixed',
  '@media (min-width: 600px)': {
    padding: '2.4rem',
  },
});

export default function SignIn({ setShowLogin, setShowRegister }) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const encrypt = (inputText) => {

    const encrypted = CryptoJS.MD5(inputText).toString();
    return encrypted
  };

  const encryptPassword = (inputText) => {
    return encrypt(inputText);
  };

  const encryptEmail = (inputText) => {
    return encrypt(inputText);
  };

  const toCompare = async (email, password) => {
    try {
      const response = await fetch(API_URL, {method: 'GET'});
      if (!response.ok) throw new Error('Error al obtener lo usuarios.');
      const users = await response.json();
      const foundUser = users.find(user => user.email === email && user.password === password);
      if (foundUser){
        Swal.fire({
          title: "Inicio de sesión exitoso",
          icon: "success"
        });
        sessionStorage.setItem('loggedInUser', JSON.stringify(foundUser));
        setShowLogin(false);
        navigate(0);
      }else{
        Swal.fire({
          icon: "error",
          title: "Usuario o contraseña incorrectas",
        });
      }
    } catch{
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error, intente más tarde...",
      });
    }

    /*let coincidences = 0;
    const users = JSON.parse(localStorage.getItem("users"));

    for (let user of users) {

      if (user.password == password && user.email == email) {

        coincidences++;
      }
    }
    if (coincidences == 1) {

      alert("Iniciaste sesion")

    } else if (coincidences == 0) {

      alert(`
        Usuario y contraseña no coinciden 
        Datos de ejemplo 
        email: VillanuevaAqui2017@gmail.com 
        password: 12345678`)

    } else {

      alert("Error, favor de comunicarse a soporte")
    }*/
  }

  const validateInputs = (event) => {

    event.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

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

    if (isValid) {

      toCompare(encryptEmail(email.value.toLowerCase()), encryptPassword(password.value));

    }

    return isValid;
  };

  const CustomFormLabel = styled(FormLabel)({
    fontFamily: 'var(--font)',
    fontSize: '1.6rem',
    fontWeight: 'bold',
  });

  const handleLinkClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <>
      <CssBaseline />
      <SignInContainer direction="column" justifyContent="space-between" className='register-popup'>
        <Card variant="outlined" className='register-popup-container'>
          <div className="register-popup-title">
            <h2 className='register-title'>
              Iniciar sesión
            </h2>
            <CloseIcon onClick={() => setShowLogin(false)} style={{
              fontSize: '30px',
              cursor: 'pointer',
            }} />
          </div>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <CustomFormLabel htmlFor="email" >Email</CustomFormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="ejemplo@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <CustomFormLabel htmlFor="password" >Contraseña</CustomFormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuerdame"
            />
            <ForgotPassword open={open} handleClose={handleClose} />
            <Button className='sign-in'
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
              Iniciar sesión
            </Button>
            <Typography sx={{ textAlign: 'left', fontFamily: 'var(--font)', fontSize: '1.2rem' }}>
              <Link
                component="button"
                type="button"
                onClick={handleClickOpen}
                variant="body2"
                sx={{ alignSelf: 'left', color: 'var(--secondary)', fontSize: '1.2rem', fontFamily: 'var(--font)' }}
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </Typography>
          </Box>
          <Divider>
            <Typography sx={{ color: 'var(--fifth)', fontSize: '1.4rem', fontFamily: 'var(--font)' }}>o</Typography>
          </Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Google')}
              startIcon={<GoogleIcon />}
            >
              Iniciar sesión con Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Facebook')}
              startIcon={<FacebookIcon />}
            >
              Iniciar sesión con Facebook
            </Button>
            <Typography sx={{ textAlign: 'center', fontFamily: 'var(--font)', fontSize: '1.2rem' }}>
              ¿No tienes una cuenta?{' '}
              <Link
                onClick={handleLinkClick}
                variant="body2"
                sx={{ alignSelf: 'center', color: 'var(--secondary)', fontSize: '1.2rem', fontFamily: 'var(--font)' }}
              >
                Regístrate
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
}
