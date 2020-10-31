import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Form, Input, Col, Row, Button } from 'antd';

//Icons

//Style

//Actions
import { updateFormField } from './actions/updateFormValue';

//Components

//Misc imports

class LoginForm extends React.Component {
    render() {
        const { getFieldDecorator, validateFields } = this.props.form;
        const { handleFormSubmit } = this.props;

        return (
            <Form id='login-form'>
                <Row
                    type="flex"
                    justify="space-around"
                    align="middle">
                    <Col
                        span={12}
                        justify="space-around"
                        align="middle">
                        <Form.Item label="Nome utente">
                            { getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Username is required!' }],
                            })(<Input />)
                            }
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    type="flex"
                    justify="space-around"
                    align="middle">
                    <Col
                        span={12}
                        justify="space-around"
                        align="middle">
                        <Form.Item label="Password">
                            { getFieldDecorator('password', {
                                rules: [{ required: true, message: 'è necessario inserire una password valida' }],
                                })(<Input.Password />) }
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    type="flex" 
                    justify="space-around" 
                    align="middle">
                    <Col 
                        span={ 12 }  
                        type="flex" 
                        justify="space-around" 
                        align="middle">
                        <Button type="primary" htmlType="submit" onClick={ () => { 
                            validateFields()
                            if(this.props.username.length && this.props.password) {
                                handleFormSubmit({
                                    username: this.props.username,
                                    password: this.props.password
                                });
                            }
                            } }>
                            <span>Login</span>
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const CustomLoginForm = connect(state => {
    return {
        username: state.loginForm.username,
        password: state.loginForm.password
    };
})(Form.create({
    name: 'login-form',
    mapPropsToFields(props) {
        return {
            username: Form.createFormField({
                ...props.username,
                value: props.username
            }),
            password: Form.createFormField({
                ...props.password,
                value: props.password
            })
        };
    },
    onValuesChange(props, values) {
        props.dispatch(updateFormField(Object.keys(values)[0], values[Object.keys(values)[0]]));
    }
})(LoginForm));

export default CustomLoginForm;