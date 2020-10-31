import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Card, Row, Col } from 'antd';

//Style
import './style.scss';

//Actions
import { loginSubmit, loginSubmitSuccess } from './actions/loginSubmit';

//Components
import LoginForm from './components/LoginForm/index';
import history from '../../store/history';

//Misc imports
import logo from '../../assets/logo-big.png';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitFormInfo = this.handleSubmitFormInfo.bind(this);
    }

    componentDidMount() {
        if(this.props.token !== '' && localStorage.getItem('token') !== null) {
            history.push('/home');
        } else if(localStorage.getItem('token') !== null) {
            this.props.loginSuccess(localStorage.getItem('token'));
        }
    }
    
    componentDidUpdate() {
        if(this.props.token !== '') {
            history.push('/home');
        }
    }

    handleSubmitFormInfo(formData) {
        this.props.requestLoginSubmit(formData);
    }

    render() {
        return (
            <React.Fragment>
                <div id="container">
                    <Row
                        type="flex"
                        justify="space-around"
                        align="middle"
                        className={'height-100'}>
                            <Col
                                type="flex"
                                justify="space-around"
                                align="middle"
                                xs={24}
                                sm={24}
                                md={12}
                                lg={12}>
                                    <Card 
                                    title={ <img alt="logo" src={ logo } style={{ maxHeight: '50px' }} /> } 
                                    style={{ backgroundColor: '#fff', border: 0 }}
                                    headStyle={{ backgroundColor: '#fff' }}
                                    bodyStyle={{ backgroundColor: '#fff' }}
                                    className={'rm-card'}>
                                        <LoginForm handleFormSubmit={ this.handleSubmitFormInfo }/>
                                    </Card>
                                </Col>
                        </Row>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    const requestLoginSubmit = formData => {
        dispatch(loginSubmit(formData));
    };

    const loginSuccess = token => {
        dispatch(loginSubmitSuccess(token));
    };

    return {
        requestLoginSubmit,
        loginSuccess
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);