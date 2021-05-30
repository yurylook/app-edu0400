import React from 'react';

export class Blog extends React.Component {
    constructor() {
        super();
    }
    render() {

        return (
            <div>
                <h1>Cпортивная статистика он-лайн</h1>
                <img src={"https://cdn.pixabay.com/photo/2017/03/15/23/02/football-2147773__340.jpg"} width={"700"} height={"400"} />
                <p>
                    Будь в курсе самых интересных последних событий в мире спорта!
                </p>
            </div>
        )
    }

}