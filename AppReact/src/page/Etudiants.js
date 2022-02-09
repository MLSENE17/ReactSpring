import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';
import EtudiantService from '../Service.js/EtudiantService';

const Etudiants = () => {
    const [etudiantAll,setEtudiantAll] = useState([])
    useEffect(
        ()=>{
            EtudiantService.getAll().then(
                (res)=>{
                    setEtudiantAll(res.data)
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        }
    ,[])
  return (
    <div >
        <Header/>
        <main className="container mt-4">
            <h6 className="border-bottom pb-2 mt-4">Liste des etudiants</h6>
            <div className="d-flex justify-content-between text-rigth" >
                <Link to="etudiant/new"   className="btn btn-success" >Ajouter un Etudiant</Link>
            </div>
            <div className="d-flex text-muted pt-3">
                {etudiantAll?.length?
                    <table className="table table-bordered table-hover mt-4">
                        <thead>
                            <tr>
                                <th scope="">#</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Prenom</th>
                                <th scope="col">Classe</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {etudiantAll.map(
                                (etudiant,index)=>(
                                    <tr key={etudiant.id} >
                                        <td>{index+1}</td>
                                        <td>{etudiant.prenom} </td>
                                        <td>{etudiant.nom} </td>
                                        <td>{etudiant.classe.libelle} </td>
                                        <td>
                                            <Link  className="btn btn-danger" style={{marginRight:20}} 
                                            to={`/etudiant/show/${etudiant.id}`} >Show</Link>
                                            <Link className="btn btn-primary" to="/etudiant/edit/:id"   to={`/etudiant/edit/${etudiant.id}`} >Editer</Link>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    
                </table>
                :
                    <h1 className="text-danger">la liste est vide</h1>}
            </div>
        </main>
        <Footer/>
    </div>
  	);
};

export default Etudiants;