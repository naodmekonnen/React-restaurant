


function Header(props) {
  return (
    <div className="container-fluid">
      <div className="text-center"><h2>imPASTA syndrome</h2></div>
      <nav className="navbar justify-content-center navbar-expand-lg bg-light">
        <div><button onClick={() => props.handleClick('Home')} type="button" className="btn btn-outline-secondary">Home</button></div>
        <div><button onClick={() => props.handleClick('Breakfast')} type="button" className="btn btn-outline-secondary">Breakfast</button></div>
        <div><button onClick={() => props.handleClick('Lunch')} type="button" className="btn btn-outline-secondary">Lunch</button></div>
        <div><button onClick={() => props.handleClick('Dinner')} type="button" className="btn btn-outline-secondary">Dinner</button></div>
        <div><button onClick={() => props.handleClick('Dessert')} type="button" className="btn btn-outline-secondary">Dessert</button></div>
        <div><button onClick={() => props.handleClick('Appetizer')} type="button" className="btn btn-outline-secondary">Appetizers</button></div>
      </nav>
      </div>
  )
}
export default Header




