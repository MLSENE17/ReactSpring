import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import TextField from './TextField';
import * as Yup from 'yup'
import Select from './Select';
import ClasseService from '../Service.js/ClasseService';
import EtudiantService from '../Service.js/EtudiantService';
const NewEtudiant = (props) => {
    const [classe,setClasse] = useState([])
    useEffect(
        ()=>{
            ClasseService.getAll().then(
                (res)=>{
                    setClasse(res.data)
                }
            )
            .catch(
                (error)=>{
                    alert("probleme de conexion")
                }
            )
        }
    ,[])
    const handleSubmit = (data)=>{
        EtudiantService.postEtudiant(data).then(
            (res)=>{
               props.page.history.push("/etudiants")
            }
        )
        .catch(
            (error)=>{
                alert("Lémail existe deja")
                console.log(error);
            }
        )
    }
    const validate = Yup.object({
        prenom:Yup.string()
            .max(15,'plus de 15 caractere')
            .required('Veuiller remplir cet input svp'),
        nom:Yup.string()
            .max(20,'plus de 20 caractere')
            .required('Veuiller remplir cet input svp'),
        email:Yup.string()
            .email('Veuillez saisir un bon email')
            .required('Veuiller remplire cet input svp'),
        classe_id:Yup.string()
            .required('veuiller remplir ce champ')
    })
    return (
        <Formik
            initialValues={{
                prenom:'',
                nom:'',
                email:'',
                classe_id:''
            }}
            validationSchema= {validate}
            onSubmit={
                values=>{handleSubmit(EtudiantService.toEtudiant(values))}
            }
        >
            {formik=>(
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">
                    Creer un etudiant
                    </h1>
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <TextField label="Prenom" name="prenom" type="text"/>
                            </div>
                            <div className="col-md-6">
                                <TextField label="Nom" name="nom" type="text"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <TextField label="Email" name="email" type="text"/>
                            </div>
                            <div className="col-md-6">
                                <Select label="Selectionner la Classe" classes={classe} name="classe_id" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                 <button className="btn btn-dark mt-3" type="submit" style={{marginRight:20}}>Register</button>
                                 <button className="btn btn-danger mt-3" type="reset">Reset</button>
                            </div>
                            
                        </div>
                    </Form>
                </div>
                )

            }
        </Formik>
    );
};

export default NewEtudiant;