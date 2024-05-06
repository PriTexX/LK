import { phonebookApi } from '@shared/api'
import { Subdivision } from '@shared/api/model/phonebook'
import { createEffect, createEvent, createStore, sample } from 'effector'

const setSubdivisionPath = createEvent<Subdivision[] | null>()

const getSubdivisions = createEvent()
const getSubdivisionsFx = createEffect(async (): Promise<Subdivision[]> => {
    const { data } = await phonebookApi.get()
    if (!data?.map) throw new Error('Не удалось загрузить подразделения')

    return data
})
sample({ clock: getSubdivisions, target: getSubdivisionsFx })
const $pedningGetSubdividions = getSubdivisionsFx.pending

const clearSubdivisionData = createEvent()
const $subdivisionPath = createStore<Subdivision[] | null>(null).on(
    setSubdivisionPath,
    (_, subdivisions) => subdivisions,
)
const $subdivisions = createStore<Subdivision[] | null>(null).on(
    getSubdivisionsFx.doneData,
    (_, subdivisions) => subdivisions,
)
const $error = createStore<string | null>(null)
    .on(getSubdivisionsFx.failData, (_, error) => error.message)
    .on(getSubdivisionsFx, () => null)

export const events = {
    setSubdivisionPath,
    getSubdivisions,
    clearSubdivisionData,
}

export const stores = {
    subdivisionPath: $subdivisionPath,
    subdivisions: $subdivisions,
    error: $error,
    pedningGetSubdividions: $pedningGetSubdividions,
}
