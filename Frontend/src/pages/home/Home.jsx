import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components';
import { Modal } from '../../components/shared/Modal';
import { TaskForm } from '../../components/tasks/TaskForm';
import { TaskCard } from '../../components/tasks/TaskCard';
import { assignmentsService } from '../../services/assigementService';

export function Home() {
  const [isActive, setIsActive] = useState(false);
  const [task, setTask] = useState({
    title: 'Comprar leche',
    description: 'tengo que ir al supermercado para comprar leche, huevos, pan, frutas para le jugo, mantequellia, arroz, pasta, carne, pollo, pescado, y verduras',
    priority: 'Alta',
    state: 'Completada',
  });
  const toogle = () => {
    setIsActive(!isActive);
  };

  // useEffect(() => {
  //   const getTask = async () => {
  //     const data = await assignmentsService.getAll();
  //     setTask(data);
  //   };
  //   getTask();
  //   console.log(task);
  // }, [isActive]);

  return (
    <>
      <Navbar toogle={toogle} />
      <div className="h-auto p-3">
        <TaskCard task={task} />
      </div>

      <Modal active={isActive} toogle={toogle}>
        <TaskForm />
      </Modal>
    </>
  );
}
