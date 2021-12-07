

class App extends React.Component {
  state = {
    items: []
  }

  //GET ROUTE
  // componentDidMount() is like useEffect to my understanding
  componentDidMount = () => {
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
      '/api/items',
      {
        name: this.state.newItemName,
        quantity: this.state.newItemQuantity,
        link: this.state.newItemLink,
        image: this.state.newItemImage
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
      '/api/items/' + event.target.value
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
      '/api/items/' + id,
      {
        name: this.state.updateItemName || item.name,
        quantity: this.state.updateItemQuantity || item.quantity,
        link: this.state.updateItemLink || item.link,
        image: this.state.updateItemImage || item.image
      }
    ).then(
      (response) => {
        this.setState({
          items: response.data,
          name: '',
          quantity: '',
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
        <h1>Supply Managr</h1>
        <div>
          <h3>Add Item</h3>
          <form onSubmit={this.createItem}>
            <input onKeyUp={this.handleNewItemName} type="text" placeholder="Item Name" />
            <br/>
            <input onKeyUp={this.handleNewItemQuantity} type="number" placeholder="Item Quantity" />
            <br/>
            <input onKeyUp={this.handleNewItemLink} type="text" placeholder="Buy Link" />
            <br/>
            <input onKeyUp={this.handleNewItemImage} type="text" placeholder="Item Image" />
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
                        <input onChange={this.handleUpdateItemName} type="text" placeholder={item.name} />
                        <br/>
                        <input onChange={this.handleUpdateItemQuantity} type="number" placeholder={item.quantity} />
                        <br/>
                        <input onChange={this.handleUpdateItemLink} type="text" placeholder={item.link} />
                        <br/>
                        <input onChange={this.handleUpdateItemImage} type="text" placeholder={item.image} />
                        <br/>
                        <input type="submit" value="Update Item" />
                      </form>
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
