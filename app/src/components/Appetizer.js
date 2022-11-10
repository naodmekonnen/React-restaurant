export default function Appetizer(props) {

    let meal = props.fullList.filter(appetizer =>
        appetizer.category.title === 'Appetizer')
    let appItems = []
    for (let i = 0; i < meal.length; i++) {
        appItems.push(
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
    return (<>{appItems}</>)
};