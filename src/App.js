import React, { Component } from 'react';
import LineChart from './Components/LineChart';
import './App.css';

class App extends Component {
  state = {
    width : 500, height : 350, margin : 20,
   //  data : [
   //     {a: 1, b: 3},
   // {a: 2, b: 6},
   // {a: 3, b: 2},
   // {a: 4, b: 12},
   // {a: 5, b: 8}
   //  ]
   data : [ { user: "Rm6vnmNPRvz", value: 11, category: 7 }, { user: "cB0hC", value: 9, category: 7 }, { user: "xFapEXx9", value: 12, category: 9 }, { user: "stHdo1TV", value: 6, category: 10 }, { user: "NlUafWkpjduC3", value: 10, category: 7 }, { user: "e7DwVrmJ", value: 7,category: 6 }, { user: "uEOJsO", value: 6, category: 14 }, { user: "zlTNlewuDKcRl", value: 13, category: 8 }, { user: "BQlhXiIHXUo42I", value: 12, category: 14 }]

  }
  render()  {
    return (
      <div>
        <LineChart data={this.state.data} width={this.state.width} height={this.state.height} margin={this.state.margin}/>
        </div>
      )
    }
}


export default App;
