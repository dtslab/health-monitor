import React from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { editStatus, selectStatus } from "./statusSlice";
import EditIcon from "@mui/icons-material/Edit";

export function HeightInput({ height, setHeight }) {
  const handleChange = ({ target }) => setHeight(target.value);
  return (
    <TextField
      label="Height"
      id="outlined-start-adornment"
      sx={{ width: "25ch", mt: 1, mb: 3 }}
      value={height}
      onChange={handleChange}
      InputProps={{
        endAdornment: <InputAdornment position="end">in</InputAdornment>,
      }}
    />
  );
}

export function GoalWeightInput({ goalWeight, setGoalWeight }) {
  const handleChange = ({ target }) => setGoalWeight(target.value);
  return (
    <TextField
      label="GoalWeight"
      id="outlined-start-adornment"
      sx={{ width: "25ch" }}
      value={goalWeight}
      onChange={handleChange}
      InputProps={{
        endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
      }}
    />
  );
}

export function EditStatusForm() {
  const status = useSelector(selectStatus);
  const [open, setOpen] = React.useState(false);
  const [height, setHeight] = React.useState(status.height);
  const [goalWeight, setGoalWeight] = React.useState(0);
  const [BMI, setBMI] = React.useState(null);
  const dispatch = useDispatch();

  const handleEditStatus = (status) => {
    dispatch(editStatus(status));
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton aria-label="edit" sx={{color:'#ffffff'}} onClick={handleClickOpen}>
        <EditIcon fontSize="md" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit your Status</DialogTitle>

        <DialogContent sx={{ m: 2, display: "flex", flexDirection: "column" }}>
          <HeightInput height={height} setHeight={setHeight} />

          <GoalWeightInput
            goalWeight={goalWeight}
            setGoalWeight={setGoalWeight}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleEditStatus({
                height: height,
                BMI: BMI,
                goalWeight: goalWeight,
              });
              handleClose();
            }}
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
