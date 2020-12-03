import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';
export const CardList = props => (

    <div className='card-list'>
        {
            props.monsters.map(beast => (
                <Card key={beast.id} beast={beast}>
                    {/* beast is passed as the props in this case to Card like how this.setstate.monsters was passed
                    inside app.js into CardList */}
                </Card>
            ))
        }
    </div>
);