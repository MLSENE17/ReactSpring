import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import NewClasse from '../component/NewClasse';


const NewClassePage = (props) => {
    return (
        <div>
            <Header/>
            <main className="container mt-4">
                <div className="container mt-3">
                    <NewClasse page={props} />
                </div>
            </main>
            <Footer/>
        </div>
       
    );
};

export default NewClassePage;