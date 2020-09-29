import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

function Snack({message}) {
  const { enqueueSnackbar } = useSnackbar();
  if(message.message !== null)
      enqueueSnackbar(message.message, {variant: message.variant});
  return null
};


export default function Message({message}) {
  return (
    <SnackbarProvider maxSnack={3}>
      <Snack message={message} />
    </SnackbarProvider>
  );
}
