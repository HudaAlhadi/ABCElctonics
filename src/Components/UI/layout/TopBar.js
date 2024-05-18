import classes from './Topbar.module.css'
import {TbTruckDelivery} from 'react-icons/tb'

const TopBar=()=>{

    return(
<div className={classes.wrapper}>
<p>
<TbTruckDelivery className={classes.icon}> </TbTruckDelivery>
    Free Dilvery for orders more than 20$
</p>
</div>
    )
}

export default TopBar