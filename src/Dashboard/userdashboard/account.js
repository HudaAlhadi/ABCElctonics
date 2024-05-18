import { AuthContext } from "../../Store/authprovider"
import OrderContext from "../../Store/ordercontext"
import Orders from "./order"
import { useContext } from "react"

const Account=()=>{
const {users, getmyorders}= useContext(AuthContext)
const order= useContext(OrderContext)
console.log(users)
    return <>  <Orders users={users} getmyorders={getmyorders}></Orders></>
}
export default Account