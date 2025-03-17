import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { ReactNode } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 'auto',
  lineHeight: '60px',
}));

export const LaboralExperioence = () => {
  const renderCardItem = (title: ReactNode, description: string) => {
    return (
      <Item>
        {title}
        {description}
      </Item>
    );
  };

  const steps = [
    renderCardItem(<h5>Fujitsu Spain</h5>, ''),
    'Create an ad group',
    'Create an ad',
  ];

  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-2xl font-bold">Laboral Experiences</h3>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
};
