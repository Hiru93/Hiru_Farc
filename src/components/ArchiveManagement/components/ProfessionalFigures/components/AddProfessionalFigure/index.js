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


class AddProfessionalFigureForm extends React.Component {
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
        const { categoryList } = this.props;

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
                        <Form.Item label="Nome figura professionale">
                            { getFieldDecorator('figureName', {
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
                            { getFieldDecorator('figureDescription')(
                                <Input type="text" />
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={ 8 }
                        align='left'>
                        <Form.Item label="Categorie associate">
                            { getFieldDecorator('figureCategories')(
                                <Select
                                    mode="multiple">
                                    { categoryList.map(category => {
                                        return (
                                            <Select.Option key={ category.value } value={ category.value }>
                                                { category.label }
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
                                figureName: this.props.figureName,
                                figureDescription: this.props.figureDescription,
                                figureCategories: this.props.figureCategories
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
        figureName: state.addProfessionalFiguresForm.figureName,
        figureDescription: state.addProfessionalFiguresForm.figureDescription,
        figureCategories: state.addProfessionalFiguresForm.figureCategories
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

const ProfessionalFigureForm = Form.create({
    name: 'add-professional-figure-form',
    mapPropsToFields(props) {
        return {
            figureName: Form.createFormField({
                ...props.figureName,
                value: props.figureName
            }),
            figureDescription: Form.createFormField({
                ...props.figureDescription,
                value: props.figureDescription
            }),
            figureCategories: Form.createFormField({
                ...props.figureCategories,
                value: props.figureCategories
            })
        }
    },
    onValuesChange(props, values) {
        const value = values[Object.keys(values)[0]] === undefined ? '' : values[Object.keys(values)[0]];
        const key = Object.keys(values)[0];
        props.updateField(key, value);
    }
})(AddProfessionalFigureForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfessionalFigureForm);