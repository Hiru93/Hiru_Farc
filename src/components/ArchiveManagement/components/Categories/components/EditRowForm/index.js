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
import { catDelete } from './actions/catDelete';

//Components

//Misc imports


class EditCategoryForm extends React.Component {
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

    handleDeleteRequest(catId) {
        this.props.handleCatDelete(catId, this.props.token);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { figureList, categoryId, catFigures } = this.props;

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
                        <Form.Item label="Nome categoria">
                            { getFieldDecorator('catName', {
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
                            <Form.Item label="Figure professionali associate">
                                { getFieldDecorator('catFigures')(
                                        <Select
                                            mode="multiple">
                                            { figureList.map(figure => {
                                                return (
                                                    <Select.Option key={ figure.key } value={ figure.value }>
                                                        { figure.label }
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
                            { getFieldDecorator('catDescription')(
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
                            this.handleDeleteRequest(categoryId);
                        } }>
                            <span>Elimina</span>
                        </Button>
                    </Col>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Button type="primary" onClick={ () => {
                            const parsedFormData = {
                                categoryName: this.props.catName,
                                categoryDescription: this.props.catDescription,
                                catFigures: this.props.catFigures
                            };


                            return this.handleFormSubmit(parsedFormData, this.props.token, categoryId);
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
        catName: state.editCategoryForm.catName,
        catDescription: state.editCategoryForm.catDescription,
        catFigures: state.editCategoryForm.catFigures,
        categoryId: state.categoriesArchiveManagement.selectedRow.id
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

    const handleCatDelete = (id, token) => {
        dispatch(catDelete(id, token));
    };

    return {
        updateField,
        handleFormState,
        formSubmit,
        handleCatDelete
    };
};

const CategoryForm = Form.create({
    name: 'edit-category-form',
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
})(EditCategoryForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryForm);