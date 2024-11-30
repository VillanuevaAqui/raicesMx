// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import FormControl from '@mui/material/FormControl';
// import Link from '@mui/material/Link';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import MuiCard from '@mui/material/Card';
// import { styled } from '@mui/material/styles';
// import './Register.css';

// // Estilo del contenedor principal del formulario
// const Card = styled(MuiCard)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignSelf: 'center',
//   width: '100%',
//   padding: '2.4rem', // Equivalente a theme.spacing(4)
//   gap: '1.6rem', // Equivalente a theme.spacing(2)
//   margin: 'auto',
//   boxShadow:
//     'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
//   '@media (min-width: 600px)': {
//     width: '450px',
//   },
// });

// const SignUpContainer = styled(Stack)({
//   height: 'calc((1 - var(--template-frame-height, 0)) * 100vh)',
//   minHeight: '100%',
//   padding: '1.6rem', // Equivalente a theme.spacing(2)
//   position: 'relative',
//   '@media (min-width: 600px)': {
//     padding: '2.4rem', // Equivalente a theme.spacing(4)
//   },
// });

// export default function Register() {
//   const [emailError, setEmailError] = React.useState(false);
//   const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
//   const [passwordError, setPasswordError] = React.useState(false);
//   const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
//   const [nameError, setNameError] = React.useState(false);
//   const [nameErrorMessage, setNameErrorMessage] = React.useState('');

//   const validateInputs = () => {
//     const email = document.getElementById('email');
//     const password = document.getElementById('password');
//     const name = document.getElementById('name');

//     let isValid = true;

//     if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
//       setEmailError(true);
//       setEmailErrorMessage('Please enter a valid email address.');
//       isValid = false;
//     } else {
//       setEmailError(false);
//       setEmailErrorMessage('');
//     }

//     if (!password.value || password.value.length < 6) {
//       setPasswordError(true);
//       setPasswordErrorMessage('Password must be at least 6 characters long.');
//       isValid = false;
//     } else {
//       setPasswordError(false);
//       setPasswordErrorMessage('');
//     }

//     if (!name.value || name.value.length < 1) {
//       setNameError(true);
//       setNameErrorMessage('Name is required.');
//       isValid = false;
//     } else {
//       setNameError(false);
//       setNameErrorMessage('');
//     }

//     return isValid;
//   };

//   const handleSubmit = (event) => {
//     if (nameError || emailError || passwordError) {
//       event.preventDefault();
//       return;
//     }
//     const data = new FormData(event.currentTarget);
//     console.log({
//       name: data.get('name'),
//       lastName: data.get('lastName'),
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   const CustomFormLabel = styled(FormLabel)({
//     fontSize: '2rem',
//     fontWeight: 'bold',
//   });
//   const CustomFormControlLabel = styled(FormControlLabel)({
//     fontSize: '2rem',
//     fontWeight: 'bold',
//   });

//   return (
//     <>
//       <CssBaseline />
//       <SignUpContainer direction="column" justifyContent="space-between">
//         <Card variant="outlined">
//           <h1>
//             Sign Up
//           </h1>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
//           >
//             <FormControl>
//               <CustomFormLabel htmlFor="name">Full name</CustomFormLabel>
//               <TextField
//                 autoComplete="name"
//                 name="name"
//                 required
//                 fullWidth
//                 id="name"
//                 placeholder="Jon Snow"
//                 error={nameError}
//                 helperText={nameErrorMessage}
//               />
//             </FormControl>
//             <FormControl>
//               <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
//               <TextField
//                 required
//                 fullWidth
//                 id="email"
//                 placeholder="your@email.com"
//                 name="email"
//                 autoComplete="email"
//                 variant="outlined"
//                 error={emailError}
//                 helperText={emailErrorMessage}
//               />
//             </FormControl>
//             <FormControl>
//               <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
//               <TextField
//                 required
//                 fullWidth
//                 name="password"
//                 placeholder="Enter your password"
//                 type="password"
//                 id="password"
//                 autoComplete="new-password"
//                 variant="outlined"
//                 error={passwordError}
//                 helperText={passwordErrorMessage}
//               />
//             </FormControl>
//             <CustomFormControlLabel
//               control={<Checkbox value="allowExtraEmails" />}
//               label="I want to receive updates via email."
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               onClick={validateInputs}
//               sx={{
//                 fontSize: '1.6rem', fontFamily: 'var(--font)',backgroundColor: 'var(--tertiary)',
//                 color: 'var(--primary)',
//                 ':hover': {
//                   backgroundColor: 'var(--fourth)',
//                 },
//               }}
//             >
//               Sign up
//             </Button>
//           </Box>
//           <Divider>
//             <Typography sx={{ color: 'var(--fifth)', fontSize: '1.4rem', fontFamily: 'var(--font)' }}>or</Typography>
//           </Divider>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             <Typography sx={{ textAlign: 'center', fontFamily: 'var(--font)', fontSize: '1.4rem'}}>
//               Already have an account?{' '}
//               <Link
//                 href="/material-ui/getting-started/templates/sign-in/"
//                 variant="body2"
//                 sx={{ alignSelf: 'center', color: 'var(--secondary)', fontSize: '1.4rem', fontFamily: 'var(--font)' }}
//               >
//                 Sign in
//               </Link>
//             </Typography>
//           </Box>
//         </Card>
//       </SignUpContainer>
//     </>
//   );
// }
