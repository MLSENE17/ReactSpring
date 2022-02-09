import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import Footer from '../component/Footer';
import Header from '../component/Header';
import EtudiantService from '../Service.js/EtudiantService';

const ShowEtudiant = (props) => {
    const [oneEtudiant,setOneEtudiant] = useState([])
    const id = props.match.params.id
    const [errors,setErrors] = useState(false)
    const handleDelete=(id)=>{
        EtudiantService.deleleOne(id).then(
            (res)=>{
                //redirection vers 
                props.history.push("/etudiants");
            }
        )
        .catch(
            (error)=>{
                
                console.log(error);
            }
        )
    }
    useEffect(
        ()=>{
            EtudiantService.getOne(id).then(
                (res)=>{
                    setOneEtudiant(res.data)
                    setErrors(true)
                }
            )
            .catch
            (
                (error)=>{
                   
                    setErrors(false)
                }
            )
        }
    ,[])
    return (
        <div >
            <Header/>
            <main className="container mt-4">
             {errors?
                 <div>
                    <h6 className="border-bottom pb-2 mt-4">Show Etudiant</h6>
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action active text-center">
                            Information: <strong style={{textTransform:'uppercase'}}> {oneEtudiant.prenom}  {oneEtudiant.nom}</strong>
                        </a>
                        <span  className="list-group-item list-group-item-action">Email : {oneEtudiant.email}</span>
                        <span className="list-group-item list-group-item-action">Classe : {oneEtudiant.classe.libelle }</span>
                        <span className="list-group-item list-group-item-action text-center"><button className="btn btn-danger" type="button" onClick={()=>{window.confirm(`Vouliez vous supprimer la classe ${oneEtudiant.prenom}  ${oneEtudiant.nom}`)?handleDelete(oneEtudiant.id):console.log(false);}} >Delete</button></span>
            
                    </div>
                 </div>:<h1>Not Found</h1>
            }
           </main>
           <Footer/>
        </div>
    );
};

export default ShowEtudiant;