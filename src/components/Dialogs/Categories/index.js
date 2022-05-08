import { useRecoilState } from 'recoil';
import { useForm, FormProvider } from 'react-hook-form';

import { Button, Dialog, DialogContent, DialogTitle, DialogActions, TextField } from '@mui/material';

import { dialogCategoriesUi } from '@/recoil/atoms/ui';

function Categories ({ title, open}) {
  const [dialog, setDialog] = useRecoilState(dialogCategoriesUi);
  const formMethods = useForm ({
    mode: 'onSubmit',
  });

  function handleOnAccept(values) {
    console.log('%cindex.js line:11 values', 'color: #007acc;', values);
  }

  function handleClose() {
    setDialog({open: false, data: {}});
  }

  return (
    <Dialog open={dialog.open}>
      <DialogTitle>{ title }</DialogTitle>
      <FormProvider {...formMethods}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre categoría"
            type="text"
            fullWidth
            variant="standard"
            name="categoryField"
            {...formMethods.register('categoryField')}
          />
        </DialogContent>
      </FormProvider>
      <DialogActions>
        <Button color="secondary" onClick={() => handleClose()}>Cancelar</Button>
        <Button color="primary" onClick={formMethods.handleSubmit(handleOnAccept)}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  )

}

export default Categories;