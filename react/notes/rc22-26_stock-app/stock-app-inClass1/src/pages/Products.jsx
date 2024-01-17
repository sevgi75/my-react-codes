import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import ProductModal from "../components/ProductModal";


const Products = () => {
  // const {getFirms, getSales} = useStockCalls()
  const {getStocks} = useStockCalls()
  const {firms} = useSelector((state) => state.stock)

  const [info, setInfo] = useState({
    "name": "",
    "phone": "",
    "address": "",
    "image": "",
  })

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setInfo({name: "", phone: "", address: "", image: ""})
  };

  useEffect(() => {
    // getFirms()
    // getSales()
    getStocks("firms")
    
    
  }, [])

  console.log(firms);
  
    return (
      <div>
        <Typography variant="h4" color="error">Firms</Typography>
        <Button variant="contained" onClick={handleOpen}>New Firm</Button>
        <ProductModal 
        open={open} 
        handleClose={handleClose}
        info={info}
        setInfo={setInfo} 
        />
        
        
      </div>
    )
  }
  
  export default Products