import { useContext } from "react"
import AppContext from "../context/AppContext"


const OrderConfirmation = () => {
  const { userOrder } = useContext(AppContext)
  return (
    <div style={{marginTop:"110px"}}>
      orderconfirmation
    </div>
  )
}

export default OrderConfirmation
