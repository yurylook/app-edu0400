import React from 'react';
import { Link } from "react-router-dom";

function PostPreview(props) {

   return (
   <div className="row">
        <div className="col-sm-1">{props.id_user}</div>
        <div className="col-sm-1">{props.liga}</div>
        <div className="col-sm-4">{props.team1}-{props.team2}</div>
        <div className="col-sm-2">{props.bet}</div>
        <div className="col-sm-1">{props.coeff}</div>
        <div className="col-sm-1">{props.score}</div>
        <div className="col-sm-1">{props.summa}</div>
        <div className="col-sm-1">{props.win}</div>
  </div>
   )

}


export class GetBet extends React.Component {
    constructor() {
        super();
        this.state = {
            liga: '',
            team: '',
            bet: '',
            score: '',
            coeff: '',
            summa: '',
            win: '',
            postPreview: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleButtonReset = this.handleButtonReset.bind(this);
    }
    handleButtonReset() {
        //event.preventDefault();
        this.setState({
            liga: '',
            team: '',
            bet: '',
            score: '',
            coeff: '',
            summa: '',
            win: '',
            postPreview: []
        });
        console.log("отправлено");
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
        formData.append('liga', this.state.liga);
        formData.append('team', this.state.team);
        formData.append('bet', this.state.bet);
        formData.append('score', this.state.score);
        formData.append('coeff', this.state.coeff);
        formData.append('summa', this.state.summa);
        formData.append('win', this.state.win);
        fetch('http://yurylook.beget.tech/selectBet', {
            method: "POST",
            cors: "no-cors",
            body: formData
        }).then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({

                    postPreview: result.filter(item => (item.liga === this.state.liga.toLowerCase() || this.state.liga === "") &&
                        (item.team1 === this.state.team.toLowerCase() || item.team2 === this.state.team.toLowerCase() || this.state.team === "") &&
                        (item.bet === this.state.bet || this.state.bet === "") &&
                        (item.score === this.state.score || this.state.score === "") &&
                        (item.coeff === this.state.coeff || this.state.coeff === "") &&
                        (+item.summa < this.state.summa || this.state.summa === "") &&
                        (+item.win * this.state.win >= 0 || this.state.win === "")
                    ).map((post, index) => {
                        return <PostPreview
                            key={index}
                            id_user={post.id_user}
                            liga={post.liga}
                            team1={post.team1}
                            team2={post.team2}
                            bet={post.bet}
                            coeff={post.coeff}
                            score={post.score}
                            summa={post.summa}
                            win={post.win} />
                    })
                })

            });
    }
    render() {
        return (
            <div className="container my-5">
                <h1 className="text-center my-3">Введите параметры выбора</h1>
                <div className="col-md-5 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <input name="liga" value={this.state.liga} onChange={this.handleChange} type="text" className="liga form-control" placeholder="liga" />
                        </div>
                        <div className="mb-3">
                            <input className="team form-control" type="text" value={this.state.team} onChange={this.handleChange} name="team" placeholder="team" />
                        </div>
                        <div className="mb-3">
                            <input className="bet form-control" type="text" value={this.state.bet} onChange={this.handleChange} name="bet" placeholder="bet" />
                        </div>
                        <div className="mb-3">
                            <input className="score form-control" type="text" value={this.state.score} onChange={this.handleChange} name="score" placeholder="score" />
                        </div>
                        <div className="mb-3">
                            <input className="coeff form-control" type="text" value={this.state.coeff} onChange={this.handleChange} name="coeff" placeholder="coefficient" />
                        </div>
                        <div className="mb-3">
                            <input className="summa form-control" type="text" value={this.state.summa} onChange={this.handleChange} name="summa" placeholder="summa" />
                        </div>
                        <div className="mb-3">
                            <input className="win form-control" type="text" value={this.state.win} onChange={this.handleChange} name="win" placeholder="win" />
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="form-control btn btn-primary my-3" value="Выбрать" />
                        </div>
                    </form>
                    <button onClick={this.handleButtonReset} >Очистить форму</button>
                </div>
                             {this.state.postPreview}

            </div>
        )
    }
}

