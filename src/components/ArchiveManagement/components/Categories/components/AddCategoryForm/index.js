import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { 
    Input, 
    Button, 
    Form, 
    Row, 
    Col,
    Select
} from 'antd';

//Icons

//Style

//Actions
import { updateFormField } from './actions/updateFormField';
import { formState } from '../../actions/formState';
import { submitForm } from './actions/submitForm';

//Components

//Misc imports


class AddCategoryForm extends React.Component {
    constructor(props) {
        super(props);

        this.hideForm = this.hideForm.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    hideForm() {
        this.props.handleFormState(false);
    }

    handleFormSubmit(formData, token) {
        this.props.formSubmit(formData, token);
        this.props.handleFormState(false);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { figureList } = this.props;

        return (
            <Form style={{ width: '100%' }} className="rm-form-spacing">
                <Row
                    type='flex'
                    justify='start'
                    align='middle'
                    gutter={ 20 }
                    span={ 24 }>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Form.Item label="Nome categoria">
                            { getFieldDecorator('catName', {
                                rules: [{ required: true, message: 'Il campo è obbligatorio' }]
                            })(
                                <Input type="text" />
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={ 12 }
                        align='left'>
                        <Form.Item label="Descrizione">
                            { getFieldDecorator('catDescription')(
                                <Input type="text" />
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={ 8 }
                        align='left'>
                        <Form.Item label="Figure professionali associate">
                            { getFieldDecorator('catFigures')(
                                <Select
                                    mode="multiple">
                                    { figureList.map(figure => {
                                        return (
                                            <Select.Option key={ figure.value } value={ figure.value }>
                                                { figure.label }
                                            </Select.Option>
                                        );
                                    }) }
                                </Select>
                            ) }
                        </Form.Item>
                    </Col>
                </Row>
                <Row
                    type='flex'
                    justify='start'
                    align='middle'
                    gutter={ 20 }
                    span={ 24 }>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Button type="primary" onClick={ () => {
                            const parsedFormData = {
                                categoryName: this.props.catName,
                                categoryDescription: this.props.catDescription,
                                catFigures: this.props.catFigures
                            };


                            return this.handleFormSubmit(parsedFormData, this.props.token);
                        } }>
                            <span>Conferma</span>
                        </Button>
                    </Col>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Button type="danger" onClick={ () => {
                            this.hideForm();
                        } }>
                            <span>Annulla</span>
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        catName: state.addCategoryForm.catName,
        catDescription: state.addCategoryForm.catDescription,
        catFigures: state.addCategoryForm.catFigures
    }
}

const mapDispatchToProps = dispatch => {
    const updateField = (key, value) => {
        dispatch(updateFormField(key, value));
    };

    const handleFormState = newState => {
        dispatch(formState(newState));
    };

    const formSubmit = (formData, token) => {
        dispatch(submitForm(formData, token));
    };

    return {
        updateField,
        handleFormState,
        formSubmit
    };
};

const CategoryForm = Form.create({
    name: 'add-category-form',
    mapPropsToFields(props) {
        return {
            catName: Form.createFormField({
                ...props.catName,
                value: props.catName
            }),
            catDescription: Form.createFormField({
                ...props.catDescription,
                value: props.catDescription
            }),
            catFigures: Form.createFormField({
                ...props.catFigures,
                value: props.catFigures
            })
        }
    },
    onValuesChange(props, values) {
        const value = values[Object.keys(values)[0]] === undefined ? '' : values[Object.keys(values)[0]];
        const key = Object.keys(values)[0];
        props.updateField(key, value);
    }
})(AddCategoryForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryForm);