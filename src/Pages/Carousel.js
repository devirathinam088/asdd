
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    description: `“Saving on dog will not change the world, but surely for that one dog, the world will change forever.”`,
    backgroundImage: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    description: 'An ad group contains one or more ads which target a shared set of keywords.',
    backgroundImage: 'https://plus.unsplash.com/premium_photo-1682097106788-3b84c39a9a87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxkb2d8ZW58MHx8MHx8fDA%3D',
  },
  {
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    backgroundImage: 'https://images.unsplash.com/photo-1554692918-08fa0fdc9db3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI0fHxkb2d8ZW58MHx8MHx8fDA%3D',
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh', // Full height of the viewport
        width: '100vw', // Full width of the viewport
        backgroundImage: `url(${steps[activeStep].backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color: 'black',
        textAlign: 'center',
        padding: theme.spacing(0),
        position: 'relative', // Ensure position is relative for absolute positioning of buttons
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: theme.spacing(3),
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          {steps[activeStep].description}
        </Typography>
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              position: 'absolute',
              top: theme.spacing(50),
              right: theme.spacing(50),
              color: '#fff',
            }}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              position: 'absolute',
              top: theme.spacing(50),
              left: theme.spacing(50),
              color: '#fff',
            }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
