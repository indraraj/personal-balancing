import React from 'react';
import './ActionMenu.css';

const ActionMenu = ( ) =>{
    return (
        <div className='ActionMenu'>
            <button>Create new Doc</button>
            <ul>
                <li className='CreateFolder'><span>Create new Folder</span></li>
                <li className='CreateTemplate'><sapn>Create with template</sapn></li>
                <li className='CreateNotes'><span>Create meeting notes</span></li>
            </ul>
        </div>
    )
}

export default ActionMenu;