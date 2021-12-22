import React, { useState } from 'react'
import { GeneralType } from '@consts'
import { useSettings } from '@utils/contexts/settings-context'
import ToggleArea, { ToggleItem } from '@ui/organisms/toggle-area'
import { Button } from '@ui/atoms'

const General = () => {
    const { setting, change } = useSettings<GeneralType>('general')

    // const [toggles, setToggles] = useState<ToggleItem[]>([
    //     {
    //         title: 'Push-уведомления',
    //         state: setting?.notifications ?? false,
    //         action: (state: boolean) => change({ notifications: state }),
    //     },
    // ])

    return (
        <>
            {/* <ToggleArea title={'Общие'} toggles={toggles} setToggles={setToggles} /> */}
            <Button
                text={<a href="/old">Перейти к старому дизану</a>}
                onClick={() => {
                    localStorage.setItem('useOldVersion', 'true')
                }}
                background="var(--purple)"
            />
        </>
    )
}

export default General
