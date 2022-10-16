export default function Breakfastfood(props) {

    let meal = props.fullList.filter(breakfast =>
        breakfast.category.title === 'Breakfast')

    let breakfastItems = []
    for (let i = 0; i < meal.length; i++) {
        breakfastItems.push(

            <>
                <div>

                    <div class="card" style={{ width: '18rem' }}>
                        <div class="card-body">
                            <p class="card-text">

                                <h4>{meal[i].title}</h4>
                                <p>{meal[i].description}</p>
                                <h4>{meal[i].price}</h4>

                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (<>{breakfastItems}</>)
};
