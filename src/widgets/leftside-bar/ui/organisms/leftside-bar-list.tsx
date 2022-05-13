import { IRoute } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { SkeletonShape } from '@ui/skeleton-shape'
import useIsAccessibleRoute from '@utils/hooks/use-is-accessible-route'
import React from 'react'
import LeftsideBarListWrapper from '../atoms/leftside-bar-list-wrapper'
import LeftsideBarItem from '../molecules/leftside-bar-item'

const LeftsideBarList = () => {
    const { leftsideBarRoutes, currentPage, allRoutes } = menuModel.selectors.useMenu()
    const isAccessible = useIsAccessibleRoute()

    if (!leftsideBarRoutes)
        return (
            <SkeletonShape
                shape={'rect'}
                size={{
                    width: '100%',
                    height: '300px',
                }}
            />
        )

    return (
        <LeftsideBarListWrapper>
            {Object.values(leftsideBarRoutes).map((props: IRoute) => {
                return (
                    isAccessible(props.title) && (
                        <LeftsideBarItem {...props} key={props.id} isCurrent={currentPage?.id === props.id} />
                    )
                )
            })}
        </LeftsideBarListWrapper>
    )
}

export default React.memo(LeftsideBarList)
