import checkFormFields from '@shared/lib/check-form-fields'
import { FormBlock, Message, SubmitButton } from '@shared/ui/atoms'
import InputArea from '@shared/ui/input-area'
import { IInputArea } from '@shared/ui/input-area/model'
import React, { useEffect, useState } from 'react'
import { LoadedState } from 'widgets/template-form'
import { getEmployees, getForm } from '../lib/get-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { useUnit } from 'effector-react'
import { allowancesModel } from '@entities/allowances'
import { applicationsModel } from '@entities/applications'
import { FiInfo } from 'react-icons/fi'
import { userModel } from '@entities/user'

const CreateAllowance = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const [employees, setEmployees] = useState<IInputArea | null>(null)
    const [completed, setCompleted] = useState(false)
    const isDone = completed ?? false

    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [createSupplement, loading, allowanceTypes, fundingSources, activityAreas, pageMounted, role, user] = useUnit(
        [
            allowancesModel.events.createSupplement,
            allowancesModel.mutations.createSupplement.$pending,
            allowancesModel.queries.allowanceTypes.$data,
            allowancesModel.queries.fundingSources.$data,
            allowancesModel.queries.activityAreas.$data,
            allowancesModel.events.pageMounted,
            allowancesModel.stores.role,
            userModel.stores.user,
        ],
    )

    useEffect(() => {
        if (!!dataUserApplication && !!allowanceTypes && !!fundingSources && !!activityAreas) {
            setForm(getForm(dataUserApplication, fundingSources, allowanceTypes, activityAreas))
            setEmployees(getEmployees())
        }
    }, [dataUserApplication, allowanceTypes, fundingSources, activityAreas])

    useEffect(() => {
        pageMounted({ role: role || 'initiator', userId: user.currentUser?.guid ?? '' })
    }, [])

    return (
        <BaseApplicationWrapper isDone={isDone}>
            {!!form && !!employees && (
                <FormBlock noHeader>
                    <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                        <p>Интерфейс все еще находится в разработке</p>
                    </Message>
                    <InputArea {...form} collapsed={isDone} setData={setForm as LoadedState} />
                    <InputArea {...employees} collapsed={isDone} setData={setEmployees as LoadedState} />
                    <SubmitButton
                        text={!isDone ? 'Отправить' : 'Отправлено'}
                        action={() => {
                            createSupplement({ form, employees })
                        }}
                        isLoading={loading}
                        completed={completed}
                        setCompleted={setCompleted}
                        repeatable={false}
                        buttonSuccessText="Отправлено"
                        isDone={isDone}
                        isActive={checkFormFields(form)}
                        popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                        popUpSuccessMessage="Данные формы успешно отправлены"
                    />
                </FormBlock>
            )}
        </BaseApplicationWrapper>
    )
}

export default CreateAllowance
