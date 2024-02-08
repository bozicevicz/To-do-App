import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

export default function ShowTasks({ handleToggle }) {
  const onShowTasks = event => {
    let value = event.target.value;
    value && handleToggle({ value });
  };

  return (
    <div className="Toggles">
      <ToggleButtonGroup type="radio" name="options" defaultValue={1} onClick={onShowTasks}>
        <ToggleButton variant="secondary" id="tbg-radio-1" value={1}>
          All
        </ToggleButton>
        <ToggleButton variant="secondary" id="tbg-radio-2" value={2}>
          Active
        </ToggleButton>
        <ToggleButton variant="secondary" id="tbg-radio-3" value={3}>
          Completed
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
