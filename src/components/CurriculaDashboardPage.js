import React from 'react'
import CurriculumList from './CurriculumList'
import CurriculumListFilters from './CurriculumListFilters'

const CurriculaDashboardPage = () => (
  <div>
    <CurriculumListFilters />
    <CurriculumList />
  </div>
)

export default CurriculaDashboardPage
