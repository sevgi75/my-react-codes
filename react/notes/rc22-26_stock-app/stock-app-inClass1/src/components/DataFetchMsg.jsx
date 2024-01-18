import { Typography } from "@mui/material"

export const ErrorMsg = () => {
    return (
        <Typography variant="h5" color={"error"}>
            Data can not be fetched
        </Typography>
    )
}

const DataFetchMsg = () => {
  return (
    <div>DataFetchMsg</div>
  )
}

export default DataFetchMsg