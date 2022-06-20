import React, { useEffect, useState } from 'react'
import NewTrainerForm from '../components/trainers/NewTrainerForm';
import TrainerList from '../components/trainers/TrainerList';

const TrainerContainer = () => {

    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/trainers")
        .then(response => response.json())
        .then(data => setTrainers(data))
    }, [])

    const postTrainer = (newTrainer) => {
      fetch("http://localhost:8081/trainers/", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newTrainer)
      })
      .then(response => response.json())
      .then(savedTrainer => setTrainers([...trainers, savedTrainer]));

    }


  return (
    <>
    <NewTrainerForm postTrainer={postTrainer}/>
    <TrainerList 
      trainers={trainers} />
    </>
  )
}

export default TrainerContainer;