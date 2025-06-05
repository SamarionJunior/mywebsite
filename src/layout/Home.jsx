import { useState } from 'react';
import Style from '../css/layout/home.module.css';

import {toLink} from "../js/main.js"

import {getProjects} from "../js/projects.js"

const Home = _ => {

    const [projects, setProjects] = useState(getProjects);

    return (
        <div className={Style.App}>

            <div className={Style.Links} id={Style.Navegation}>
                <div className={Style.NavegationButtons}>
                    <button className={Style.Link} id={Style.LinkHome} onClick={(e) => toLink(e, Style.Home)}>
                        <i className="fa-solid fa-house"></i>
                    </button>
                    <button className={Style.Link} id={Style.LinkProject} onClick={(e) => toLink(e, Style.Project)}>
                        <i className="fa-solid fa-folder-open"></i>
                    </button>
                </div>
            </div>

            <div className={Style.View} id={Style.Home}>
                <div className={Style.Placard}>
                    <h1>samarion<br/>junior</h1>
                    <h3>Desenvolvedor Web</h3>
                    <div className={Style.buttons}>
                        <button onClick={(e) => toLink(e, Style.Project)}>Projetos</button>
                        {/* <button onClick={(e) => toLink(e, Style.Contact)}>Contato</button> */}
                    </div>
                </div>
            </div>

            <div className={Style.View} id={Style.Project}>

                {projects.map((project, index) => (

                    <div className={project.actived ? Style.Painel : `${Style.Painel} ${Style.PainelDisabled}`} key={project.key}>
                        <div className={Style.Thumbnail}>
                            <div
                                id={Style.ThumbnailToDo}
                                style={{
                                    backgroundImage: `url('${project.thumbnail.url}')`,
                                    backgroundPosition: project.thumbnail.position
                                }}/>
                        </div>
                        <div className={Style.Description}>
                            <h4>
                                {project.title}
                            </h4>
                            <p>
                                {project.description}
                            </p>
                            <div className={Style.Actions}>
                                {project.links.map((link, index) => (
                                    // <div key={index}></div>
                                    <a 
                                        className={link.url === "" ? `${Style.Action} ${Style.ActionDisable}` : Style.Action}
                                        key={index}
                                        href={link.url + project.param}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                            {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Home;