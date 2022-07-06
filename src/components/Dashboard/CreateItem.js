import React, { useState } from 'react';
import  axios  from '../../axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateItem(props) {
  
    const [title, setTitle] = useState('');
    const [image_url, setImgUrl] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
  
    const addItem = async (event) => {
      event.preventDefault();
      let token = localStorage.getItem('token');
      if(!token){
        return toast.error('Please log in to save items.');
      }
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token} `
      }
      const data = {
            title,
            image_url,
            price,
            description
        }
    if(props.update){
      try {
        const result = await axios.put(`/items/${props.item.id}`, data, {headers});
        props.setCurrentItem(result.data.item);
        props.setItems([...props.items].map(item=>item.id === props.item.id ? result.data.item: item));
        props.setUpdate(false);
        } catch (error) {
          toast.error(error.message);
        }
  }else{
      const result = await axios.post('/items', data, {headers});
        props.setItems([...props.items, result.data]);
        props.setOpenForm(false);
    }


    };
  
    return (
      <div>
        <form onSubmit={addItem}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
          />
          <br />
          <input
            value={image_url}
            onChange={(e) => setImgUrl(e.target.value)}
            type="text"
            placeholder="imgUrl"
          />
          <br />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="price"
          />
          <br />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="description"
          />
          <br />
          <input type="submit" value="Save" />
        </form>
      </div>
    )

}


