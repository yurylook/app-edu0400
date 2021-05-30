import React from 'react';

export class RegUser extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            lastname: '',
            email: '',
            pass: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        console.log("сообщение отправлено");
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('lastname', this.state.lastname);
        formData.append('email', this.state.email);
        formData.append('pass', this.state.pass);

        fetch('http://yurylook.beget.tech/regUser', {
            method: "POST",
            cors: "no-cors",
            body: formData
        }).then(response => response.text())
            .then(result => {
                if (result == 200) {
                    this.setState({
                        saySuccess: 'Вы усешно зарегистрированы'
                    });
                } else if (result == 500) {
                    this.setState({
                        saySuccess: 'Такой пользователь уже существует'
                    });
                }else{
                    console.log("Немзвестная ошибка");
                }
            });
    }
    render() {
        return (
            <div className="container my-5">
                <h1 className="text-center my-3">Регистрация на сайте</h1>
                <div className="col-md-5 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <input name="name" value={this.state.name} onChange={this.handleChange} type="text" className="form-control" placeholder="имя" />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" type="text" value={this.state.lastname} onChange={this.handleChange} name="lastname" required placeholder="фамилия" />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" type="email" value={this.state.email} onChange={this.handleChange} name="email" required placeholder="E-Mail" />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" type="password" value={this.state.pass} onChange={this.handleChange} name="pass" required placeholder="Пароль" />
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="form-control btn btn-primary my-3" value="Зарегистрироваться" />
                        </div>
                    </form>
                    <div className="info" >{this.state.saySuccess}</div>
                </div>
            </div>
        )
    }
}

