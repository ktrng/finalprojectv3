import React, {useState} from 'react';

const Edit = (props) => {
  let [item, setItem] = useState({...props.item})


  const handleChange = (event) => {
    setItem({...item, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.editItem(item)
  }


  return (
    <div>
      <h3>Edit Item</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={item.name} placeholder="Name" onChange={handleChange} />
        <br/>
        <input type="text" name="quantity" value={item.quantity} placeholder="Quantity" onChange={handleChange} />
        <br/>
        <input type="text" name="link" value={item.link} placeholder="Buy Link" onChange={handleChange} />
        <br/>
        <input type="submit" value="Edit Item" />
      </form>
    </div>
  )
}

export default Edit;
