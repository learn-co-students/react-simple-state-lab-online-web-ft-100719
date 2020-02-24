import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  }

  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

const defualtValues = () => {
  const columns = []
  for (let i = 0; i < 10; i++) {
    const rows = []
    for (let j = 0; j < 10; j++) {
      rows.push('#F00')
    }
    columns.push(rows)
  }
  return columns
}

Matrix.defaultProps = {
  values: defualtValues()
}
