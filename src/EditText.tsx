import * as React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Form, Icon, TextArea } from 'semantic-ui-react';
import './App.css';


interface IEditTextProps {
    DefaultTextValue: string;
    CanEdit: boolean;
}

interface IEditTextState {
    NewTextValue: string;
    Edit: boolean;
}

export default class EditText extends React.Component<IEditTextProps, IEditTextState>{

    constructor(props: IEditTextProps) {
        super(props);
        this.state = { NewTextValue: "", Edit: false }
    }

    public render() {
        return (
            <>
                {this.state.Edit &&
                    <Container textAlign='center'>
                        <Form>
                            <TextArea  />
                            <Button.Group>
                                <Button>Cancel</Button>
                                <Button positive={true}>Save</Button>
                            </Button.Group>
                        </Form>
                    </Container>
                }
                {!this.state.Edit &&
                    <h3>{this.props.DefaultTextValue}  {this.props.CanEdit && <span onClick={this.onIconClick}><Icon link={true} size='small' name='edit outline' /></span>}</h3>
                }
            </>
        )
    }
    private onIconClick = (event: any) => {
        this.setState({ Edit: true })
    }
}