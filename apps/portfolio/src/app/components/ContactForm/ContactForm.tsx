import { Button, FormControl, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  description: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      className="flex flex-col justify-center items-center h-full gap-8 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl fullWidth>
        <p className="font-bold mb-2">Name</p>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          {...register('name', { required: true })}
          helperText={errors.name ? 'Name is required' : ''}
          value={watch('name')}
        />
      </FormControl>
      <FormControl fullWidth>
        <p className="font-bold mb-2">Email</p>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          {...register('email', { required: true })}
          helperText={errors.email ? 'Email is required' : ''}
          value={watch('email')}
        />
      </FormControl>
      <FormControl fullWidth>
        <p className="font-bold mb-2">Message</p>
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={5}
          {...register('description', { required: true })}
          helperText={errors.email ? 'Description is required' : ''}
          value={watch('description')}
        />
      </FormControl>
      <Button variant="contained" color="primary" type="submit" size="large">
        Submit
      </Button>
    </form>
  );
};
