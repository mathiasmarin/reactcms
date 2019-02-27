import * as React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Form, FormProps, Icon, TextArea, TextAreaProps } from 'semantic-ui-react';
import './App.css';


interface IEditTextProps {
    InitTextValue: string;
    CanEdit: boolean;
    RenderTextAs:string;
    OnSave:(newValue:string) => void
}

interface IEditTextState {
    Edit: boolean;
    NewTextValue: string;
}

export default class EditText2 extends React.Component<IEditTextProps, IEditTextState>{
    constructor(props: IEditTextProps) {
        super(props);
        this.state = { Edit: false, NewTextValue: ""}
    }

    public render() {
        return (
            <>
                {this.state.Edit &&
                    <Container fluid={true} textAlign='center'>
                        <Form onSubmit={this.onSaveClick}>
                            <Form.TextArea autoHeight={true} placeholder={this.props.InitTextValue} onChange={this.onTextChange} />
                            <Button.Group>
                                <Form.Button onClick={this.onCancelClick}>Cancel</Form.Button>
                                <Form.Button type='submit' positive={true}>Save</Form.Button>
                            </Button.Group>
                        </Form>
                    </Container>
                }
                {!this.state.Edit &&
                    <TextArea as={this.props.RenderTextAs}>{this.props.InitTextValue}{this.props.CanEdit && <span onClick={this.onIconClick}><Icon link={true} size='small' name='edit outline' /></span>}</TextArea>
                }
            </>
        )
    }
    private onTextChange = (event : React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => {
        const value = data.value ? data.value.toString() : "";
        this.setState({ NewTextValue: value })
    }
    private onIconClick = () => {
        this.setState({ Edit: true })
    }
    private onCancelClick = () => {
        this.setState({ Edit: false })
    }

    private onSaveClick = (event: React.FormEvent<HTMLFormElement>, data: FormProps) => {
        // tslint:disable-next-line:no-debugger
        debugger;
        this.setState({ Edit: false })
        this.props.OnSave(this.state.NewTextValue)
    }

}