import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import NewEtudiant from '../component/NewEtudiant';

const NewEtudiantPage = (props) => {
    return (
        <div>
             <Header/>
             <main className="container mt-4">
                <div className="container mt-3">
                    <NewEtudiant page={props}/>
                </div>
                </main>
            <Footer/>
        </div>
    );
};

export default NewEtudiantPage;