import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Form, Input, Col, Row } from 'antd';

//Icons

//Style

//Actions
import { updateFormField } from './actions/updateFormValue';

//Components

//Misc imports

class ModalRowUpdateForm extends React.Component {
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form id='login-form'>
                <Row
                    type="flex"
                    justify="space-around"
                    align="middle">
                    <Col
                        span={10}
                        justify="space-around"
                        align="middle">
                        <Form.Item label="Categoria">
                            { getFieldDecorator('name', {
                                rules: [{ required: true, message: 'Il campo Categoria è obbligatorio' }],
                            })(<Input />)
                            }
                        </Form.Item>
                    </Col>
                    <Col
                        span={10}
                        justify="space-around"
                        align="middle">
                        <Form.Item label="Bibliografia">
                            { getFieldDecorator('bibliography')(
                                <Input />)
                            }
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    type="flex"
                    justify="space-around"
                    align="middle">
                    <Col
                        span={24}
                        justify="space-around"
                        align="middle">
                        <Form.Item label="Info">
                            { getFieldDecorator('info')(
                                <Input.TextArea rows={ 6 } autoSize={{ minRows: 6, maxRows: 6 }} />)
                            }
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        );       
    }
}

const FormRowUpdate = connect(state => {
    return {
        name: state.categoriesManage.selectedRow.name,
        bibliography: state.categoriesManage.selectedRow.bibliography,
        info: state.categoriesManage.selectedRow.info
    }
})(Form.create({
    name: 'category-row-form-update',
    mapPropsToFields(props) {
        return {
            name: Form.createFormField({
                ...props.name,
                value: props.name
            }),
            bibliography: Form.createFormField({
                ...props.bibliography,
                value: props.bibliography
            }),
            info: Form.createFormField({
                ...props.info,
                value: props.info
            })
        };
    },
    onValuesChange(props, values) {
        props.dispatch(updateFormField(Object.keys(values)[0], values[Object.keys(values)[0]]));
    }
})(ModalRowUpdateForm));

export default FormRowUpdate;