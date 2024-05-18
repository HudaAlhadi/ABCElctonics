import classes from './Info.module.css'
import Download from '../../../Assets/R.jpg'

import MobileStoreButton from 'react-mobile-store-button';


const Info = () => {
    const iOSUrl = 'https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8';
    const anrdoidUrl= ' https://play.google.com/store/games?device=windows'
    return (
        <>
            <div className={classes.container}>
            
                <div className={classes.wrapper}>

                    <h2>Download our app to get most out of it</h2>
                    <p> Thown shy denote ten ladies through ask saw.  by the goining think orer event music. <br></br>So intentuoj defective at cocincing income months itself and houses for you </p>
                     <div className={classes.icon }> 
                     <MobileStoreButton
                        store="ios"
                        url={iOSUrl}
                        linkProps={{ title: 'iOS Store Button' }}> </MobileStoreButton>
                    

                        <MobileStoreButton
                        store="android"
                        url={anrdoidUrl}
                        linkProps={{ title: 'android Store Button' }}
                    />  
                     </div>
                   
                </div>
            </div>
        </>
    );
}


export default Info