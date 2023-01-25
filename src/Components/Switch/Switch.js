import React from 'react';
import './switch.css';

const Switch = ({ falseName, trueName, state, setState }) => {
  return (
    <label className='react-switch'>
      <input
        checked={state}
        onChange={() => setState(!state)}
        className='react-switch-checkbox'
        type='checkbox'
      />
      <div className='react-switch-button' />
      <div className='react-switch-labels'>
        <span>
          <div>{falseName}</div>{' '}
        </span>
        <span>
          <div> {trueName}</div>{' '}
        </span>
      </div>
    </label>
  );
};

export default Switch;
