import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Row, Col, Upload, message, Button, Icon, Alert } from 'antd';

//Style

//Actions

//Components

//Misc import

class DataImportExportForm extends React.Component {

    render() {
        const { services, token } = this.props;
        return (            
            <Row
                type="flex"
                justify="start"
                align="top"
                gutter={ 20 }>
                <Col span={ 11 }>
                    <Row
                        type="flex"
                        justify="start"
                        align="top"
                        gutter={ 20 }>    
                        <Col span={ 24 }>
                            <h1 style={{ marginBottom: '1em' }}>Upload nuova versione del database</h1>
                            <Upload
                                name={'excel'}
                                action={ services + '/category/import/?dropDb=true' }
                                beforeUpload={file => {
                                    if(file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                                        return true;
                                    } else {
                                        message.error(`I file ammessi devono essere di tipo excel con estensione .xls`);
                                        return false;
                                    }
                                }}
                                onChange={(info) => {
                                    if(info.file.status === 'error') {
                                        message.error(`L'upload del file ${ info.file.name } è fallito`)
                                    }
                                    if (info.file.status === 'done') {
                                        message.success(`L'upload del file ${ info.file.name } è andato a buon fine`);
                                    }
                                }}
                                headers={{
                                    'Authorization': 'Bearer ' + token
                                }} >
                                <Button>
                                    <Icon type="upload" /> Click to upload
                                </Button>
                            </Upload>
                        </Col>
                    </Row>
                    <Row
                        type="flex"
                        justify="start"
                        align="top"
                        gutter={ 20 }>
                        <Alert 
                            message="Attenzione"
                            description="
                                L'operazione di upload è un operazione irreversibile e comporta la sostituzione completa del database correntemente in essere.
                                Una volta data conferma, pertanto, non sarà più possibile ripristinare alcuna vecchia versione dei dati sovrascritti.
                                
                                Va quindi prestata massima attenzione durante la fase di upload dei file excel.
                            " 
                            type="info"
                            className="rm-message-warning"
                        />                            
                    </Row>
                </Col>
                <Col span={ 11 }>
                    <Row
                        type="flex"
                        justify="start"
                        align="top"
                        gutter={ 20 }>    
                        <Col span={ 24 }>
                            <h1 style={{ marginBottom: '1em' }}>Download della versione corrente del database</h1>
                            <Button onClick={ e => {
                                    window.open(services + '/category/export.xls?token=' + token, "_blank");
                                } } >
                                <Icon type="download" /> Click to download
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    };
}

const mapStateToProps = state => {
    return {
        services: state.apiUrl.services,
        token: state.auth.token
    }
};

export default connect(
    mapStateToProps
)(DataImportExportForm);