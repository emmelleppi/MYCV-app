import React from 'react'
import CurriculumList from './CurriculumList'
import CurriculumListFilters from './CurriculumListFilters'

function CurriculaDashboardPage () {
  return (
    <div>
      <CurriculumListFilters />
      <CurriculumList />
    </div>
  )
}

export default CurriculaDashboardPage
