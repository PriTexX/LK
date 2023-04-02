import { Button, FormBlock, SubmitButton, Title } from '@ui/atoms'
import { IInputArea } from '@ui/input-area/model'
import checkFormFields from '@utils/check-form-fields'
import React, { useEffect, useState } from 'react'
import getForm from './lib/get-form'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { useHistory } from 'react-router'
import { FiChevronLeft } from 'react-icons/fi'
import { APPLICATIONS_ROUTE } from '@routes'
import getFamily from './lib/get-family'
import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import { applicationsModel } from '@entities/applications'
import { getAdditionally, globalAppSendForm } from '@pages/applications/lib'
import { listConfigCert } from '@features/applications/lib/get-list-configs-certificate'
import StepByStepForm from '@features/applications/ui/molecules/step-by-step-form'

type LoadedState = React.Dispatch<React.SetStateAction<IInputArea>>

const FamilyRoomPage = () => {
    const [form, setForm] = useState<IInputArea | null>(null)
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [completed, setCompleted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [family, setFamily] = useState<IInputArea | null>(null)
    const [additionally, setAdditionally] = useState<IInputArea | null>(null)
    const isDone = completed ?? false

    const history = useHistory()

    const [kvdCert, setKvdCert] = useState<IInputArea>(listConfigCert.kvdCert)
    const [fluorographyCert, setFluorographyCert] = useState<IInputArea>(listConfigCert.fluorographyCert)
    const [vichRwCert, setVichRwCert] = useState<IInputArea>(listConfigCert.vichRwCert)
    const [graftCert, setGraftCert] = useState<IInputArea>(listConfigCert.graftCert)

    const isForm = !!form && !!family && !!additionally

    useEffect(() => {
        if (dataUserApplication) {
            setForm(getForm(dataUserApplication))
            setFamily(getFamily())
            setAdditionally(getAdditionally())
        }
    }, [dataUserApplication])

    if (!isForm) {
        return null
    }

    return (
        <BaseApplicationWrapper isDone={isDone}>
            <FormBlock>
                <Button
                    text="Назад к цифровым сервисам"
                    icon={<FiChevronLeft />}
                    onClick={() => history.push(APPLICATIONS_ROUTE)}
                    background="transparent"
                    textColor="var(--blue)"
                />
                <Title size={4} align="left">
                    Предоставление права проживания в семейной комнате
                </Title>
                <StepByStepForm
                    stagesConfig={[
                        [{ dataForm: form, setDataForm: setForm as LoadedState }],
                        [{ dataForm: family, setDataForm: setFamily as LoadedState }],
                        [
                            { dataForm: kvdCert, setDataForm: setKvdCert as LoadedState },
                            { dataForm: fluorographyCert, setDataForm: setFluorographyCert as LoadedState },
                            { dataForm: vichRwCert, setDataForm: setVichRwCert as LoadedState },
                            { dataForm: graftCert, setDataForm: setGraftCert as LoadedState },
                        ],
                    ]}
                />
                <SubmitButton
                    text={'Отправить'}
                    action={() =>
                        globalAppSendForm(
                            ApplicationFormCodes.USG_GETHOSTEL_FAMILY,
                            [form, family, kvdCert] as IInputArea[],
                            setLoading,
                            setCompleted,
                        )
                    }
                    isLoading={loading}
                    completed={completed}
                    setCompleted={setCompleted}
                    repeatable={false}
                    buttonSuccessText="Отправлено"
                    isDone={isDone}
                    isActive={
                        (form.optionalCheckbox?.value ?? true) &&
                        checkFormFields(form) &&
                        checkFormFields(family) &&
                        checkFormFields(kvdCert) &&
                        checkFormFields(fluorographyCert) &&
                        checkFormFields(vichRwCert) &&
                        checkFormFields(graftCert)
                    }
                    popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
                    popUpSuccessMessage="Данные формы успешно отправлены"
                />
            </FormBlock>
        </BaseApplicationWrapper>
    )
}

export default FamilyRoomPage
