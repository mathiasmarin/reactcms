import * as React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Form, FormProps, Icon, TextArea, TextAreaProps } from 'semantic-ui-react';
import './App.css';


interface IEditTextProps {
    InitTextValue: string;
    CanEdit: boolean;
    RenderTextAs:string;
}

interface IEditTextState {
    DefaultTextValue: string;
    NewTextValue: string;
    Edit: boolean;
}

export default class EditText extends React.Component<IEditTextProps, IEditTextState>{
    constructor(props: IEditTextProps) {
        super(props);
        this.state = { NewTextValue: this.props.InitTextValue, Edit: false, DefaultTextValue: this.props.InitTextValue }
    }

    public render() {
        return (
            <>
                {this.state.Edit &&
                    <Container fluid={true} textAlign='center'>
                        <Form onSubmit={this.onSaveClick}>
                            <Form.TextArea onChange={this.onTextChange} value={this.state.NewTextValue}  />
                            <Button.Group>
                                <Form.Button onClick={this.onCancelClick}>Cancel</Form.Button>
                                <Form.Button type='submit' positive={true}>Save</Form.Button>
                            </Button.Group>
                        </Form>
                    </Container>
                }
                {!this.state.Edit &&
                    <TextArea as={this.props.RenderTextAs}>{this.state.NewTextValue}  {this.props.CanEdit && <span onClick={this.onIconClick}><Icon link={true} size='small' name='edit outline' /></span>}</TextArea>
                }
            </>
        )
    }
    private onIconClick = () => {
        this.setState({ Edit: true })
    }
    private onCancelClick = () => {
        this.setState({ Edit: false, NewTextValue: this.state.DefaultTextValue })
    }

    private onSaveClick = (event: React.FormEvent<HTMLFormElement>, data: FormProps) => {
        this.setState({ Edit: false, DefaultTextValue: this.state.NewTextValue })
    }

    private onTextChange = (event : React.FormEvent<HTMLTextAreaElement>, data: TextAreaProps) => {
        const value = data.value ? data.value.toString() : "";
        this.setState({ NewTextValue: value })
    }

}