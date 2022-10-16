function Header(props){
    return(
        <Header>
<div class="container">
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <div><button onClick={() => props.handleClick('Breakfast')}>Breakfast</button></div>

    </div>
  </nav>

  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <div><button onClick={() => props.handleClick('Lunch')}>Lunch</button></div>

    </div>
  </nav>

  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <div><button onClick={() => props.handleClick('Dinner')}>Dinner</button></div>

    </div>
  </nav>

  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <div><button onClick={() => props.handleClick('Dessert')}>Dessert</button></div>

    </div>
  </nav>

  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <div><button onClick={() => props.handleClick('Appetizer')}>Appetizers</button></div>
    </div>
  </nav>
</div>
</Header>
  )
}
export default Header;





{/* <header>
        <div><button onClick={() => props.handleClick('Breakfast')}>Breakfast</button></div>
        <div><button onClick={() => props.handleClick('Lunch')}>Lunch</button></div>
        <div><button onClick={() => props.handleClick('Dinner')}>Dinner</button></div>
        <div><button onClick={() => props.handleClick('Dessert')}>Dessert</button></div>
        <div><button onClick={() => props.handleClick('Appetizer')}>Appetizers</button></div>


        </header> */}