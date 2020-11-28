import React, { Component } from "react";
import axios from "axios";
export default class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meth: [],
            char_id: 0,
            name: "",
            bithday: "",
            occupation: [],
            img: "",
            status: "",
            nickname: "",
            portrayed: "",
        };
    }
    handleButton = (title) => {
        alert(title);
    };
    componentDidMount() {
        axios({
            method: "get",
            url: "https://www.breakingbadapi.com/api/characters/",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    meth: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div className="boxWhite">
                    <center>
                        <h1>List Breaking Bad Characters</h1>
                    </center>
                    {this.state.meth.map((results, index) => {
                        return (
                            <div className="card" key={results.name}>
                                <div className="card-body">
                                    <img src={results.img}/>
                                    <h3 className="card-title">{results.name}</h3>
                                    <h5 className="card-title">Birthday : {results.birthday}</h5>
                                    <h5 className="card-title">Status : {results.status}</h5>
                                    <h5 className="card-title">Nickname : {results.nickname}</h5>
                                    <h5 className="card-title">Occupation : {results.occupation}</h5>
                                    <h5 className="card-title">Portrayed : {results.portrayed}</h5>
                                </div>
                                <button
                                    className="button"
                                    onClick={() => this.handleButton(results.name)}
                                >
                                    {" "}
                                klik aku
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}