import { ILessons, ISubject } from '@api/model'
import calcNextSubjectTime from '@features/schedule/lib/calc-next-subject-time'
import calcTimeLeft from '@utils/calc-time-left'
import { Title } from '@ui/atoms'
import getCorrectWordForm from '@utils/get-correct-word-form'
import useOnScreen from '@utils/hooks/use-on-screen'
import useResize from '@utils/hooks/use-resize'
import React, { useEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'
import inTimeInterval from '../../lib/in-time-interval'
import { Subject, HolidayPlate, SkeletonLoading } from '../atoms'
import { scheduleModel } from '@entities/schedule'

type Props = ILessons & {
    weekDay?: string
    isCurrent?: boolean
    view?: string
    width?: number
    height?: number
    index: number
}

const findOpacity = (isCurrent: boolean, isFull: boolean, isVisible: boolean) => {
    if (isFull) {
        return isCurrent ? 1 : 0.8
    } else {
        return isVisible ? 1 : 0
    }
}

const findScale = (isVisible: boolean) => {
    return isVisible ? 1 : 0.9
}

const DayScheduleWrapper = styled.div<{
    isCurrent: boolean
    isFull: boolean
    isVisible: boolean
    width?: number | undefined
    height?: number | undefined
}>`
    display: flex;
    flex-direction: column;
    min-width: ${({ width, isFull }) => (!!width ? width + 'px' : isFull ? 'calc(100% / 6 - 9px)' : '400px')};
    width: ${({ width, isFull }) => (!!width ? width + 'px' : isFull ? 'calc(100% / 6)' : '400px')};
    height: ${({ height }) => (!!height ? height + 'px' : 'fit-content')};
    transition: 0.2s;
    color: var(--text);
    opacity: ${({ isCurrent, isFull, isVisible }) => findOpacity(isCurrent, isFull, isVisible)};
    transform: scale(${({ isVisible }) => findScale(isVisible)});
    overflow-y: auto;

    .day-title {
        display: flex;
        align-items: center;
        column-gap: 10px;
        margin-bottom: 5px;
        margin-left: 10px;
        width: calc(100% - 20px);
        justify-content: space-between;

        h4 {
            color: ${({ isCurrent }) => (isCurrent ? 'var(--blue)' : 'var(--text)')};
        }

        span {
            font-weight: 500;
            opacity: 0.7;
            font-size: 0.9em;
            width: 90px;
            text-align: center;
        }
    }

    @media (max-width: 1000px) {
        transition: 0.5s opacity;
        opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
        width: 100%;
        min-width: 100%;
        scroll-snap-align: start;
        transform: scale(1);
    }
`

const DayScheduleListWrapper = styled.div<{ isFull: boolean; height: number }>`
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--schedule-shadow);
    padding: 6px;
    background: var(--scheduleBg);
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    overflow-y: auto;
    scroll-snap-type: y proximity;
    max-height: ${({ height }) => `calc(${height}px - 325px)`};

    &::-webkit-scrollbar {
        width: 0;
    }

    @media (max-width: 1000px) {
        max-height: ${({ height }) => `calc(${height}px - 240px)`};
    }
`

const DaySchedule = ({ lessons, weekDay, isCurrent, view, index, width, height }: Props) => {
    const dayRef = useRef<null | HTMLDivElement>(null)
    const isOnScreen = useOnScreen(dayRef)
    const { height: screenHeight } = useResize()

    const nextSubjectTime = useMemo(() => calcNextSubjectTime(lessons ?? []), [lessons])

    useEffect(() => {
        if (dayRef?.current) {
            const currentLessonIndex =
                lessons?.findIndex(
                    (lesson) =>
                        inTimeInterval(lesson.timeInterval) ||
                        calcNextSubjectTime(lessons) === calcTimeLeft(lesson.timeInterval),
                ) ?? -1
            if (isCurrent && currentLessonIndex !== -1) {
                dayRef.current.scrollTop = currentLessonIndex * 150
            }
        }
    }, [lessons])

    return (
        <DayScheduleWrapper
            isCurrent={isCurrent ?? false}
            isFull={view === 'full'}
            isVisible={isOnScreen}
            width={width}
            height={height}
        >
            {!!weekDay && !!lessons && (
                <div className="day-title">
                    <Title size={4} align="left">
                        {weekDay}
                    </Title>
                    <span>
                        {lessons.length}{' '}
                        {getCorrectWordForm(lessons.length, {
                            zero: 'пар',
                            one: 'пара',
                            twoToFour: 'пары',
                            fiveToNine: 'пар',
                        })}
                    </span>
                </div>
            )}
            <DayScheduleListWrapper isFull={view === 'full'} ref={dayRef} height={screenHeight}>
                {!lessons && <SkeletonLoading />}
                {!!lessons &&
                    lessons.map((subject: ISubject, index) => {
                        return (
                            <Subject
                                {...subject}
                                key={index}
                                view={view}
                                isCurrent={(isCurrent && inTimeInterval(subject.timeInterval)) ?? false}
                                isNext={isCurrent && nextSubjectTime === calcTimeLeft(subject.timeInterval)}
                            />
                        )
                    })}
                {!!lessons && !lessons.length && <HolidayPlate />}
            </DayScheduleListWrapper>
        </DayScheduleWrapper>
    )
}

export default DaySchedule
