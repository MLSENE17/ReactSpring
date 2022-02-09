import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import TextField from './TextField';
import * as Yup from 'yup'
import Select from './Select';
import ClasseService from '../Service.js/ClasseService';
import EtudiantService from '../Service.js/EtudiantService';
const NewEtudiantEdit = (props) => {
    const [classe,setClasse] = useState([])
    const [etudiant,setEtudiant] = useState([])
    const [isEt,setIsEt] = useState(false)
    const id = props.page.match.params.id
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
    useEffect(
        ()=>{
            EtudiantService.getOne(id).then(
                (res)=>{
                    setEtudiant(res.data)
                    setIsEt(true)
                }
            )
            .catch(
                (error)=>{
                    props.page.history.push("/etudiants")
                }
            )
        }
    ,[])
    const handleSubmit = (data,id)=>{
        EtudiantService.updateEtudiant(data,id).then(
            (res)=>{
               props.page.history.push("/etudiants")
            }
        )
        .catch(
            (error)=>{
                alert("L email existe deja")
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
        <div>
        {isEt?
            <Formik
                initialValues={{
                    prenom:etudiant.prenom,
                    nom:etudiant.nom,
                    email:etudiant.email,
                    classe_id:etudiant.classe.id
                }}
                validationSchema= {validate}
                onSubmit={
                    values=>{handleSubmit(EtudiantService.toEtudiant(values),id)}
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
                                    <TextField label="Prenom" name="prenom"   type="text"/>
                                </div>
                                <div className="col-md-6">
                                    <TextField label="Nom" name="nom"  type="text"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <TextField label="Email" name="email"  type="text"/>
                                </div>
                                <div className="col-md-6">
                                    <Select label="Selectionner la Classe"  classes={classe} name="classe_id" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <button className="btn btn-dark mt-3" type="submit" style={{marginRight:20}}>Modifier</button>
                                    <button className="btn btn-danger mt-3" type="reset">Reset</button>
                                </div>
                                
                            </div>
                        </Form>
                    </div>
                    )

                }
            </Formik>
        :''}</div>
    );
};

export default NewEtudiantEdit;