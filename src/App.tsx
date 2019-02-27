import * as React from 'react';
import './App.css';
import EditText from './EditText';
import EditText2 from './EditText2';

import logo from './logo.svg';

interface IAppState {
  Text:string;
}

class App extends React.Component<{},IAppState> {
  constructor(props:any) {
    super(props);
    this.state = { Text: "Default",
   }

}
  public render() {
    return (
      
      <div className="App">
  
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <EditText2 OnSave={this.onTextSave} RenderTextAs='h3'CanEdit={true} InitTextValue={this.state.Text}/>
        <EditText RenderTextAs='h1'CanEdit={false} InitTextValue={"this.state.Text"}/>
      </div>
    );
  }
  private onTextSave = (newValue:string) => {
    this.setState({Text:newValue})
  }
 
  
}

export default App;
