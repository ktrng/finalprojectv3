class App extends React.Component {
  state = {
    items: []
  }

  //GET ROUTE
  getItems = () => {
    axios.get(
      '/api/items'
    ).then(
      (response) => {
        this.setState({
          items: response.data
        })
      }
    )
  }


  //CREATE ROUTE
  createItem = (event) => {
    event.preventDefault()
    axios.post(
      '/api/people',
      {
        name: this.state.NewItemName,
        quantity: this.state.NewItemQuantity,
        link: this.state.NewItemLink,
        image: this.state.NewItemImage
      }
    ).then(
      (response) => {
        this.setState({
          items: response.data
        })
      }
    )
  }

  //CREATE HANDLERS
  handleNewItemName = (event) => {
    this.setState({
      newItemName: event.target.value
    })
  }

  handleNewItemQuantity = (event) => {
    this.setState({
      newItemQuantity: event.target.value
    })
  }

  handleNewItemLink = (event) => {
    this.setState({
      newItemLink: event.target.value
    })
  }

  handleNewItemImage = (event) => {
    this.setState({
      newItemImage: event.target.value
    })
  }


  //DELETE ROUTE
  deleteItem = (event) => {
    axios.delete(
      '/api/items' + event.target.value
    ).then(
      (response) => {
        this.setState({
          items: response.data
        })
      }
    )
  }


  //UPDATE ROUTE
  updateItem = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('id')
    axios.put(
      '/api/items' + id,
      {
        name: this.state.updateItemName,
        quantity: this.state.updateItemQuantity,
        link: this.state.updateItemLink,
        image: this.state.updateItemImage
      }
    ).then(
      (response) => {
        this.setState({
          people: response.data,
          name: '',
          quantity: null,
          link: '',
          image: '',
        })
      }
    )
  }

  //UPDATE HANDLERS
  handleUpdateItemName = (event) => {
    this.setState({
      updateItemName: event.target.value
    })
  }

  handleUpdateItemQuantity = (event) => {
    this.setState({
      updateItemQuantity: event.target.value
    })
  }

  handleUpdateItemLink = (event) => {
    this.setState({
      updateItemLink: event.target.value
    })
  }

  handleUpdateItemImage = (event) => {
    this.setState({
      updateItemImage: event.target.value
    })
  }


  render = () => {
    return <div>
        <h1>Inventory Laravel/React App</h1>
        <div>
          <h3>Add Item</h3>
          <form onSubmit={this.createItem}>
            <input onChange={this.handleNewItemName} type="text" placeholder="Item Name" />
            <br/>
            <input onChange={this.handleNewItemQuantity} type="number" placeholder="Item Quantity" />
            <br/>
            <input onChange={this.handleNewItemLink} type="text" placeholder="Buy Link" />
            <br/>
            <input onChange={this.handleNewItemImage} type="text" placeholder="Item Image" />
            <br/>
            <input type="submit" value="Add New Item" />
          </form>
        </div>
        <hr />
        <div className="indexContainer">
          {
            this.state.items.map(
              (item, index) => {
                return <div key={index}>
                  <img src={item.image} alt={item.name} />
                  <br/>
                  {item.name}
                  <br/>
                  Quantity: {item.quantity}
                  <br/>
                  <a href={item.link}>Buy</a>
                  <br/>
                  <div className="indexButtons">
                    <button>Update</button>
                      <form id={item.id} onSubmit={this.updateItem}>
                        <input onChange={this.handleUpdateItemName} type="text" placeholder="Item Name" />
                        <br/>
                        <input onChange={this.handleUpdateItemQuantity} type="number" placeholder="Item Quantity" />
                        <br/>
                        <input onChange={this.handleUpdateItemLink} type="text" placeholder="Buy Link" />
                        <br/>
                        <input onChange={this.handleUpdateItemImage} type="text" placeholder="Item Image" />
                        <br/>
                        <input type="submit" value="Update Item" />
                      </form>
                      <br/>

                      <button value={item.id} onClick={this.deleteItem}>Delete</button>
                  </div>
                </div>
              }
            )
          }
        </div>
      </div>
  }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
