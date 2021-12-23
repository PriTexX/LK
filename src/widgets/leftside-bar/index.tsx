import { IRoute, privateRoutes } from '@app/routes/routes'
import { IRoutes, teachersPrivateRoutes } from '@app/routes/techers-routes'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import LeftsideBarWrapper from '@ui/atoms/leftside-bar-wrapper'
import Logo from '@ui/atoms/logo'
import LocalSearch from '@ui/molecules/local-search'
import useResize from '@utils/hooks/use-resize'
import React, { useState } from 'react'
import CloseMenuButton from 'widgets/leftside-bar/ui/molecules/close-menu-button'
import LeftsideBarList from 'widgets/leftside-bar/ui/organisms/leftside-bar-list'
import search from './lib/search'

const LeftsideBar = () => {
    const { isOpen } = menuModel.selectors.useMenu()
    const { width, height } = useResize()
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const currentRoute = !user?.subdivisions ? privateRoutes : teachersPrivateRoutes
    const [foundRoutes, setFoundRoutes] = useState<IRoutes | null>(null)

    return (
        <LeftsideBarWrapper isOpen={isOpen} height={height}>
            <div className="top-wrapper">
                <Logo />
                <LocalSearch whereToSearch={currentRoute} setResult={setFoundRoutes} searchEngine={search} />
                <LeftsideBarList searchList={foundRoutes} />
            </div>
            {width < 1000 && <CloseMenuButton />}
        </LeftsideBarWrapper>
    )
}

export default LeftsideBar
