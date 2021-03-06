import React from 'react';
import Button from 'grommet/components/Button';

const EstDriver = (props) => (
    <div>
        <h2>You are currently logged in as an Establishment.</h2>
        <h4>If you feel that this is a mistake, press this button to log out.</h4>
        <Button type='button' label='Log Out' onClick={props.onClick} plain={false} accent={true} />
    </div>
);

export default EstDriver;