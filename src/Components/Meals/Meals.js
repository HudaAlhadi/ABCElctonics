import { Fragment } from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

import { Outlet } from 'react-router-dom';

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
          <AvailableMeals></AvailableMeals>
            <Outlet> </Outlet>
        </Fragment>
    );
};

export default Meals;