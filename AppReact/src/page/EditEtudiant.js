import React from 'react';
import NewEtudiantEdit from '../component/NewEtudiantEdit';

const EditEtudiant = (props) => {
    return (
        <div className="container mt-3">
            <NewEtudiantEdit page={props} />
        </div>
    );
};

export default EditEtudiant;