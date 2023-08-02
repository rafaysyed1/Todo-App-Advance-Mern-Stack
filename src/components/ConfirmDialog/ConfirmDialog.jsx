import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ConfirmDialog = ({ title,open, onClose, onConfirm,DialogContentTextProp }) => (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{display: 'flex',justifyContent: 'center'}}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
            {DialogContentTextProp}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onConfirm} color="primary">
          Yes
        </Button>
        <Button onClick={onClose} color="primary" autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  )
export default ConfirmDialog  