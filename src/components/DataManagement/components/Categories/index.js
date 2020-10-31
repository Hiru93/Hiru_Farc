import React from 'react';
import { connect } from 'react-redux'

//Libraries components
import { Row, Col, Collapse, Modal, Spin, Alert } from 'antd';
import { toast } from 'react-toastify';

//Style

//Actions
import { submitForm } from './actions/submitForm';
import { cancelForm } from './actions/cancelForm';

//Components
import CategoriesForm from './components/CategoriesForm/index';
import CategoriesTable from './components/CategoriesTable/index';
import FormRowUpdate from './components/CategoriesModalForm/index';

//Misc imports

class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
        this.handleUpdateCancel = this.handleUpdateCancel.bind(this);
    }

    handleUpdateSubmit(formData) {
        const { token } = this.props;
        if(!formData.name) {
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
            categories, 
            isModalOpen, 
            selectedRow, 
            formData, 
            formFields, 
            isFetching } = this.props;
        return(
            <React.Fragment>
                { selectedRow ? 
                    <Modal
                        title={ selectedRow.name }
                        visible={ isModalOpen }
                        style={{ minWidth: '520px' }}
                        width= '50vw'
                        onOk={ () => { 
                            formFields.bibliography = 
                                formFields.bibliography === null ? 
                                formData.bibliography : 
                                formFields.bibliography;
                            formFields.info =
                                formFields.info === null ?
                                formData.info :
                                formFields.info
                            this.handleUpdateSubmit({
                                name: formFields.name || formFields.name === '' ? formFields.name : formData.name,
                                bibliography: formFields.bibliography === null || formFields.bibliography === undefined ? '' : formFields.bibliography,
                                info: formFields.info === null || formFields.info === undefined ? '' : formFields.info,
                                categoryId: formData.id
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
                                    <Collapse.Panel header="Nuova categoria" key="0">
                                        <CategoriesForm />
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
                                <CategoriesTable data={ categories } />
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
        isModalOpen: state.categoriesManage.isModalOpen,
        selectedRow: state.categoriesManage.selectedRow,
        formData: state.categoriesManage.selectedRow,
        formFields: {
            name: state.categoryFormRowUpdate.name,
            bibliography: state.categoryFormRowUpdate.bibliography,
            info: state.categoryFormRowUpdate.info },
        token: state.auth.token,
        isFetching: state.categoriesManage.isFetching
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
)(Categories);