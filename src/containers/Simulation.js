import React, { useState } from 'react'

import Card from '@material-ui/core/Card';
import Chart from '../components/Chart';
import DataSet from '../charts/Data';

const Simulation = () => {

  const [age1, setAge1] = useState(18);


  return (
    <div>
      <Card>
        <h2>Policy Development Simulator</h2>
        <select onChange={e => setAge1(e.target.value)}>
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
          <option selected>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
        </select>
        {DataSet.map(() => {

          return <div style={{padding:'1.5em'}}>
            <Chart selectedAge={age1} />
          </div>
        })}
      </Card>
    </div>
  );
}

export default Simulation;
