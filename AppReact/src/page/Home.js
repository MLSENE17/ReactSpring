import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import EtudiantService from '../Service.js/EtudiantService';

const Home = () => {
    const [totalClasse,setTotalClasse] = useState([])
    useEffect(
        ()=>{
            EtudiantService.getTotal().then(
                (res)=>{
                    setTotalClasse(res.data)
                }
            )
            .catch(
                (error)=>{
                    console.log("probleme de connexion")
                }
            )
        }
    ,[])
    return (
        <div >
            <Header/>
            <main className="container mt-4">
                <h6 className="border-bottom pb-2 mt-4">Accueil</h6>
                    <div className="row">
                    <div className="col-sm-6">
                        <div className="card border-success mb-3" >
                            <div className="card-header bg-transparent border-success">Total Etudiant</div>
                            <div className="card-body text-success">
                                <h5 className="card-title">Nombre Etudiant:</h5>
                                <p className="card-text">{totalClasse.etudiant} etudiants</p>
                            </div>
                            <div className="card-footer bg-transparent border-success">School</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card border-info mb-3" >
                            <div className="card-header bg-transparent border-info">Total Classe</div>
                            <div className="card-body text-info">
                                <h5 className="card-title">Nombre Classe:</h5>
                                <p className="card-text">{totalClasse.classe} classes</p>
                            </div>
                            <div className="card-footer bg-transparent border-info">School</div>
                        </div>
                    </div>
                </div>
           </main>
           <Footer/>
        </div>
    );
};

export default Home;