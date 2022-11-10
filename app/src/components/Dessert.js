export default function Dessertfood(props) {

    let meal = props.fullList.filter(dessert =>
        dessert.category.title === 'Dessert')
    let dessertItems = []
    for (let i = 0; i < meal.length; i++) {
        dessertItems.push(
            <>
            <div>
                <div className="card w-100" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <p className="card-text">

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
    return (<>{dessertItems}</>)
    console.log(dessertItems)
};