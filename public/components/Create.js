import React, {useState} from 'react';

const Create = (props) => {
  let emptyItem={item: ''}
  let [item, setItem] = useState(emptyItem)


  const handleChange = (event) => {
    setItem({...item, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.createItem(item)
    setItem({item: ''})
  }

  return (
    <main>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={item.name} placeholder="Name" onChange={handleChange} />
        <br/>
        <input type="text" name="quantity" value={item.quantity} placeholder="Quantity" onChange={handleChange} />
        <br/>
        <input type="text" name="link" value={item.link} placeholder="Buy Link" onChange={handleChange} />
        <br/>
        <input type="text" name="image" value={item.image} placeholder="Item Image" onChange={handleChange} />
        <br/>
        <input type="submit" value="Add Item" />
      </form>
    </main>
  )
}

export default Create;
