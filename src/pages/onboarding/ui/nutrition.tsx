import { Ul } from '@features/feedback/ui/organisms/help-links'
import React from 'react'

export const Nutrition = () => {
    return (
        <>
            <h4>Столовые</h4>
            <Ul>
                <li>Большая Семеновская, 40а (корпус Б, 1 этаж)</li>
                <li>Павла Корчагина, 22 стр. 2 (1 этаж)</li>
            </Ul>
            <h4>Буфеты</h4>
            <Ul>
                <li>
                    Прянишникова, 2а (3 этаж). Коворкинг-зоны с вендинговым аппаратом с готовым питанием и кофейным
                    аппаратом
                </li>
                <li>Автозаводская, 16, стр. 5 (4 корпус)</li>
                <li>Большая Семеновская 38, стр. 12 (корпус Н, 4 этаж)</li>
            </Ul>
        </>
    )
}
