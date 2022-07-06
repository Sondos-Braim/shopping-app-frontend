import axios from '../../axios';
import React, { useEffect, useState } from 'react'
import { Button, CardsContainer } from './Dashboard.style';
import {Modal} from 'react-bootstrap';
import CreateItem from './CreateItem';
import CardItem from './CardItem';

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/items');
      setItems(result.data);
    };

    return () => {
      fetchData()
    }
  }, [])

const closeModal = () => {
  setOpenForm(false);
  setCurrentItem(null);
}
  return (
    <>
    <Button onClick={()=>setOpenForm(true)}>Add New Item</Button>
    <CardsContainer>
      {
        items.map(item => <CardItem item={item} setOpenForm={setOpenForm} setCurrentItem={setCurrentItem}/>)
      }
    </CardsContainer> 
    <Modal
        show={openForm}
        onHide={closeModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        {currentItem ? 
          <CardItem openForm={openForm} item={currentItem} closeModal={closeModal} setItems={setItems} items={items} setCurrentItem={setCurrentItem}/>:
          <CreateItem setOpenForm={setOpenForm} setItems={setItems} items={items}/>
        }
  </Modal>
    </>
  )
}
