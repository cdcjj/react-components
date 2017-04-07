var GroceryList = (props) => (
  <div>
  <h2>Grocerieeeesss</h2>
    <ul>
      {props.list.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  onItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onItemHover.bind(this)} onMouseLeave={this.onItemHover.bind(this)}> {this.props.item} </li>
    )
  }
};

var App = () => {
  var groceryItems = ['Bread', 'Milk']
  return <GroceryList list={groceryItems}/>
}


ReactDOM.render(<App />, document.getElementById('app'));

