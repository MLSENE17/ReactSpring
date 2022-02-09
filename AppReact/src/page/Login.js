import { Form, Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router';
import * as Yup from 'yup'
import TextField from '../component/TextField';
import AuthService from '../Service.js/AuthService';
import Storage from '../Service.js/Storage';
const Login = (props) => {
    let history = useHistory()
    const validate = Yup.object({
        email:Yup.string()
            .email('Veuillez saisir un bon email')
            .required('Veuiller remplire cet input svp'),
        password:Yup.string()
            .required('Veuiller remplire cet input svp'),
    })
    const handleSubmit=(value)=>{
        AuthService.login(value).then(
            (res)=>{
                Storage.setToken(res.data.accessToken)
                history.push("/")
            }
        )
        .catch(
            (error)=>{
                alert("Email ou mot de pass incorrect")
            }
        )
    }
    return (
        <div>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image"/>
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <Formik
                                initialValues={{
                                    email:'',
                                    password:''
                                }}
                                validationSchema= {validate}
                                onSubmit={
                                    values=>{handleSubmit(values)}
                                }
                            >
                            {
                                formik=>(
                                    <Form>
                                        <div className="form-outline mb-4">
                                          
                                            <TextField label="Email address" name="email" type="email" className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-outline mb-4">
                                       
                                            <TextField label="Password" name="password" type="password" className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-outline mb-4">
                                                <button className="btn btn-primary mt-3" type="submit" style={{marginRight:20}}>Se connecter</button>
                                        </div>
                                    </Form>
                                )
                            }
                            </Formik>
                        </div>
                    </div>
                </div>
                </section>
        </div>
    );
};

export default Login;