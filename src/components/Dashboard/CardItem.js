import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  axios  from '../../axios';
import CreateItem from './CreateItem';
import { CardBody, CardImg, Title, CardText, Card, Button } from './Dashboard.style';

export default function CardItem(props) {
  const [update, setUpdate] = useState(false);
    const openModal = () => {
        props.setCurrentItem(props.item);
        props.setOpenForm(true)
    }
  const deleteItem = async () => {
    let token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token} `
      }
    try {
    const result = await axios.delete(`/items/${props.item.id}`,{headers: headers});
      if(result.status === 200){
        props.setItems([...props.items].filter(item=> item.id !== props.item.id));
        props.closeModal();}
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Card key={props.item.id}>
          <CardImg src={props.item.image_url} />
          <CardBody>
            <Title>{props.item.title}</Title>
            <CardText>Price: {props.item.price}</CardText>
            <CardText>
              {props.item.description || ''}
            </CardText>
            {
                props.openForm ? <div>
                <Button onClick={()=>setUpdate(true)}>Update</Button>
                <Button onClick={deleteItem}>Delete</Button>
                </div> :
                <Button onClick={openModal}>Open</Button>
            }
            {update && <CreateItem setCurrentItem={props.setCurrentItem} update={update} setUpdate={setUpdate} item={props.item} items={props.items} setItems={props.setItems}/>}
          </CardBody>
          <ToastContainer />
        </Card>
  )
}
