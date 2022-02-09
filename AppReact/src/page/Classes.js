import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import Header from '../component/Header';
import ClasseService from '../Service.js/ClasseService';
const Classes = () => {
    const [classeAll,setclasseAll] = useState([])
    useEffect(
        ()=>{
            ClasseService.getAll().then(
                (res)=>{
                    setclasseAll(res.data)
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        }
    ,[])
    const handleDelete=(id)=>{
        ClasseService.deleleOne(id).then(
            (res)=>{
                window.location.reload()
            }
        )
        .catch(
            (error)=>{
                alert("cette classe ne peut pas etre supprime")
                console.log(error);
            }
        )
    }
  return (
    <div>
        <Header/>
        <main className="container mt-4">
            <h6 className="border-bottom pb-2 mt-4">Liste des classes</h6>
            <div className="d-flex justify-content-between text-rigth" >
                <Link to="classe/new"   className="btn btn-secondary" >Ajouter Une classe</Link>
            </div>
            <div className="d-flex text-muted pt-3">
                <table className="table table-bordered table-hover mt-4">
                        <thead>
                            <tr>
                                <th scope="">#</th>
                                <th scope="col">Libelle</th>
                                <th scope="col">Classe</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classeAll.map(
                                (classe,index)=>(
                                    <tr key={classe.id} >
                                        <td>{index+1}</td>
                                        <td>{classe.libelle} </td>
                                        <td>
                                            <button className="btn btn-danger" type="button" onClick={()=>{window.confirm(`Vouliez vous supprimer la classe ${classe.libelle}`)?handleDelete(classe.id):console.log(false);}} >Delete</button>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    
                </table>
            </div>
        </main>
        <Footer/>
    </div>
  	);
};

export default Classes;