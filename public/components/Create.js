class Create extends React.Component {
  render = () => {
    return <div>
      <h3>Add Item</h3>
      <form onSubmit={this.createItem}>
        <input onKeyUp={this.props.handleNewItemName} type="text" placeholder="Item Name" />
        <br/>
        <input onKeyUp={this.props.handleNewItemQuantity} type="number" placeholder="Item Quantity" />
        <br/>
        <input onKeyUp={this.props.handleNewItemLink} type="text" placeholder="Buy Link" />
        <br/>
        <input onKeyUp={this.props.handleNewItemImage} type="text" placeholder="Item Image" />
        <br/>
        <input type="submit" value="Add New Item" />
      </form>
    </div>
  }
}
