import React from 'react'
import { userModel } from '@entities/user'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import ShortCutLinks from '@features/home/ui/organisms/short-cut-links'
import UserInfo from '@features/home/ui/organisms/user-info'
import { Wrapper } from '@ui/atoms'
import { Content } from './ui/atoms/content'
import { scheduleModel } from '@entities/schedule'

const Home = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()
    const { data } = scheduleModel.selectors.useSchedule()

    return (
        <Wrapper
            loading={!user}
            load={() => scheduleModel.effects.getScheduleFx()}
            error={error}
            data={user && data.schedule}
        >
            <Content>
                {!!user && (
                    <div className="home-page-content-inner">
                        <UserInfo user={user} />
                        {!user.subdivisions && <ScheduleAndNotification />}
                        <ShortCutLinks />
                    </div>
                )}
            </Content>
        </Wrapper>
    )
}

export default Home
