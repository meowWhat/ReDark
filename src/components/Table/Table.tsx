/**
 * @Table 适配于Api文档使用
 */
import React from 'react'
import './Table.less'

export default function Table(props: {
  thead: Array<string>
  tbody: Array<Array<string>>
}) {
  const { thead = [], tbody = [] } = props
  return (
    <table className="rd-table">
      <thead className="rd-thead">
        <tr>
          {thead.map((el, index) => {
            return <td key={el + index}>{el}</td>
          })}
        </tr>
      </thead>
      <tbody className="rd-tbody">
        {tbody.map((arr, index) => {
          return (
            <tr key={index}>
              {arr.map((el) => {
                return <td key={el + index}>{el}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
