function Header(props){
    return(
        <header>
        <div><button onClick={() => props.handleClick('Breakfast')}>Breakfast</button></div>
        <div><button onClick={() => props.handleClick('Lunch')}>Lunch</button></div>
        <div><button onClick={() => props.handleClick('Dinner')}>Dinner</button></div>
        </header>
    )
}

export default Header;