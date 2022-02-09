import { Form, Formik } from 'formik';
import React from 'react';
import TextField from './TextField';
import * as Yup from 'yup'
import ClasseService from '../Service.js/ClasseService';
const NewClasse = (props) => {
    const handleSubmit = (data)=>{
        ClasseService.postClasse(data).then(
            (res)=>{
               props.page.history.push("/classes")
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
        libelle:Yup.string()
            .max(15,'plus de 15 caractere')
            .required('Veuiller remplir cet input svp'),
        
    })
    return (
        <Formik
            initialValues={{
                libelle:''
            }}
            validationSchema= {validate}
            onSubmit={
                values=>{handleSubmit(values)}
            }
        >
            {formik=>(
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">
                    Creer une Classe
                    </h1>
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <TextField label="Classe" name="libelle" type="text"/>
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

export default NewClasse;