import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Row, Col, Collapse, Modal, Spin, Alert } from 'antd';
import { toast } from 'react-toastify';

//Style

//Actions
import { submitForm } from './actions/submitForm';
import { cancelForm } from './actions/cancelForm';

//Components
import InciForm from './components/InciForm/index';
import InciTable from './components/InciTable/index';
import FormRowUpdate from './components/InciModalForm';

//Misc imports

class Inci extends React.Component {
    constructor(props) {
        super(props);

        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
        this.handleUpdateCancel = this.handleUpdateCancel.bind(this);
    }

    handleUpdateSubmit(formData) {
        const { token } = this.props;
        if(!formData.name) {
            toast.error("Il campo Inci è obbligatorio");
        }
        if(!formData.category) {
            toast.error("Il campo Categoria è obbligatorio");
        } else {
            this.props.updateCancel();
            this.props.updateSubmit(formData, token);
        }
    }

    handleUpdateCancel() {
        this.props.updateCancel();
    }

    render() {
        const { 
            inci, 
            categoryList, 
            isModalOpen, 
            selectedRow,
            isFetching,
            formFields,
            formData } = this.props;
        return (
            <React.Fragment>
                { selectedRow ? 
                    <Modal
                        title={ selectedRow.name }
                        visible={ isModalOpen }
                        style={{ minWidth: '520px' }}
                        width= '50vw'
                        onOk={ () => {
                                formFields.bibliography = 
                                    formFields.bibliography === null || formFields.bibliography === undefined ?
                                    formData.bibliography :
                                    formFields.bibliography;
                                formFields.commonDenomination = 
                                    formFields.commonDenomination === null || formFields.commonDenomination === undefined ?
                                    formData.commonDenomination :
                                    formFields.commonDenomination;
                                formFields.info =
                                    formFields.info === null || formFields.info === undefined ?
                                    formData.info :
                                    formFields.info;
                                formFields.name =
                                    formFields.name === null || formFields.name === undefined ?
                                    formData.name :
                                    formFields.name;
                                formFields.category = formFields.category === null || formFields.category === undefined ? 
                                    categoryList.find(x => x.label === formData.category).value : 
                                    formFields.category;
                                formFields.sensitizing = (formFields.sensitizing === null || formFields.sensitizing === undefined) && (formData.sensitizing !== null || formData.sensitizing !== undefined) ?
                                    formData.sensitizing :
                                    formFields.sensitizing;
                                formFields.sensitizing = formFields.sensitizing === null || formFields.sensitizing === undefined ? '' : formFields.sensitizing;
                                this.handleUpdateSubmit({
                                    bibliography: formFields.bibliography === null || formFields.bibliography === undefined ? '' : formFields.bibliography,
                                    category: formFields.category ? formFields.category : formData.category,
                                    commonDenomination: formFields.commonDenomination === null || formFields.commonDenomination === undefined ? '' : formFields.commonDenomination,
                                    fc: formFields.fc === null || formFields.fc === undefined ? formData.fc : formFields.fc,
                                    id: formData.id,
                                    info: formFields.info === null || formFields.info === undefined ? '' : formFields.info,
                                    key: formData.key,
                                    name: formFields.name === null || formFields.name === undefined ? '' : formFields.name,
                                    otherDiscussions: formFields.otherDiscussions === null || formFields.otherDiscussions === undefined ? '' : formFields.otherDiscussions,
                                    sensitizing: formFields.sensitizing === null || formFields.sensitizing === undefined ? formData.sensitizing : formFields.sensitizing
                                });
                            } }
                        onCancel={ this.handleUpdateCancel }>
                            <FormRowUpdate />
                    </Modal> :
                    null }
                { isFetching === true ? 
                    <Spin tip="Loading..." className="rm-loader-management">
                        <Alert 
                            message=""
                            description="" 
                            type="info"
                            className="rm-message-info"
                        />
                    </Spin> :
                    <React.Fragment>
                        <Row
                            type="flex"
                            justify="start"
                            align="middle"
                            gutter={ 20 }>
                            <Col span={ 24 } style={{ marginBottom: '16px' }}>
                                <Collapse accordion>
                                    <Collapse.Panel header="Nuovo inci" key="0">
                                        <InciForm categories={ categoryList } />
                                    </Collapse.Panel>
                                </Collapse>
                            </Col>
                        </Row>
                        <Row
                            type="flex"
                            justify="start"
                            align="middle"
                            gutter={ 20 }>
                            <Col span={ 24 }>
                                <InciTable data={ inci } />
                            </Col>
                        </Row> 
                    </React.Fragment> 
                }
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        isModalOpen: state.incisManage.isModalOpen,
        selectedRow: state.incisManage.selectedRow,
        token: state.auth.token,
        formData: state.incisManage.selectedRow,
        formFields: { 
            category: state.inciFormUpdate.category,
            name: state.inciFormUpdate.name,
            commonDenomination: state.inciFormUpdate.commonDenomination,
            fc: state.inciFormUpdate.fc,
            sensitizing: state.inciFormUpdate.sensitizing,
            otherDiscussions: state.inciFormUpdate.otherDiscussions,
            info: state.inciFormUpdate.info,
            bibliography: state.inciFormUpdate.bibliography
         },
        isFetching: state.incisManage.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    const updateSubmit = (formData, token) => {
        dispatch(submitForm(formData, token));
    };

    const updateCancel = () => {
        dispatch(cancelForm());
    };

    return {
        updateSubmit,
        updateCancel
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Inci);