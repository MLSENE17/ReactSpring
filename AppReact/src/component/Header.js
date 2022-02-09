import React, {  useState } from 'react';
import { NavLink,Link, Redirect, useHistory } from 'react-router-dom';
import AuthService from '../Service.js/AuthService';
import EtudiantService from '../Service.js/EtudiantService';
const Header = () => {
    const [searchEtudiant,setSearchEtudiant] = useState([])
    const [changeInput,setChangeInput] = useState(false)
    let history = useHistory()
    const handleChange = (data)=>{
        if(data.keyword===""){
            setChangeInput(false)
        }else{
            setChangeInput(true)
        }
        EtudiantService.searchEtudiant(data).then(
            (res)=>{
                setSearchEtudiant(res.data)
            }
        )
        .catch(
            (error)=>{
                setSearchEtudiant([])
            }
        )
    }
    const handleLogout =()=>{
        AuthService.logout()
        history.push('/login')
    }
    return (
        <div>   
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">School MLS</Link>
                    <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           
                            <li className="nav-item">
                                <NavLink to="/"  className="nav-link" activeClassName="active" >Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/etudiants" activeClassName="active">Etudiants</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/classes" activeClassName="active">Classes</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/all/image" activeClassName="active">Image</NavLink>
                            </li>
                            <li className="nav-item">
                            <span className="nav-link active" onClick={()=>{handleLogout()}} style={{cursor:'pointer'}} >Deconnecter</span>
                            </li>
                        </ul>
                        <div>
                            <input className="form-control me-2" type="search" placeholder="Rechercher un etudiant" aria-label="Search" onChange={(e)=>handleChange({"keyword":e.target.value})}/>
                            <div  className={`dropdown dropdown-content ${changeInput && 'show '}`} id="search">
                                {searchEtudiant?.length?
                                searchEtudiant.map(
                                    (etudiant)=>(
                                        <a key={etudiant.id} href={`/etudiant/show/${etudiant.id}`} >{etudiant.prenom} {etudiant.nom}</a>
                                    )
                                ): <span className="text-danger">No results</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <br/>
            <br/>
        </div>
    );
};

export default Header;