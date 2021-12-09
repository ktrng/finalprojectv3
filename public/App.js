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
        name: this.state.updateItemName,
        quantity: this.state.updateItemQuantity,
        link: this.state.updateItemLink,
        image: this.state.updateItemImage
      }
    ).then(
      (response) => {
        this.setState({
          items: response.data,
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
    return <div id="body">
        <h1>Supply Managr</h1>
        <div className="add-form">
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
            <input className="formbutton" type="submit" value="Add New Item" />
          </form>
        </div>
        <div className="indexContainer">
          {
            this.state.items.map(
              (item, index) => {
                return <div className="item" key={index}>
                  <div className="imgContainer">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <br/>
                  <p>{item.name}</p>
                  <br/>
                  <p>Quantity: {item.quantity}</p>
                  <br/>
                  <a href={item.link}>Buy</a>
                  <br/>
                  <div className="hr"></div>
                  <div clasName="editContainer">
                    <h3>Edit Item</h3>
                    <form className="edit-form" id={item.id} onSubmit={this.updateItem}>
                      Name: <input onChange={this.handleUpdateItemName} type="text" placeholder={item.name} />
                      <br/>
                      Quantity: <input onChange={this.handleUpdateItemQuantity} type="number" placeholder={item.quantity} />
                      <br/>
                      Buy Link: <input onChange={this.handleUpdateItemLink} type="text" placeholder={item.link} />
                      <br/>
                      Image: <input onChange={this.handleUpdateItemImage} type="text" placeholder={item.image} />
                      <br/>
                      <input className="formbutton" type="submit" value="Update Item" />
                    </form>
                    <button className="button" value={item.id} onClick={this.deleteItem}>Delete</button>
                  </div>
                </div>
              }
            )
          }
        </div>
        <footer>
          <a href="https://github.com/ktrng/finalprojectv3">GitHub</a>
          <a href="https://www.linkedin.com/in/kvntrng/">LinkedIn</a>
        </footer>
        {console.log(this.state.items[1])}
      </div>
  }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
