import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PRIORITIES, STATUS } from '../../common/contants';
import { Modal } from '../shared/Modal';
import { DeleteModal } from './DeleteModal';

export function TaskCard({ task }) {
  const [isActive, setIsActive] = useState(false);

  const priorityStyles = () => {
    if (task.priority === PRIORITIES.ALTA) {
      return 'bg-warn text-white';
    } if (task.priority === PRIORITIES.MEDIA) {
      return 'bg-[#8FBC8B] text-white';
    } if (task.priority === PRIORITIES.BAJA) {
      return 'bg-[#D3D3D3] text-white';
    }
    return '';
  };

  const stateStyles = () => {
    if (task.state === STATUS.EN_PROGRESO) {
      return 'bg-gray-400';
    } if (task.state === STATUS.COMPLETADO) {
      return 'bg-green-400';
    }
    return '';
  };

  const toogle = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="flex flex-col bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden w-96">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1 mb-3">
          <div className="flex justify-between items-center text-center mb-4">
            <p className="text-sm">
              Estado:
              {' '}
              <span className={`p-1.5 rounded-md ${stateStyles()}`}>En progreso</span>
            </p>
            <p className="text-black text-sm">
              Prioridad:
              {' '}
              <span className={`p-1.5 rounded-md ${priorityStyles()}`}>{task.priority}</span>
            </p>
          </div>
          <p className="text-xl font-medium text-black">
            {task.title}
          </p>
          <p className="text-md text-gray-900">
            {task.description}
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <button type="button" className="bg-base text-white p-2 rounded-md w-32">
            Completar
          </button>
          <button onClick={toogle} type="button" className="bg-warn text-white p-2 rounded-md w-32">
            Eliminar
          </button>
        </div>
      </div>
      <Modal toogle={toogle} active={isActive}>
        <DeleteModal titleTask={task.title} />
      </Modal>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
};
