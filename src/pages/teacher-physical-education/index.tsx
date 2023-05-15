import { SliderPage } from 'widgets'
import { StudentsList } from './students-list'
import { Wrapper } from './styled'
import React from 'react'

const TeacherPhysicalEducation = () => {
    return (
        <Wrapper>
            <SliderPage pages={[{ title: 'Студенты', content: <StudentsList /> }]} />
        </Wrapper>
    )
}

export default TeacherPhysicalEducation
