import { IInputAreaData } from '@ui/input-area/model'
import { SpecialFieldsNameConfig, SpecialFieldsName } from '@entities/applications/consts'

type radioType = { id: number; title: string }

export const getAttachmentExitAcademic = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const attachmentField = data.find((item: IInputAreaData) => item.fieldName === 'attachments')
    let resultNameField: SpecialFieldsName = null
    if (!!attachmentField?.value) {
        const value = attachmentField?.value as radioType
        if (value.title === 'заключение врачебной комиссии медицинской организации') {
            resultNameField = 'medicalReport'
        }
    }
    return { reason_academic: resultNameField }
}
