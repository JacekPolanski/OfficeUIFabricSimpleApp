import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';

interface HomeState { isDialogVisible: Boolean };

export class Home extends React.Component<RouteComponentProps<{}>, HomeState> {
    constructor() {
        super();

        this.state = {
            isDialogVisible: false
        };
    }

    public render() {
        const divClasses = 'ms-font-xxl ms-fontWeight-semibold ms-fontColor-themeDark';

        return (
            <div>
                <div className={divClasses}>Home Office UI</div>

                <DefaultButton onClick={this.changeDialogVisibility.bind(this, true)} text='Show dialog' />

                <Dialog
                    hidden={!this.state.isDialogVisible}
                    onDismiss={this.changeDialogVisibility.bind(this, false)}
                    dialogContentProps={{
                        type: DialogType.largeHeader,
                        title: 'Hello world!',
                        subText: 'A dialog from Office UI FRabric',
                    }}
                    modalProps={{
                        isBlocking: false,
                        containerClassName: 'ms-dialogMainOverride',
                    }}>
                    <DialogFooter>
                        <PrimaryButton onClick={this.changeDialogVisibility.bind(this, false)} text='OK' />
                        <DefaultButton onClick={this.changeDialogVisibility.bind(this, false)} text='Cancel' />
                    </DialogFooter>
                </Dialog>
            </div>
        );
    }

    private changeDialogVisibility = (value: Boolean) => { this.setState({ isDialogVisible: value }) };
}
