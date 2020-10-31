import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Row, Col, Upload, Button, Icon, message, Card, Tooltip } from 'antd';

//Style
import './styles.scss';

//Actions
import { pdfUpload } from '../../actions/pdfUpload';
import { imgUpload } from '../../actions/imgUpload';
import { activeStep } from '../../actions/activeStep';
import { imgUrl } from '../../actions/imgUrl';

//Components

//Misc imports
class StepOneForm extends React.Component {
    constructor(props) {
        super(props);

        this.setUploadedPdf = this.setUploadedPdf.bind(this);
        this.setUploadedThumbnail = this.setUploadedThumbnail.bind(this);
        this.changeActive = this.changeActive.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateThumbnail = this.updateThumbnail.bind(this);
    }

    changeActive(nextSelected) {
        if(this.props.pdf || this.props.img) {
            this.props.changingActive(nextSelected);
        }
    }

    setUploadedPdf(file) {
        this.props.uploadedPdf(file);
    }

    setUploadedThumbnail(file) {
        this.props.uploadedThumbnail(file);
    }

    /** Preview update */
    updateThumbnail(file, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result, file));
        reader.readAsDataURL(file);
    }

    handleChange(info) {
        this.updateThumbnail(info.file, (imageUrl, original) => {
            this.props.updateTumbPreview(imageUrl)
        }

        );
    }
    /** ====================== */

    render () {

        const { img, imageUrl, pdf } = this.props;

        const dummyRequest = ({ file, onSuccess }) => {
            setTimeout(() => {
              onSuccess("ok");
            }, 0);
          };

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
                        title='Seleziona e carica i file'
                        actions={[
                                img && pdf ? 
                                    <div onClick={ () => this.changeActive(1) }>
                                        <span><Icon type="info-circle" /> Step 2</span>
                                    </div> : 
                                    <Tooltip title="Devi scegliere almeno un pdf ed almeno un immagine di copertina">
                                        <div>
                                            <span><Icon type="info-circle" /> Step 2</span>
                                        </div>
                                    </Tooltip>,
                        ]}>
                        <Row
                            type="flex"
                            justify="center"
                            align="middle"
                            gutter={ 20 }
                            style={{ height: '30vh' }}>
                            <Col>
                                <Row
                                    type="flex"
                                    justify="center">
                                    <h1 style={{ marginBottom: '1em' }}>
                                        Seleziona un file .pdf
                                    </h1>
                                </Row>
                                <Row
                                    type="flex"
                                    justify="center"
                                    span={ 24 }
                                    className={ 'rm-uploader-sizer' }>
                                    <Upload
                                        style={{ width: "100%" }}
                                        customRequest={ dummyRequest }
                                        type="file"
                                        name='pdf-uploader'
                                        beforeUpload={ file => {
                                            /** Check 15mb */
                                            if (file.size > 15 * 1048576) {
                                                message.error(`Il pdf non può superare i 15Mb`);
                                            } else {
                                                this.setUploadedPdf(file);
                                            }
                                            return false;
                                        } }
                                        accept='.pdf'
                                        showUploadList={{ showPreviewIcon: false, showDownloadIcon: false, showRemoveIcon: true }}>
                                        <Button style={{ width: '100%' }}>
                                            <Icon type="upload" /> Seleziona un file
                                        </Button>
                                    </Upload>
                                </Row>
                            </Col>
                        </Row>
                        <Row
                            type="flex"
                            justify="center"
                            align="middle"
                            gutter={ 20 }
                            style={{ height: '30vh' }}>
                            <Col>
                                <Row
                                    type="flex"
                                    justify="center">
                                    <h1 style={{ marginBottom: '1em' }}>
                                        Seleziona un file per la copertina
                                    </h1>
                                </Row>
                                <Row
                                    type="flex"
                                    justify="center">
                                    <Col
                                        align="center"
                                        span={8}>
                                        <Upload
                                            customRequest={ dummyRequest }
                                            type="file"
                                            name='cover-uploader'
                                            listType='picture-card'
                                            showUploadList={ false }
                                            beforeUpload={ file => {
                                                /** Check 1mb */
                                                if (file.type !== 'image/jpeg' && 
                                                    file.type !== 'image/png') {
                                                    message.error('Sono accettati solo file jpeg o png');
                                                } else if (file.size > 1 * 1048576) {
                                                    message.error(`L'immagine non può superare 1Mb`);
                                                } else {
                                                    this.setUploadedThumbnail(file);
                                                }
                                                return false;
                                            } }
                                            accept='.png,.peg,.jpg'
                                            onChange={ this.handleChange } >
                                            { imageUrl ? 
                                                <img src={ imageUrl } alt="avatar" style={{ width: '100%' }} /> : 
                                                <div>
                                                    <Icon type={ 'plus'} />
                                                    <div>Carica</div>
                                                </div> }
                                        </Upload>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        pdf: state.uploadMaterials.pdf,
        img: state.uploadMaterials.img,
        imageUrl: state.uploadMaterials.imageUrl
    };
};

const mapDispatchToProps = dispatch => {
    const uploadedPdf = pdf => {
        dispatch(pdfUpload(pdf));
    };

    const uploadedThumbnail = thumbnail => {
        dispatch(imgUpload(thumbnail));
    };

    const changingActive = selected => {
        dispatch(activeStep(selected));
    };

    const updateTumbPreview = url => {
        dispatch(imgUrl(url));
    };

    return {
        uploadedPdf,
        uploadedThumbnail,
        changingActive,
        updateTumbPreview
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepOneForm);