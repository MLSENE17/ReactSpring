import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import HostService from '../Service.js/HostService';
import ImageService from '../Service.js/ImageService';

const ShowImage = () => {
    const [imageOut,SetImageOut] = useState([])
    const [allUrl,setAllUrl] = useState([])
    useEffect(() => {
        ImageService.getAllImage().then(
            (res)=>{
                setAllUrl(res.data)
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )
    }, []);
    const uploadImage=(e)=>{
        e.preventDefault();
        ImageService.postImage(imageOut).then(
            (res)=>{
                alert("Image bien enregistrer")
                window.location.reload()
            }
        )
        .catch(
            (error)=>{
                alert("Image existe deja")
                window.location.reload()
            }
        )
    }
    const handleDelete = ()=>{
        ImageService.deleteAll().then(
            (res)=>{
                alert("Suppression effectuer")
                window.location.reload()
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )
    }
    return (
        <div>
            <Header/>
                <br/><br/>
                <main className="container mt-4">
                    <div className="row">
                        <form className="was-validated" onSubmit={(e)=>uploadImage(e)}>
                            <div className="col-md-6">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="validatedCustomFile" onChange={(e)=>{SetImageOut(e.target.files[0])}} required/>
                                    <label className="custom-file-label" htmlFor="validatedCustomFile" >Selectionner un fichier</label>
                                    
                                </div>
                            </div> <br/>
                            <div className="col-md-6">
                                <button className="btn btn-success" >Upload</button>
                            </div><br/>
                            {allUrl?.length?
                                <div className="col-md-6">
                                    <button className="btn btn-danger" onClick={()=>{handleDelete()}}>Delete All Image</button>
                                </div>:null
                            }
                        </form>
                    </div>  
                    <br/>
                    {allUrl?.length?
                        <div className="row">
                            {allUrl.map(
                                (images)=>(
                                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                                        <img key={images.id}
                                        src={`${HostService.getHost()}/files/files/${images.name}`}
                                        className="w-100 shadow-1-strong rounded mb-4"
                                        alt={images.name}
                                        title={images.title}
                                        />
                                     </div>
                                )
                            )}
                          
                           
                        </div>    
                    :null

                    }
                </main>
            <br/><br/>
            <Footer/>
        </div>
    );
};

export default ShowImage;