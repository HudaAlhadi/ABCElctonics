import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import { Outlet } from 'react-router-dom';

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
            <Outlet> </Outlet>
        </Fragment>
    );
};

export default Meals;