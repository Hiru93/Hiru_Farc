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
import { categories } from './actions/categories';
import { currentData } from './actions/currentData';
import { formState } from './actions/formState';
import { openFormEdit } from './actions/openFormEdit';

//Components
import CustomTable from '../../../../utils/CustomTable/index';
import AddProfessionalFigure from './components/AddProfessionalFigure/index';
import EditRowForm from './components/EditRowForm/index';

//Misc import

class ProfessionalFigures extends React.Component {
    constructor(props) {
        super(props);

        this.openForm = this.openForm.bind(this);
        this.handleFormState = this.handleFormState.bind(this);
    }

    componentDidMount() {
        const { token } = this.props;
        this.props.getCategories(token);
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
            professionalFiguresList,
            currentFormState,
            categoryList,
            selectedRow
        } = this.props;

        const columns = [{
            title: 'Nome figura',
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
            title: 'Categorie associate',
            width: 300,
            dataIndex: 'categories',
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
                        { record.categories !== null && record.categories !== undefined ? record.categories.map((cat, index) => {
                            return (
                                <Tag key={ index } color={ '#6AA2B8' } style={{ marginBottom: '10px' }}>{ cat.name }</Tag>
                            );
                        }) : null }
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
                                    data={ professionalFiguresList } />
                                <Row
                                    type="flex"
                                    justify="start"
                                    align="middle"
                                    gutter={ 20 }
                                    style={{ marginLeft: '0px' }}>
                                    <Button style={{ marginTop: '20px', marginBottom: '20px' }} type="primary" onClick={ () => {
                                        this.handleFormState(!currentFormState);
                                    } }>
                                        <span>Aggiungi nuova figura professionale</span>
                                    </Button>
                                </Row>
                            </React.Fragment>
                        }
                    </Col>
                    { selectedRow ?
                        <Col span={ 12 }>
                            <EditRowForm categoryList={ categoryList } />
                        </Col>
                    : null }
                </Row>
                { currentFormState ?
                    <Row
                        type="flex"
                        justify="start"
                        align="middle"
                        gutter={ 20 }>
                        <AddProfessionalFigure categoryList={ categoryList } />
                    </Row> :
                    null }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        categoryList: state.professionalFigureArchiveManagement.categoryList,
        professionalFiguresList: state.professionalFigureArchiveManagement.professionalFiguresList,
        isLoading: state.professionalFigureArchiveManagement.isLoading,
        currentFormState: state.professionalFigureArchiveManagement.formState,
        selectedRow: state.professionalFigureArchiveManagement.selectedRow        
    }
};

const mapDispatchToProps = dispatch => {
    const getCategories = token => {
        dispatch(categories(token));
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
        getCategories,
        getCurrentData,
        changeFormState,
        openEditForm
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfessionalFigures);