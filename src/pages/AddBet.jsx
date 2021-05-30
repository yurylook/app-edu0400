import React from 'react';

export class AddBet extends React.Component {
    constructor() {
        super();
        this.state = {
            liga: '',
            team1: '',
            team2: '',
            bet: '',
            score: '',
            coeff: '',
            summa: '',
            win: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleButtonReset = this.handleButtonReset.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleButtonReset() {
        //event.preventDefault();
        this.setState({
            liga: '',
            team1: '',
            team2: '',
            bet: '',
            score: '',
            coeff: '',
            summa: '',
            win: ''
        });
        console.log("отправлено");
    }
    handleSubmit(event) {
        console.log("сообщение отправлено");
        event.preventDefault();
        const formData = new FormData();
        formData.append('liga', this.state.liga);
        formData.append('team1', this.state.team1);
        formData.append('team2', this.state.team2);
        formData.append('bet', this.state.bet);
        formData.append('score', this.state.score);
        formData.append('coeff', this.state.coeff);
        formData.append('summa', this.state.summa);
        formData.append('win', this.state.win);
        fetch('http://yurylook.beget.tech/updateBet', {
            method: "POST",
            cors: "no-cors",
            body: formData
        }).then(response => response.text())
            .then(result => {
                if (result == 200) {
                    this.setState({
                        saySuccess: 'Запись занесена в БД'
                    });
                } else {
                    this.setState({
                        saySuccess: 'Запись занесена в БД'
                    });
                }
            });
    }
    render() {
        return (
            <div className="container my-5">
                <h1 className="text-center my-3">Введите информацию о пари</h1>
                <div className="col-md-5 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <input name="liga" value={this.state.liga} onChange={this.handleChange} type="text" className="liga form-control" required placeholder="liga" />
                        </div>
                        <div className="mb-3">
                            <input className="team1 form-control" type="text" value={this.state.team1} onChange={this.handleChange} name="team1" required placeholder="team1" />
                        </div>
                        <div className="mb-3">
                            <input className="team2 form-control" type="text" value={this.state.team2} onChange={this.handleChange} name="team2" required placeholder="team2" />
                        </div>
                        <div className="mb-3">
                            <input className="bet form-control" type="text" value={this.state.bet} onChange={this.handleChange} name="bet" required placeholder="bet" />
                        </div>
                        <div className="mb-3">
                            <input className="score form-control" type="text" value={this.state.score} onChange={this.handleChange} name="score" required placeholder="score" />
                        </div>
                        <div className="mb-3">
                            <input className="coeff form-control" type="text" value={this.state.coeff} onChange={this.handleChange} name="coeff" required placeholder="coefficient" />
                        </div>
                        <div className="mb-3">
                            <input className="summa form-control" type="text" value={this.state.summa} onChange={this.handleChange} name="summa" required placeholder="summa" />
                        </div>
                        <div className="mb-3">
                            <input className="win form-control" type="text" value={this.state.win} onChange={this.handleChange} name="win" required placeholder="win" />
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="form-control btn btn-primary my-3" value="Внести запись в базу" />
                        </div>
                    </form>
                    <button onClick={this.handleButtonReset} >Очистить форму</button>
                    <div>
                     {this.state.saySuccess}
                    </div>
                </div>
            </div>
        )
    }
}

