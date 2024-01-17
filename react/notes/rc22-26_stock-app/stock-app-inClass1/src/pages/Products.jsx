import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";


const Products = () => {
  // const {getFirms, getSales} = useStockCalls()
  const {getStocks} = useStockCalls()
  const {products} = useSelector((state) => state.stock)

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
    getStocks("products")
     
  }, [])

 
  
    return (
      <div>
        <Typography variant="h4" color="error">Products</Typography>
        <Button variant="contained" onClick={handleOpen}>New Product</Button>
        <ProductModal 
        open={open} 
        handleClose={handleClose}
        info={info}
        setInfo={setInfo} 
        />
        
        <ProductTable />
      </div>
    )
  }
  
  export default Products