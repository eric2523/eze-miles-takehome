import React from "react"
import { connect } from "react-redux"

const CategorySubheaderItem = ({ name }) => {
  return (
    <th>
      { name }
    </th>
  )
}

const CategorySubheader = ({ categories }) => {
  let list = [<th key={ "null-placeholder" }></th>]
  for(const id in categories.byId){
    let category = categories.byId[id]

    list.push(
      <CategorySubheaderItem key={ category.id } name={ category.name }/>
    )
  }

  return (
    <tr>
      { list }
    </tr>
  )
}

const mSTP = (state) => {
  return ({
    categories: state.entities.categories
  })
}

export default connect(mSTP, null)(CategorySubheader)