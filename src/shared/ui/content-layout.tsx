import PrivateRouter from '@app/routers/private-router'
import { OLD_LK_URL } from '@consts'
import { popUpMessageModel } from '@entities/pop-up-message'
import { settingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import useIsShowNotification from '@utils/hooks/use-is-show-notification'
import useTheme from '@utils/hooks/use-theme'
import { Suspense, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Confirm, Header, HintModal, LeftsideBar, MobileBottomMenu, PopUpMessage, useModal } from 'widgets'
import ContextMenu from 'widgets/context-menu'
import { Modal } from 'widgets/modal'
import WhatsNew from '../../widgets/whats-new'
import InitialLoader from './initial-loader'
import Story from './story'
import React from 'react'
// import useShowTutorial from '@utils/hooks/use-show-tutorial'
import { Link } from 'react-router-dom'
import { ALERTS_ROUTE } from '@app/routes/general-routes'
import useResize from '@shared/lib/hooks/use-resize'
import useCurrentExactPage from '@utils/hooks/use-current-exact-page'

const ContentWrapper = styled.div<{ withHeader: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: var(--theme);
    overflow: hidden;

    .page-content {
        position: relative;
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;

        ${({ withHeader }) =>
            withHeader
                ? css`
                      height: calc(100% - var(--header-height));
                      margin-top: var(--header-height);
                  `
                : css`
                      height: 100%;
                  `}
    }

    @media (max-width: 1000px) {
        font-size: 0.9em;
        .page-content {
            margin-bottom: var(--mobile-bottom-menu-height);

            height: ${({ withHeader }) =>
                withHeader
                    ? 'calc(100% - var(--mobile-bottom-menu-height) - var(--header-height))'
                    : 'calc(100% - var(--mobile-bottom-menu-height))'};
        }
    }
`

const ContentLayout = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const { height } = useResize()
    const { open } = useModal()
    const isShowNotification = useIsShowNotification()
    const { currentPage, exactCurrentPage } = useCurrentExactPage()
    // const { seen } = useShowTutorial()

    useEffect(() => {
        if (user) settingsModel.effects.getLocalSettingsFx(user.id)
    }, [user])

    useTheme()
    useEffect(() => {
        popUpMessageModel.events.evokePopUpMessage({
            message: (
                <>
                    Если вы хотите перейти <br /> в старый личный кабинет,{' '}
                    <a href={`${OLD_LK_URL}/index.php`}>нажмите сюда</a>
                </>
            ),
            type: 'info',
            time: 5000,
        })

        // TODO: popUpMessageModel add stack of alerts
        user?.hasAlerts &&
            setTimeout(
                () =>
                    popUpMessageModel.events.evokePopUpMessage({
                        message: <Link to={ALERTS_ROUTE}>У вас есть новые оповещения</Link>,
                        type: 'tip',
                        time: 5000,
                    }),
                5000,
            )
        // InstallApp()
    }, [user])

    useEffect(() => {
        if (isShowNotification) {
            isShowNotification && open(<WhatsNew />)
        }
    }, [isShowNotification])

    // useEffect(() => {
    //     if (!seen) {
    //         storyModel.events.open({ pages: TutorialStory })
    //         setSeen(true)
    //     }
    // }, [])

    return (
        <div style={{ height, display: 'flex', background: 'var(--theme)' }}>
            <InitialLoader loading={!user} />
            {/* <GreetingsScreen /> */}
            <Story />
            <LeftsideBar />
            <ContentWrapper withHeader={!(exactCurrentPage ?? currentPage)?.withoutHeader}>
                <Header currentPagePair={{ currentPage, exactCurrentPage }} />
                <div className="page-content">
                    <Suspense fallback={null}>
                        <PrivateRouter />
                    </Suspense>
                </div>
                <MobileBottomMenu />
            </ContentWrapper>
            <Modal />
            <PopUpMessage />
            <Confirm />
            <ContextMenu />
            <HintModal />
        </div>
    )
}

export default ContentLayout
