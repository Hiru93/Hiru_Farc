import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { 
    Input, 
    Button, 
    Form, 
    Row, 
    Col,
    Select,
    Popover
} from 'antd';

//Icons

//Style

//Actions
import { updateFormField } from './actions/updateFormField';
import { formState } from './actions/formState';
import { submitForm } from './actions/submitForm';
import { figureDelete } from './actions/figureDelete';

//Components

//Misc imports


class EditFigureForm extends React.Component {
    constructor(props) {
        super(props);

        this.hideForm = this.hideForm.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleDeleteRequest = this.handleDeleteRequest.bind(this);
    }

    hideForm() {
        this.props.handleFormState(false);
    }

    handleFormSubmit(formData, token, id) {
        this.props.formSubmit(formData, token, id);
        this.props.handleFormState(false);
    }

    handleDeleteRequest(figureId) {
        this.props.handleFigureDelete(figureId, this.props.token);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { categoryList, figureId, figureCategories } = this.props;

        return (
            <Form style={{ width: '100%' }} className="rm-form-spacing">
                <Row
                    type='flex'
                    justify='start'
                    align='middle'
                    gutter={ 20 }
                    span={ 24 }>
                    <Col
                        span={ 24 }
                        align='left'>
                        <Form.Item label="Nome figura">
                            { getFieldDecorator('figureName', {
                                rules: [{ required: true, message: 'Il campo è obbligatorio' }]
                            })(
                                <Input type="text" />
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
                        span={ 24 }
                        align='left'>
                        <Popover
                            content={ 'La modifica di relazioni tra categorie e figure professionali non avrà effetto sui documenti già caricati.' }>
                            <Form.Item label="Categorie associate">
                                { getFieldDecorator('figureCategories')(
                                        <Select
                                            mode="multiple">
                                            { categoryList.map(cat => {
                                                return (
                                                    <Select.Option key={ cat.key } value={ cat.value }>
                                                        { cat.label }
                                                    </Select.Option>
                                                );
                                            }) }
                                        </Select>
                                ) }
                            </Form.Item>
                        </Popover>
                    </Col>
                </Row>
                <Row
                    type='flex'
                    justify='start'
                    align='middle'
                    gutter={ 20 }
                    span={ 24 }>
                    <Col
                        span={ 24 }
                        align='left'>
                        <Form.Item label="Descrizione">
                            { getFieldDecorator('figureDescription')(
                                <Input type="text" />
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
                        <Button type="danger" onClick={ () => {
                            this.handleDeleteRequest(figureId);
                        } }>
                            <span>Elimina</span>
                        </Button>
                    </Col>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Button type="primary" onClick={ () => {
                            const parsedFormData = {
                                figureName: this.props.figureName,
                                figureDescription: 
                                    this.props.figureDescription === null || 
                                    this.props.figureDescription === undefined ? '' : 
                                    this.props.figureDescription,
                                figureCategories: this.props.figureCategories
                            };


                            return this.handleFormSubmit(parsedFormData, this.props.token, figureId);
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
        figureName: state.editfigureForm.figureName,
        figureDescription: state.editfigureForm.figureDescription,
        figureCategories: state.editfigureForm.figureCategories,
        figureId: state.professionalFigureArchiveManagement.selectedRow.id
    }
}

const mapDispatchToProps = dispatch => {
    const updateField = (key, value) => {
        dispatch(updateFormField(key, value));
    };

    const handleFormState = newState => {
        dispatch(formState(newState));
    };

    const formSubmit = (formData, token, id) => {
        dispatch(submitForm(formData, token, id));
    };

    const handleFigureDelete = (id, token) => {
        dispatch(figureDelete(id, token));
    };

    return {
        updateField,
        handleFormState,
        formSubmit,
        handleFigureDelete
    };
};

const FigureForm = Form.create({
    name: 'edit-category-form',
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
})(EditFigureForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FigureForm);