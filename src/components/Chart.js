import React, { useState, useEffect, Fragment } from 'react';
import Plot from 'react-plotly.js';

// const Chart = props => {
//   console.log(props)
//   // console.log('HEEERE', props.ages)
//   let ages = [];
//   let countAges = [];
//   let seriousness = [];

//   // console.log('state', this.props.state)

//   Object.values(props.ages).map(item => {
//     ages.push(item.age)
//     countAges.push(item.sum)
//     // seriousness.push(item.)
//   })

//   useEffect(() => {
//     console.log(props.selectedAge)
//   });

//   console.log('selected age in chart', props.selectedAge)
//   var sensitive1 = {
//     x: ages,
//     y: countAges,
//     name: 'Sensitive',
//     type: 'bar'
//   };

//   var sensitive2 = {
//     x: props.selectedAge,
//     y: countAges,
//     name: 'Sensitive',
//     type: 'bar'
//   };

//   var trace3 = {
//     x: ages,
//     y: countAges,
//     name: 'Sensitive',
//     type: 'bar'
//   };

//   var trace4 = {
//     x: ages,
//     y: countAges,
//     name: 'Sensitive',
//     type: 'bar'
//   };


//   return (
//     <div>
//       <Plot
//         onUpdate={(figure) => this.setState(props.selectedAge)}
//         data={[
//           sensitive1, sensitive2
//         ]}
//         layout={ {barmode: 'group', title: 'Sensitive/Treatment'} }
//       />
//       <Plot
//         onUpdate={(figure) => this.setState(figure)}
//         data={[
//           trace3, trace4
//         ]}
//         layout={ {barmode: 'group', title: 'Seriousness'} }
//       />
//     </div>
//   );
// }

// export default Chart;


class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedAge: null, ages: null, data: [], layout: {}, frames: [], config: {} };
  }

  render() {
    let ages = [];
    let countAges = [];
    // let seriousness = [];

    Object.values(this.props.ages).map(item => {
      ages.push(item.age)
      countAges.push(item.sum)
      // seriousness.push(item.)
    })

    var sensitive1 = {
      x: ages,
      y: countAges,
      name: 'Sensitive',
      type: 'bar'
    };
    var sensitive2 = {
      x: 1,
      y: 2,
      name: 'Sensitive',
      type: 'bar'
    };
    return (
      <div>
        <select onChange={e => this.setState({selectedAge: e.target.value})}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
        </select>
        <Plot
          data={[sensitive1, sensitive2]}
          layout={this.state.layout}
          frames={this.state.frames}
          config={this.state.config}
          onInitialized={(figure) => this.setState(figure)}
          onUpdate={(figure) => this.setState(figure)}
        />
      </div>
    );
  }
}

export default Chart;
