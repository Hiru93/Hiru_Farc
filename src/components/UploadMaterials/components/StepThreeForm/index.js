import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Row, Col, Card, Icon, List, Spin, Alert } from 'antd';

//Style

//Actions
import { activeStep } from '../../actions/activeStep';
import { submitForm } from '../../actions/submitForm';

//Components

//Misc imports


class StepThreeForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeStep = this.handleChangeStep.bind(this);
    }

    handleChangeStep(selected) {
        if(selected === 2) {
            const formData = {
                title: this.props.title,
                description: this.props.description,
                pdf: this.props.pdf,
                img: this.props.img,
                selectedProfession: this.props.selectedProfession,
                selectedCat: this.props.selectedCat
            };
            this.props.confirmUpload(formData, this.props.token);
        } else {
            this.props.changeStep(selected);
        }
    }

    render() {
        const { pdf, imageUrl, selectedProfession, selectedCat, title, description, catAndFigures, isItLoading } = this.props;
        const figureName = selectedProfession.map(el => catAndFigures.find(element => element.value === el).label);
        const catName = selectedProfession && selectedProfession.length ? catAndFigures.filter(function(element) {
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
        }).find(element => element.value === selectedCat).label : '';
        const data = [{
            title: 'Titolo',
            body: <span>{ title }</span>,
            value: title
        },{
            title: 'Descrizione',
            body: <span>{ description }</span>,
            value: description
        },{
            title: 'Figura professionale',
            body: selectedProfession.length > 1 ? 
                <div>{ figureName.map((item, index) => <p key={ index }>{ item }</p>) }</div> : 
                <span>{ selectedProfession.length ? figureName[0] : 'Campo obbligatorio' }</span>,
            value: selectedProfession
        },{
            title: 'Categoria riservata',
            body: <span>{ catName }</span>,
            value: selectedCat
        },{
            title: 'File',
            body: <span>{ pdf ? pdf.name : '' }</span>,
            value: pdf
        }];

        return (
            <Row
                type="flex"
                justify="center"
                align="top"
                gutter={ 20 }>
                <Col
                    span={ 6 }
                    align="left">
                    { !isItLoading ? <Card
                        headStyle={{ height: '5vh', overflow: 'hidden' }}
                        cover={
                            <img
                                alt="pdf cover"
                                src={ imageUrl } />
                        }
                        actions={[
                            <div onClick={ () => this.handleChangeStep(0) }><Icon type="file-add" /><span> Torna a Step 1</span></div>,
                            <div onClick={ () => this.handleChangeStep(1) }><Icon type="info-circle" /><span> Torna a Step 2</span></div>,
                            <div onClick={ () => this.handleChangeStep(2) }><Icon type="check-circle" /><span> Conferma</span></div>
                        ]}>
                        <List itemLayout="horizontal" dataSource={ data } renderItem={ item => (
                            <List.Item>
                                <List.Item.Meta 
                                    title={ item.title } 
                                    description={ !item.value ? 'Campo obbligatorio' : item.body }>
                                    </List.Item.Meta>
                            </List.Item>
                        )}>
                        </List>
                    </Card> : 
                    <Spin tip="Loading..." className="rm-loader-management">
                        <Alert 
                            message=""
                            description="" 
                            type="info"
                            className="rm-message-info"
                        />
                    </Spin> }
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        pdf: state.uploadMaterials.pdf,
        img: state.uploadMaterials.img,
        imageUrl: state.uploadMaterials.imageUrl,
        selectedProfession: state.uploadMaterials.selectedProfession,
        catAndFigures: state.uploadMaterials.catAndFigures,
        selectedCat: state.uploadMaterials.selectedCat,
        title: state.uploadMaterials.title,
        description: state.uploadMaterials.description,
        isItLoading: state.uploadMaterials.isItLoading,
        token: state.auth.token
    }
};

const mapDispatchToProps = dispatch => {
    const changeStep = step => {
        dispatch(activeStep(step));
    };

    const confirmUpload = (formData, token) => {
        dispatch(submitForm(formData, token));
    };

    return {
        changeStep,
        confirmUpload
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepThreeForm);