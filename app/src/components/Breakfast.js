export default function Breakfastfood(props) {

    let meal = props.fullList.filter(breakfast =>
        breakfast.category.title === 'Breakfast')

    let breakfastItems = []
    for (let i = 0; i < meal.length; i++) {
        breakfastItems.push(

            <>
                <div>

                    <div className="card w-100" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h3 className="card-text">

                                <h4>{meal[i].title}</h4>
                                <h4>{meal[i].description}</h4>
                                <h4>{meal[i].price}</h4>

                            </h3>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (<>{breakfastItems}</>)
    console.log(breakfastItems)
};
