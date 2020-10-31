import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { 
    Row, 
    Col, 
    Form, 
    Checkbox, 
    Radio, 
    Input, 
    Card, 
    Icon, 
    Alert, 
    Spin, 
    Tooltip 
} from 'antd';

//Style

//Actions
import { updateFormField } from '../../actions/updateFormField';
import { initialData } from '../../actions/initialData';
import { activeStep } from '../../actions/activeStep';

//Components

//Misc imports

class StepTwoForm extends React.Component {
    constructor(props) {
        super(props);

        this.changeActive = this.changeActive.bind(this);
    }

    changeActive(nextSelected) {
        if(nextSelected === 0) {
            this.props.changingActive(nextSelected);
        }
        if(this.props.selectedProfession && 
            this.props.selectedCat && 
            this.props.title && 
            this.props.description &&
            this.props.description.length <= 250) {
            this.props.changingActive(nextSelected);
        }
    }

    componentDidMount() {
        this.props.getInitialData(this.props.token);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { 
            selectedProfession, 
            catAndFigures, 
            selectedCat, 
            title, 
            description, 
            isItLoading 
        } = this.props;

        return (
            <Row
                type="flex"
                justify="center"
                align="top"
                gutter={ 20 }>
                <Col
                    span={ 8 }
                    align="left">
                    <Card
                        headStyle={{ backgroundColor: '#D2E2E8', textAlign: 'center' }}
                        title='Definisci le info per il file'
                        actions={[
                            <div onClick={ () => this.changeActive(0) }><Icon type="file-add" /><span> Step 1</span></div>,
                            selectedProfession && selectedCat && title && description && description.length < 250 ? <div onClick={ () => this.changeActive(2) }><Icon type="check-circle" /><span> Step 3</span></div> :
                            <Tooltip 
                                title={ 
                                    description &&
                                    description.length > 250 ? "La descrizione è limitata a 250 caratteri" : "Tutti i campi sono obbligatori"}>
                                <div onClick={ () => this.changeActive(2) }><Icon type="check-circle" /><span> Step 3</span></div>
                            </Tooltip>,
                        ]}>
                        <Form className="rm-form-spacing">
                            <Row
                                type="flex"
                                justify="center"
                                align="middle"
                                gutter={ 20 }
                                span={ 16 }>
                                { isItLoading ? (
                                    <Spin tip="Loading..." className="">
                                    </Spin>
                                ) : (
                                    <Col
                                        span={ 24 }
                                        align="center">
                                        <Form.Item label="Seleziona almeno una figura professionale">
                                            { getFieldDecorator('selectedProfession')(
                                                <Checkbox.Group>
                                                    { catAndFigures.map((profession, index) => {
                                                        return (
                                                            <Checkbox value={ profession.value } key={ index }>
                                                                { profession.label }
                                                            </Checkbox>
                                                        )
                                                    }) }
                                                </Checkbox.Group>
                                            ) }
                                        </Form.Item>
                                    </Col>
                                ) }
                            </Row>
                            <Row
                                type="flex"
                                justify="center"
                                align="middle"
                                gutter={ 20 }
                                style={{ height: '30vh', overflowX: 'hidden', overflowY: selectedProfession && selectedProfession.length ? 'scroll' : 'display' }}>
                                { selectedProfession && selectedProfession.length ?
                                (
                                    <Col
                                        span={ 24 }
                                        align="center">
                                        <Form.Item label="Seleziona una sola categoria">
                                            { getFieldDecorator('selectedCat')(
                                                <Radio.Group name="selectedCat">
                                                    {
                                                        catAndFigures.filter(function(element) {
                                                            return this.indexOf(element.value) >= 0;
                                                        }, selectedProfession).map(category => {
                                                            return category.relatedCats.map(cat => { 
                                                                return {
                                                                    label: cat.label,
                                                                    value: cat.value,
                                                                    description: cat.description
                                                            }});
                                                        }).flat().filter(function(elem, index, self) {
                                                            return index === self.map(el => el.value).indexOf(elem.value, 0);
                                                        }).map((el, index) => {
                                                            return (
                                                                <Col span={ 11 } key={ index }>
                                                                    <Radio value={ el.value }>{ el.label }</Radio>
                                                                </Col>);
                                                        }) }
                                                </Radio.Group>
                                            ) }
                                        </Form.Item>
                                    </Col>
                                ) : (
                                    <Alert 
                                        message="Seleziona almeno una figura professionale"
                                        description="Per far comparire le categorie, è necessario selezionare almeno una figura professionale" 
                                        type="info"
                                        className="rm-message-info-upload"
                                    />
                                ) }
                            </Row>
                            <Row
                                type="flex"
                                justify="center"
                                align="bottom"
                                gutter={ 20 }
                                style={{ height: '10vh' }}>
                                <Col
                                    span={ 15 }
                                    align="center">
                                    <Form.Item label="Titolo documento">
                                        { getFieldDecorator('title')(<Input />) }
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row
                                type="flex"
                                justify="center"
                                align="bottom"
                                gutter={ 20 }
                                style={{ height: '15vh' }}>
                                <Col
                                    span={ 15 }
                                    align="center">
                                    <Form.Item label="Breve descrizione">
                                        { getFieldDecorator('description')(<Input.TextArea rows={ 4 } autoSize={{ minRows: 4, maxRows: 4 }} />) }
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedProfession: state.uploadMaterials.selectedProfession,
        selectedCat: state.uploadMaterials.selectedCat,
        title: state.uploadMaterials.title,
        description: state.uploadMaterials.description,
        catAndFigures: state.uploadMaterials.catAndFigures,
        isItLoading: state.uploadMaterials.isItLoading,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    const updateField = (key, value) => {
        dispatch(updateFormField(key, value));
    };

    const getInitialData = token => {
        dispatch(initialData(token));
    };

    const changingActive = selected => {
        dispatch(activeStep(selected));
    };

    return {
        updateField,
        getInitialData,
        changingActive
    };
}

const CategoryInfoForm = Form.create({
    name: 'categories-info-form',
    mapPropsToFields(props) {
        return {
            selectedProfession: Form.createFormField({
                ...props.selectedProfession,
                value: props.selectedProfession
            }),
            selectedCat: Form.createFormField({
                ...props.selectedCat,
                value: props.selectedCat
            }),
            title: Form.createFormField({
                ...props.title,
                value: props.title
            }),
            description: Form.createFormField({
                ...props.description,
                value: props.description
            })
        }
    },
    onValuesChange(props, values) {
        const value = values[Object.keys(values)[0]] === undefined ? '' : values[Object.keys(values)[0]];
        const key = Object.keys(values)[0];
        props.updateField(key, value);
    }
})(StepTwoForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryInfoForm);