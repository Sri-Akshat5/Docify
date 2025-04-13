import React from 'react';
import Textbox from './Textbox';
import Uploadform from './Uploadform';
import { useLocation } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import LoginSignup from './LoginSignup';
import Account from './Account';
import Card from './Card';
import Ai from "./Ai";
import AccountLogin from './AccountLogin';
import { getCards, deleteCard, editCard  } from '../api/card';
import useIntroTour from '../hooks/useTour';

function Foreround() {

  const startTour = true; 
  useIntroTour(startTour);
  const location = useLocation();
  const path = location.pathname;
  const token = localStorage.getItem("token");

  const [cards, setCards] = useState([]);
  
  useEffect(function(){
    if(token){
      featchCards();
    }
  },[token]);

  const featchCards = async function() {
    const result = await getCards();
    if(result.success){
      setCards(result.cards);
    }
  };

  const  handleNewCards = function(card) {
    setCards(prev => [card, ...prev]);
  }

  const handleDeleteCards = async function(id){
    const confirm = window.confirm("Are you sure you want to download this doc ?");
    if(!confirm) return;
    const result = await deleteCard(id);
    if(result.success){
      setCards(prev => prev.filter(card => card._id !== id));
    } 
  }

  const handleEditCards = async function(id, newTitle, newDesc){
    const result = await editCard(id, { title: newTitle, description: newDesc });
    if (result.success) {
      setCards((prev) =>
        prev.map((card) =>
          card._id === id ? { ...card, title: newTitle, description: newDesc } : card
        )
      );
    }
  };
  
  return (
    <>
   
    {token && (
        <div className="absolute z-10 flex h-[50%] flex-wrap gap-2 mt-18 mx-5  max-w-[100%] ">
        {cards.map((card) => (
          <Card key={card._id} id={card._id} title={card.title} description={card.description} onDelete={handleDeleteCards}  onEdit={handleEditCards}/>
        ))}
      </div>
    )}
      <div className="  absolute w-full h-full bg-transparent left-0 top-0 flex justify-center items-end pb-6 sm:pb-10 text-amber-50 text-2xl">
     
        {token ? (
          path === "/" ? (<Textbox onCardCreated={handleNewCards} className="" />) : path === "/upload" ? (<Uploadform />) : path === "/ai" ? (<Ai onCardCreated={(newCard) => setCards(prev => [newCard, ...prev])} />) : (<dv><h1>Unauthorized Access</h1></dv>) 
        ) : (<LoginSignup />) }
        {path === "/account" ? (token ? <Account /> : <AccountLogin />) : null}
       
      </div>





    </>
  );
}

export default Foreround;

