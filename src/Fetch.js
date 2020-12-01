import React, { Component } from "react";
import { Row, Col, Card, Avatar, Button, Modal } from "antd";
import axios from "axios";
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export default class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meth: [],
            visible: false,
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
                <center>
                    <h1>List of Breaking Bad Characters</h1>
                </center>
                {this.state.meth.map((results, index) => {
                    return (
                        <div className="site-card-wrapper" key={results.char_id} >
                        <Col span={12} offset={6}>    
                            <Card>
                                <center>
                                    <Avatar src={results.img} size={256} icon={<UserOutlined />} />
                                    <h2>{results.name}</h2>
                                </center>
                                <Row>
                                    <Col span={12}><p>Birthday</p></Col>
                                    <Col span={12}><p>: {results.birthday}</p></Col>
                                </Row>
                                <Row>
                                    <Col span={12}><p>Status</p></Col>
                                    <Col span={12}><p>: {results.status}</p></Col>
                                </Row>
                                <Row>
                                    <Col span={12}><p>Nickname</p></Col>
                                    <Col span={12}><p>: {results.nickname}</p></Col>
                                </Row>
                                <Row>
                                    <Col span={12}><p>Occupation</p></Col>
                                    <Col span={12}><p>: {results.occupation.join(', ')}</p></Col>
                                </Row>
                                <Row>
                                    <Col span={12}><p>Portrayed</p></Col>
                                    <Col span={12}><p>: {results.portrayed}</p></Col>
                                </Row>
                                </Card>
                            </Col>
                        </div>
                    );
                })}
            </div>
        );
    }
}