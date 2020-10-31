import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Input, Button, Form, Row, Col, Radio, Select } from 'antd';

//Icons

//Style
import './style.scss';

//Actions
import { updateFormField } from './actions/updateFormField';
import { formSubmit } from './actions/formSubmit';

//Components

//Misc imports

class InciInsertForm extends React.Component {
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
        const { categories, currentCategories } = this.props;

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
                        <Form.Item label="Categoria">
                            { getFieldDecorator('category', {
                                rules: [{ required: true, message: 'La categoria è obbligatoria' }]
                            })(
                                <Select>
                                    { categories.map((x, index) => {
                                        return (
                                            <Select.Option value={ x.value } key={ x.key }>
                                                { x.label }
                                            </Select.Option> );
                                    }) }
                                </Select>
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Form.Item label="Nome INCI">
                            { getFieldDecorator('inciName', {
                                rules: [{ required: true, message: 'Il nome è obbligatorio' }]
                            })(
                                <Input type="text" />
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Form.Item label="Denominazione comune">
                            { getFieldDecorator('inciCommonName')(
                                <Input type="text" />
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={ 2 }
                        align='left'>
                        <Form.Item label="FC">
                            { getFieldDecorator('FCvalue')(
                                <Radio.Group>
                                    <Radio value={ false }>No</Radio>
                                    <Radio value={ true }>Si</Radio>
                                </Radio.Group>
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
                        <Form.Item label="Info">
                            { getFieldDecorator('info')(
                                <Input.TextArea rows={ 4 } autoSize={{ minRows: 4, maxRows: 4 }} />
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Form.Item label="Altre discussioni">
                            { getFieldDecorator('otherInfo')(
                                <Input.TextArea rows={ 4 } autoSize={{ minRows: 4, maxRows: 4 }} />
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Form.Item label="Bibliografia">
                            { getFieldDecorator('bibliography')(
                                <Input.TextArea rows={ 4 } autoSize={{ minRows: 4, maxRows: 4 }} type="text" />
                            ) }
                        </Form.Item>
                    </Col>
                    <Col
                        span={ 4 }
                        align='left'>
                        <Form.Item label="Sensibilizzante">
                            { getFieldDecorator('sentiser')(
                                <Input.TextArea rows={ 4 } autoSize={{ minRows: 4, maxRows: 4 }} type="text" />
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
                        <Form.Item>
                            <Button type="primary" onClick={ () => {
                                const selectedCategoryFromForm = this.props.category;
                                const selectedCat = categories.find(x => { return x.value === selectedCategoryFromForm }); //Trovo la categoria esatta dall'elenco
                                const catIndex = selectedCat && selectedCat.label ? currentCategories.findIndex(x => x.name === selectedCat.label) : null; //Ottengo l'indice della cateogria selezionata all'interno dell'array iniziale
                                if((catIndex !== undefined || catIndex !== null) && 
                                    currentCategories[catIndex] && 
                                    currentCategories[catIndex].inci && 
                                    currentCategories[catIndex].inci[currentCategories[catIndex].inci.length - 1]) {
                                    const currentLastId = currentCategories[catIndex].inci[currentCategories[catIndex].inci.length - 1].id; //Id dell'ultimo inci collegato alla categoria selezionata
                                    const parsedCurrentLastId = currentLastId.substring(currentLastId.lastIndexOf('-') + 1, currentLastId.length); //Isolo dall'id la cifra effettiva
                                    const newLastId = parseInt(parsedCurrentLastId, 10) + 1;
                                    const stringedId = currentLastId.substring(0, currentLastId.lastIndexOf('-') + 1).concat(("00000" + newLastId).slice(-5));
                                    const formData = {
                                        category: this.props.category,
                                        inciName: this.props.inciName,
                                        inciCommonName: this.props.inciCommonName,
                                        FCvalue: this.props.FCvalue,
                                        bibliography: this.props.bibliography,
                                        info: this.props.info,
                                        sentiser: this.props.sentiser,
                                        otherInfo: this.props.otherInfo,
                                        id: stringedId
                                    };
                                    this.handleFormSubmit(formData, this.props.token);
                                } else if(catIndex === undefined || catIndex === null || 
                                    !currentCategories[catIndex] || 
                                    !currentCategories[catIndex].inci) {
                                    const formData = {
                                        category: '',
                                        inciName: '',
                                        inciCommonName: '',
                                        FCvalue: '',
                                        bibliography: '',
                                        info: '',
                                        sentiser: '',
                                        otherInfo: '',
                                        id: ''
                                    };
                                    this.handleFormSubmit(formData, this.props.token);
                                } else {
                                    const newLastId = this.props.inciName ? this.props.inciName.replace(/ /g,"-").toLowerCase().concat("-00000") : '';
                                    const formData = {
                                        category: this.props.category,
                                        inciName: this.props.inciName,
                                        inciCommonName: this.props.inciCommonName,
                                        FCvalue: this.props.FCvalue,
                                        bibliography: this.props.bibliography,
                                        info: this.props.info,
                                        sentiser: this.props.sentiser,
                                        otherInfo: this.props.otherInfo,
                                        id: newLastId
                                    };
                                    this.handleFormSubmit(formData, this.props.token);
                                }
                            }}>Conferma</Button>
                        </Form.Item>
                    </Col>                    
                </Row>
            </Form>
        );
    }
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        category: state.dataManageInciForm.category,
        inciName: state.dataManageInciForm.inciName,
        inciCommonName: state.dataManageInciForm.inciCommonName,
        FCvalue: state.dataManageInciForm.FCvalue,
        bibliography: state.dataManageInciForm.bibliography,
        info: state.dataManageInciForm.info,
        sentiser: state.dataManageInciForm.sentiser,
        sentiserDesc: state.dataManageInciForm.sentiserDesc,
        otherInfo: state.dataManageInciForm.otherInfo,
        currentCategories: state.dataManage.categories
    }
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

const InciForm = Form.create({
    name: 'inci-insert-form',
    mapPropsToFields(props) {
        return {
            category: Form.createFormField({
                ...props.category,
                value: props.category
            }),
            inciName: Form.createFormField({
                ...props.inciName,
                value: props.inciName
            }),
            inciCommonName: Form.createFormField({
                ...props.inciCommonName,
                value: props.inciCommonName
            }),
            FCvalue: Form.createFormField({
                ...props.FCvalue,
                value: props.FCvalue
            }),
            bibliography: Form.createFormField({
                ...props.bibliography,
                value: props.bibliography
            }),
            info: Form.createFormField({
                ...props.info,
                value: props.info
            }),
            sentiser: Form.createFormField({
                ...props.sentiser,
                value: props.sentiser
            }),
            sentiserDesc: Form.createFormField({
                ...props.sentiserDesc,
                value: props.sentiserDesc
            }),
            otherInfo: Form.createFormField({
                ...props.otherInfo,
                value: props.otherInfo
            })
        }
    },
    onValuesChange(props, values) {
        const value = values[Object.keys(values)[0]] === undefined ? '' : values[Object.keys(values)[0]];
        const key = Object.keys(values)[0];
        props.updateField(key, value);
    }
})(InciInsertForm)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InciForm);