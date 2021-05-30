import {NavLink} from "react-router-dom";
import React from "react";

export class Menu extends React.Component{
    exit() {
        fetch('http://yurylook.beget.tech/exitReact')
        .then(response=>response.text())
        .then(result=>{
            window.location.href='/';
        })
    }
    render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <NavLink className="navbar-brand" to="#"></NavLink>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">О нас</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add-bet">Добавить результат</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/get-bet">Аналитика</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/reg-user">Регистрация</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/auth">Авторизация</NavLink>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" onClick={this.exit} style={{backgroundColor: "rgba(255, 165, 0, 0.7)"}}>Выход</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
 }
}