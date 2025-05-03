import { Link } from "react-router-dom";
import Style from './home.module.css';

import {toLink} from "./main"

import {projects} from "../../contents/projects.js"

const Home = _ => {

    return (
        <div className={Style.App}>
            <div className={Style.Links} id={Style.Navegation}>
                <button className={Style.Link} id={Style.LinkHome} onClick={(e) => toLink(e, Style.Home)}>
                    <i className="fa-solid fa-house"></i>
                </button>
                <button className={Style.Link} id={Style.LinkProject} onClick={(e) => toLink(e, Style.Project)}>
                    <i className="fa-solid fa-folder-open"></i>
                </button>
            </div>

            <div className={Style.View} id={Style.Home}>
                <div className={Style.Placard}>
                    <h1>samarion<br/>junior</h1>
                    <h3>Desenvolvedor Web</h3>
                    <div className={Style.buttons}>
                        <button onClick={(e) => toLink(e, Style.Project)}>Projetos</button>
                        <button onClick={(e) => toLink(e, Style.Contact)}>Contato</button>
                    </div>
                </div>
            </div>

            <div className={Style.View} id={Style.Project}>

                {projects.map((project, index) => (

                    <div className={project.actived ? Style.Painel : `${Style.Painel} ${Style.PainelDisabled}`} key={index}>
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
                                    <Link 
                                        key={index}
                                        to={link.url + project.param}
                                        className={link.url === "" ? `${Style.Action} ${Style.ActionDisable}` : Style.Action}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                            {link.name}
                                    </Link>
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