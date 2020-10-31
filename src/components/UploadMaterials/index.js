import React from 'react';
import { connect } from 'react-redux';

//Libraries components
import { Steps } from 'antd';

//Style

//Actions
import { activeStep } from './actions/activeStep';

//Components
import StepOneForm from './components/StepOneForm';
import StepTwoForm from './components/StepTwoForm';
import StepThreeForm from './components/StepThreeForm';

//Misc imports

class UploadMaterials extends React.Component {
    constructor(props) {
        super(props);

        this.changeActive = this.changeActive.bind(this);
    }

    changeActive(nextSelected) {
        this.props.changingActive(nextSelected);
    }

    renderSwitch(step) {
        const steps = {
            '0': (<StepOneForm {...this.props} />),
            '1': (<StepTwoForm {...this.props} />),
            '2': (<StepThreeForm {...this.props} />)
        };

        return steps[step];
    }

    render() {
        const { currentActive } = this.props;

        return (
            <React.Fragment>
                <div style={{ height: 'initial' }}>
                    <Steps current={ currentActive } style={{ marginBottom: '24px' }}>
                        <Steps.Step 
                            title="Step 1" 
                            description="Upload dei files" />
                        {/* Check sul flag disabled va fatto sui campi del form dello step precedente */}
                        <Steps.Step 
                            disabled={ false } 
                            title="Step 2" 
                            description="Selezione delle info" />
                        {/* Check sul flag disabled va fatto sui campi del form dello step precedente */}
                        <Steps.Step 
                            disabled={ false } 
                            title="Step 3" 
                            description="Recap dei dati" />
                    </Steps>
                    <div>
                        { this.renderSwitch(currentActive) }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentActive: state.uploadMaterials.currentActive
    };
};

const mapDispatchToProps = dispatch => {
    const changingActive = selected => {
        dispatch(activeStep(selected));
    };

    return {
        changingActive,
        mapDispatchToProps
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UploadMaterials);