import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Input, Button, Form, Row, Col } from 'antd';

//Icons

//Style

//Actions
import { updateFormField } from './actions/updateFormField';
import { formSubmit } from './actions/formSubmit';

//Components

//Misc imports

class CategoriesInsertForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(formData, token) {
        this.props.form.validateFields((err, values) => {
            if(!err) {
                this.props.submitData(formData, token);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form className="rm-form-spacing">
                <Row
                    type='flex'
                    justify='start'
                    align='middle'
                    gutter={ 20 }>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Form.Item label='Nome categoria'>
                            { getFieldDecorator('categoryName', {
                                rules: [{ required: true, message: 'Il nome categoria è obbligatoria' }]
                            })(
                                <Input type="text" />
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Form.Item label='Bibliografia'>
                            { getFieldDecorator('bibliography')(
                                <Input type="text" />
                            ) }
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    type='flex'
                    justify='start'
                    align='middle'
                    gutter={ 20 }>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Form.Item label='Info'>
                            { getFieldDecorator('info')(
                                <Input.TextArea rows={ 4 } autoSize={{ minRows: 4, maxRows: 4 }} />
                            ) }
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    type='flex'
                    justify='start'
                    align='middle'
                    gutter={ 20 }>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Button type="primary" htmlType="submit" onClick={ () => {
                            const formData = {
                                name: this.props.categoryName,
                                bibliography: this.props.bibliography,
                                info: this.props.info,
                                id: this.props.categoryName ? this.props.categoryName.replace(/ /g,"-").toLowerCase() : null
                            };

                            this.handleFormSubmit(formData, this.props.token);
                        } }>
                            <span>Aggiungi categoria</span>
                        </Button>
                    </Col>
                </Row>
            </Form>
        )
    }
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        categoryName: state.dataManageCategoryForm.categoryName,
        bibliography: state.dataManageCategoryForm.bibliography,
        info: state.dataManageCategoryForm.info
    };
};

const mapDispatchToProps = dispatch => {
    const updateField = (key, value) => {
        dispatch(updateFormField(key, value));
    };

    const submitData = (formData, token) => {
        dispatch(formSubmit(formData, token));
    };

    return {
        updateField,
        submitData
    };
};

const CategoriesForm = Form.create({
    name: 'categories-insert-form',
    mapPropsToFields(props) {
        return {
            categoryName: Form.createFormField({
                ...props.categoryName,
                value: props.categoryName
            }),
            bibliography: Form.createFormField({
                ...props.bibliography,
                value: props.bibliography
            }),
            info: Form.createFormField({
                ...props.info,
                value: props.info
            })
        }
    },
    onValuesChange(props, values) {
        const value = values[Object.keys(values)[0]] === undefined ? '' : values[Object.keys(values)[0]];
        const key = Object.keys(values)[0];
        props.updateField(key, value);
    }
})(CategoriesInsertForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesForm);