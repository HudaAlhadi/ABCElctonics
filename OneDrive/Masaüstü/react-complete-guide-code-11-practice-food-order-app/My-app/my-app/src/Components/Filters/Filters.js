import classes from './Filters.module.css'


const Filters = () => {


    return (
        <>
            <div class={classes.container}>
                <form>
                    <h2>Filter Products</h2>
                    <input type="radio" />
                    <label for='Ascedening' > Ascedening</label>


                    <input type="radio" />
                    <label for='Descedening' > Descedening</label>
                    <input type="radio" />
                    <label for='Out of stock' > Out of stock'</label>

                </form>
                <button class={classes.clear}> Clear Filters</button>
            </div>
        </>
    )
}

export default Filters