import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { modalStyle } from '../styles/globalStyles';
import TextField from '@mui/material/TextField';
import useStockCalls from '../service/useStockCalls';



export default function FirmModal({open, handleClose, info, setInfo}) {
  const {postStock, putStock} = useStockCalls()
  
  const handleChange = (e) => {
    setInfo({...info, [e.target.name]: e.target.value})
  }

  console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault()
    if (info._id){
      putStock("firms", info)
    }else {
      postStock("firms", info)
    }
    
    handleClose()
  }
  
  console.log(info);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box 
          sx={{ 
            display: "flex",
            flexDirection: "column", 
            gap: 2 }} 
            component="form"
            onSubmit={handleSubmit}
            >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required             
           />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required             
           />
            <TextField
              label="Adress"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required             
           />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required             
           />
            <Button type="submit" variant="contained" size="large">
              {info._id ? "Update Firm" : "Add Firm"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}