import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { 
    Col, 
    Row, 
    Tag, 
    Spin, 
    Alert,
    Button
} from 'antd';

//Style

//Actions
import { professionalFigures } from './actions/professionalFigures';
import { currentData } from './actions/currentData';
import { formState } from './actions/formState';
import { openFormEdit } from './actions/openFormEdit';

//Components
import CustomTable from '../../../../utils/CustomTable/index';
import AddCategoryForm from './components/AddCategoryForm/index';
import EditRowForm from './components/EditRowForm/index';

//Misc import

class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.openForm = this.openForm.bind(this);
        this.handleFormState = this.handleFormState.bind(this);
    }

    componentDidMount() {
        const { token } = this.props;

        this.props.getProfessionalFigures(token);
        this.props.getCurrentData(token);
    }

    openForm(targetedRow) {
        this.props.openEditForm(targetedRow);
    }

    handleFormState(formState) {
        this.props.changeFormState(formState);
    }

    render() {
        const {
            isLoading,
            categoriesList,
            currentFormState,
            professionalFiguresList,
            selectedRow
        } = this.props;

        const columns = [{
            title: 'Nome categoria',
            width: 200,
            dataIndex: 'name',
            searchable: true,
            onCell: record => {
                return {
                    onClick: e => {
                        this.openForm(record);
                    }
                }
            }
        },{
            title: 'Descrizione',
            dataIndex: 'description',
            onCell: record => {
                return {
                    onClick: e => {
                        this.openForm(record);
                    }
                }
            }
        },{
            title: 'Figure associate',
            width: 200,
            dataIndex: 'relatedFigures',
            onCell: record => {
                return {
                    onClick: e => {
                        this.openForm(record);
                    }
                }
            },
            render: (text, record, index) => {
                return (
                    <React.Fragment>
                        { record.professionalFigures.map((prof, index) => {
                            return (
                                <Tag key={ index } color={ '#6AA2B8' } style={{ marginBottom: '10px' }}>{ prof.name }</Tag>
                            );
                        }) }
                    </React.Fragment>
                );
            }
        }];

        return (
            <React.Fragment>
                <Row
                    type="flex"
                    justify="start"
                    align="top"
                    gutter={ 20 }>
                    <Col span={ 12 } style={{ paddingLeft: '0px', marginTop: '15px' }}>
                        { isLoading ? 
                            <Spin tip="Loading..." className="rm-loader-management">
                                <Alert 
                                    message=""
                                    description="" 
                                    type="info"
                                    className="rm-message-info"
                                />
                            </Spin> :
                            <React.Fragment>
                                <CustomTable
                                    columns={ columns }
                                    data={ categoriesList } />                            
                                <Row
                                    type="flex"
                                    justify="start"
                                    align="middle"
                                    gutter={ 20 }
                                    style={{ marginLeft: '0px' }}>
                                    <Button style={{ marginTop: '20px', marginBottom: '20px' }} type="primary" onClick={ () => {
                                        this.handleFormState(!currentFormState);
                                    } }>
                                        <span>Aggiungi nuova categoria</span>
                                    </Button>
                                </Row>
                            </React.Fragment>
                        }
                    </Col>
                    { selectedRow ?
                        <Col span={ 12 }>
                            <EditRowForm figureList={ professionalFiguresList } />
                        </Col>
                    : null }
                </Row>
                { currentFormState ?
                    <Row
                        type="flex"
                        justify="start"
                        align="middle"
                        gutter={ 20 }>
                        <AddCategoryForm figureList={ professionalFiguresList } />
                    </Row> :
                    null }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        professionalFiguresList: state.categoriesArchiveManagement.professionalFiguresList,
        categoriesList: state.categoriesArchiveManagement.categoriesList,
        isLoading: state.categoriesArchiveManagement.isLoading,
        currentFormState: state.categoriesArchiveManagement.formState,
        selectedRow: state.categoriesArchiveManagement.selectedRow
    };
};

const mapDispatchToProps = dispatch => {
    const getProfessionalFigures = token => {
        dispatch(professionalFigures(token));
    };

    const getCurrentData = token => {
        dispatch(currentData(token));
    };

    const changeFormState = newFormState => {
        dispatch(formState(newFormState));
    };

    const openEditForm = target => {
        dispatch(openFormEdit(target));
    };

    return {
        getProfessionalFigures,
        getCurrentData,
        changeFormState,
        openEditForm
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);