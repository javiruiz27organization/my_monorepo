import { Button, FormControl, TextField } from '@mui/material';
import {
  Controller,
  RegisterOptions,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

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
    control,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
      description: '',
    },
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      className="flex flex-col justify-center items-center h-full gap-8 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name={'name'}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field, fieldState: { error } }) => {
          return (
            <div className="flex flex-col w-full">
              <p className="font-bold">Name</p>
              <TextField
                {...field}
                variant="outlined"
                fullWidth
                error={!!error}
                helperText={error?.message || ''}
              />
            </div>
          );
        }}
      />

      <Controller
        name={'email'}
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Format is not correct',
          },
        }}
        render={({ field, fieldState: { error } }) => {
          return (
            <div className="flex flex-col w-full">
              <p className="font-bold">Email</p>
              <TextField
                {...field}
                variant="outlined"
                fullWidth
                error={!!error}
                helperText={error?.message || ''}
              />
            </div>
          );
        }}
      />
      <Controller
        name={'description'}
        control={control}
        rules={{
          required: true,
          maxLength: 1000,
        }}
        render={({ field, fieldState: { error } }) => {
          return (
            <div className="flex flex-col w-full">
              <p className="font-bold">Email</p>
              <TextField
                {...field}
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                error={!!error}
                helperText={error?.message || ''}
              />
            </div>
          );
        }}
      />

      <Button
        disabled={!isValid}
        variant="contained"
        color="primary"
        type="submit"
        size="large"
      >
        Submit
      </Button>
    </form>
  );
};
