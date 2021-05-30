import React from 'react';

export class AuthUser extends React.Component {
    constructor() {
        super();
        this.state = {
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
        formData.append('email', this.state.email);
        formData.append('pass', this.state.pass);

        fetch('http://yurylook.beget.tech/authUser', {
            credentials: 'include',
            method: "POST",
            cors: "no-cors",
            body: formData
        }).then(response => response.text())
            .then(result => {
                if (result == 200) {
                    this.setState({
                        saySuccess: 'Доступ разрешен'
                    });
                } else if (result == 500) {
                    this.setState({
                        saySuccess: 'Неправильный логин или пароль'
                    });
                }else{
                    console.log("Немзвестная ошибка");
                }
            });
    }
    render() {
        return (
            <div className="container my-5">
                <h1 className="text-center my-3">Авторизация на сайте</h1>
                <div className="col-md-5 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <input className="form-control" type="email" value={this.state.email} onChange={this.handleChange} name="email" required placeholder="E-Mail" />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" type="password" value={this.state.pass} onChange={this.handleChange} name="pass" required placeholder="Пароль" />
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="form-control btn btn-primary my-3" value="Войти" />
                        </div>
                    </form>
                    <div className="info" >{this.state.saySuccess}</div>
                </div>
            </div>
        )
    }
}

