import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import AllInfo from '@features/home/ui/molecules/all-info'
import Orders from '@features/home/ui/molecules/orders'
import { UserInfo } from '@features/profile'
import { CenterPage, Wrapper } from '@shared/ui/atoms'
import Block from '@shared/ui/block'
import { Error } from '@ui/error'
import React from 'react'
import styled from 'styled-components'
import { AvailableAccounts } from 'widgets'
import Top from './ui/top'
import { PhonebookProfile } from '@pages/teachers-applications/pages/phonebook/phonebook-profile'
import useQueryParams from '@shared/lib/hooks/use-query-params'
import { useHistory } from 'react-router'

const ContentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    align-items: center;
`

const ProfilePage = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()
    const history = useHistory()
    const query = useQueryParams()
    const page = query.get('page')
    const { allRoutes } = menuModel.selectors.useMenu()
    // const [currentPage, setCurrentPage] = useState(0)

    if (!user || !allRoutes) return null

    if (!!error) return <Error text={error} />

    const studentPages = [
        { title: 'Учетная карточка', content: <AllInfo user={user} />, id: 'userCard' },
        { title: 'Приказы', content: <Orders orders={user.orders} />, id: 'orders' },
    ]

    const teacherPages = [
        { title: 'Учетная карточка', content: <AllInfo user={user} />, id: 'userCard' },
        {
            title: 'Контактные данные',
            content: <PhonebookProfile user={user} />,
            id: 'contactDetails',
        },
        // {
        //     title: 'Сведения о вакцинации',
        //     content: (
        //         <div style={{ justifyContent: 'start' }}>
        //             <PageIsNotReady oldVersionUrl={VAX_ROUTE} />
        //         </div>
        //     ),
        // },
        // {
        //     title: 'Дети и внуки',
        //     content: (
        //         <div style={{ justifyContent: 'start' }}>
        //             <PageIsNotReady oldVersionUrl={CHILDREN_ROUTE} />
        //         </div>
        //     ),
        // },
    ]

    const pages = user.user_status === 'stud' ? studentPages : teacherPages

    const index = pages.findIndex((p) => p.id === page) || 0
    const currentPage = index === -1 ? 0 : index
    const setCurrentPage = (page: number) => {
        history.push({ search: `?page=${pages[page].id}` })
    }
    return (
        <Wrapper load={function () {}} loading={false} data={[]} error={null}>
            <ContentList>
                <Top user={user} currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />

                <CenterPage>
                    <Block height="100%" maxWidth="750px">
                        <AvailableAccounts />
                    </Block>
                </CenterPage>
                <UserInfo currentPage={currentPage} pages={pages.map((p) => p.content)} />
            </ContentList>
        </Wrapper>
    )
}

export default ProfilePage
