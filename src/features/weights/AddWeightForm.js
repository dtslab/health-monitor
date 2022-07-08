import React from "react";
import { v4 as uuidv4 } from "uuid";
import { IconButton, InputAdornment } from "@mui/material";
import { useDispatch } from "react-redux";
import { addWeight } from "./weightsSlice";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export function WeightInput({ weight, setWeight }) {
  const handleChange = ({ target }) => setWeight(target.value);
  return (
    <TextField
      label="Weight"
      id="outlined-start-adornment"
      sx={{ width: "25ch" }}
      value={weight}
      onChange={handleChange}
      InputProps={{
        endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
      }}
    />
  );
}

const dateFormat = (date) => {
  return (
    `${date.getMonth() + 1}` + "/" + date.getDate() + "/" + date.getFullYear()
  );
};

export function DateInput({ date, setDate }) {
  const handleSetDate = (rawDate) => {
    setDate(dateFormat(new Date(rawDate)));
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date"
        value={date}
        onChange={(newValue) => {
          handleSetDate(newValue);
        }}
        renderInput={(params) => {
          return <TextField {...params} />;
        }}
      ></DatePicker>
    </LocalizationProvider>
  );
}

export function WeightNote({ note, setNote }) {
  const handleChange = ({ target }) => setNote(target.value);
  return (
    <TextField
      autoFocus
      margin="dense"
      id="note"
      label="Note"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange}
    />
  );
}
export function AddWeightForm() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(null);
  const [weight, setWeight] = React.useState("");
  const [note, setNote] = React.useState("");
  const dispatch = useDispatch();

  const handleAddWeight = (weight) => {
    dispatch(addWeight(weight));
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDate(null);
    setWeight("");
    setNote("");
  };

  return (
    <React.Fragment>
      <IconButton aria-label="add" color="secondary" onClick={handleClickOpen}>
        <AddIcon fontSize="large" />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add your Weight</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            Pick a date, and add your weight.
          </DialogContentText>
          <DateInput date={date} setDate={setDate} />

          <WeightInput weight={weight} setWeight={setWeight} />
          <WeightNote note={note} setNote={setNote} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleAddWeight({
                id: uuidv4(),
                time: date,
                value: weight,
                note: note,
              });
              handleClose();
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
