import { Typography, Box } from '@mui/material';

export default function Logo() {
    return(
        <>
            <Typography
variant="h5"
component="div"
sx={{
fontWeight: 700,
fontFamily: "'Roboto', sans-serif",
letterSpacing: 1,
display: 'flex',
alignItems: 'center',
}}

>

{/* First letter as a circle with color */}
<Box
component="span"
sx={{
display: 'inline-flex',
justifyContent: 'center',
alignItems: 'center',
width: 35,
height: 35,
borderRadius: '50%',
background: 'linear-gradient(135deg, #4f9eff, #1a73e8)',
color: '#fff',
fontWeight: 700,
fontSize: '1.2rem',
mr: 1, // space between circle and text
}}

>
N
  </Box>
  ancy
            </Typography>
        </>
    )
}