import React from 'react';
import PropTypes from 'prop-types';

export function DeleteModal({ titleTask }) {
  return (
    <div className="p-6 bg-white rounded-lg space-y-4">
      <p>¿Seguro que quieres eliminar esta tarea?</p>
      <p className="text-lg text-black font-medium ">
        *
        {' '}
        {titleTask}
      </p>
      <button type="button" className="w-full bg-warn p-3 rounded-lg text-white">Si, eliminar</button>
    </div>
  );
}

DeleteModal.propTypes = {
  titleTask: PropTypes.string.isRequired,
};
