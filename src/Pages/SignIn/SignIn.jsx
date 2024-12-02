import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
//import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon} from './CustomIcons';
import CssBaseline from '@mui/material/CssBaseline';
import CryptoJS from 'crypto-js';
import { Link } from 'react-router-dom';
import "./SignIn.css";
import UsersExample from './database';

async function loadExampleUsers() {

  const usersExample = new UsersExample
  usersExample.dataUserToLocalStorage()

}

loadExampleUsers()

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = Stack;

export default function SignIn(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

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

  const toCompare = (email, password) => {
    
    let coincidences = 0;
    const users = JSON.parse(localStorage.getItem("users"));

    for (let user of users){

      if (user.password == password && user.email == email) {

        coincidences++;
      }
    }
    if (coincidences == 1) {

      alert("Iniciaste sesion")

    } else if (coincidences == 0){

      alert(`
        Usuario y contraseña no coinciden 
        Datos de ejemplo 
        email: VillanuevaAqui2017@gmail.com 
        password: 12345678`)

    } else {

      alert("Error, favor de comunicarse a soporte")
    }
  }

  const validateInputs = (event) => {

    event.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

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

    if (isValid){

      toCompare(encryptEmail(email.value.toLowerCase()), encryptPassword(password.value));

    }

    return isValid;
  };

  const CustomFormLabel = styled(FormLabel)({
    fontSize: '2rem',
    fontWeight: 'bold',
  });

  return (
    <>
      <CssBaseline />
      <SignInContainer direction="column" justifyContent="space-between">
        <Container>
          <h1 className='sign-in-title'>
                  Iniciar Sesión
          </h1>
        </Container>
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', fontWeight: "700" }}
          >
            Sign in
          </Typography>
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
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <CustomFormLabel htmlFor="password" >Password</CustomFormLabel>
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
              label="Remember me"
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
              Sign in
            </Button>
            <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'center', color: 'var(--secondary)', fontSize: '1.4rem', fontFamily: 'var(--font)' }}
            >
              Forgot your password?
            </Link>
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
              Sign in with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Facebook')}
              startIcon={<FacebookIcon />}
            >
              Sign in with Facebook
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              Don&apos;t have an account?{' '}
              <Link
                to="/registro"
                variant="body2"
                sx={{ alignSelf: 'center', color: 'var(--secondary)', fontSize: '1.4rem', fontFamily: 'var(--font)' }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
}
