import { TimeIntervals } from '@shared/api/model'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { DayCalendarEvent } from '@shared/ui/calendar'
import { useCalendarGeneral } from '@shared/ui/calendar/hooks/use-calendar-general'
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { getCurrentDay } from '../lib/get-current-day'
import { getEndTime } from '../lib/get-end-time'
import { DayCalendarProps } from '../types'
import { IWeekDayNames } from '@shared/constants'
import { checkIfEventIsCurrent } from '@shared/ui/calendar/ui/event/lib/check-if-event-is-current'

type Props = DayCalendarProps

export const useCalendarDay = ({
    events: allEvents,
    currentChosenDay,
    showDates = true,
    interval = [0, 23],
}: Props) => {
    const { isSmallDesktop } = useCurrentDevice()
    const { scale, shift, events, handleOpenModal } = useCalendarGeneral({ interval, events: allEvents })
    const [chosenEvent, setChosenEvent] = useState<DayCalendarEvent | null>(null)
    const [currentDay, setCurrentDay] = useState(getCurrentDay(currentChosenDay))
    const carouselRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (allEvents) {
            const day = Object.keys(allEvents ?? {})[currentDay] as IWeekDayNames
            const chosen = allEvents[day].find((event) => checkIfEventIsCurrent(event, true)) ?? null
            setChosenEvent(chosen)
        } else {
            setChosenEvent(null)
        }
    }, [allEvents])

    const timeInterval = chosenEvent
        ? (`${chosenEvent.startTime} - ${getEndTime(chosenEvent.startTime, chosenEvent.duration)}` as TimeIntervals)
        : ('9:00' as TimeIntervals)

    const onEventClick = useCallback(
        (event: DayCalendarEvent) => {
            if (isSmallDesktop) handleOpenModal(event)
            else setChosenEvent(event)
        },
        [isSmallDesktop],
    )

    const handleCarouselScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
        const pageIndex = Math.floor(e.currentTarget.scrollLeft / e.currentTarget.clientWidth)
        setCurrentDay(pageIndex)
    }

    const handleDayClick = (day: number) => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = carouselRef.current.clientWidth * day
        }
    }

    useLayoutEffect(() => {
        handleDayClick(getCurrentDay(currentChosenDay))
    }, [carouselRef, currentChosenDay])

    return {
        currentDay,
        events,
        carouselRef,
        interval,
        scale,
        shift,
        showDates,
        chosenEvent,
        timeInterval,
        currentChosenDay,
        handleDayClick,
        handleCarouselScroll,
        onEventClick,
    }
}
