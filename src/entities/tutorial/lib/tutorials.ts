export type Module = {
    id: TutorialId
    name: string
    completed: boolean
    steps: TutorialStep[]
    path: string
}

export type TutorialStep = {
    title: string
    description: string
}

export const commonTutorialIds = [
    'home',
    'stud_applications',
    'payments',
    'profile',
    'medical-certificate',
    'schedule',
] as const
export type TutorialId = (typeof commonTutorialIds)[number]
export type ModuleData = {
    [id in TutorialId]: Pick<Module, 'steps' | 'path' | 'name'>
}

export const commonTutorials: ModuleData = {
    // sidebar: {
    //     path: '',
    //     name: 'Боковая панель',
    //     steps: [
    //         {
    //             title: 'Боковая панель',
    //             description: 'Боковая панель всегда находится в поле зрения и содержит основную навигацию в приложении',
    //         },
    //         {
    //             title: 'Профиль',
    //             description: 'Для доступа к профилю пользователя, кликните на иконку профиля в правом верхнем углу',
    //         },
    //         {
    //             title: 'Поиск',
    //             description:
    //                 'Используйте поле поиска в верхней части страницы для быстрого поиска информации или контента',
    //         },
    //         {
    //             title: 'Меню быстрого доступа',
    //             description: 'В этом меню вы можете получить быстрый доступ к часто используемым функциям',
    //         },
    //         {
    //             title: 'Переход на главную',
    //             description: 'Нажмите на логотп, чтобы мгновенно перейти на главную страницу',
    //         },
    //     ],
    // },
    home: {
        path: '/home',
        name: 'Главная',
        steps: [
            {
                title: 'Главная',
                description: 'На главной странице собрана основная информация приложения',
            },
            {
                title: 'Поиск',
                description: 'На главной странице также есть поиск для быстрого поиска информации или контента',
            },
            {
                title: 'Меню быстрого доступа',
                description: 'На главной странице находится другое меню быстрого доступа',
            },
            {
                title: 'Уведомления',
                description: 'Просмотрите уведомления о важных событиях или сообщениях, щелкнув по иконке колокольчика',
            },
            {
                title: 'Виджеты',
                description:
                    'Используйте виджеты для быстрого доступа к информации или функциям, размещенным на главной странице',
            },
        ],
    },
    stud_applications: {
        path: '/applications',
        name: 'Цифровые сервисы',
        steps: [
            {
                title: 'Цифровые сервисы',
                description: 'В этом разделе можно заказать необходимую справку, подать заявление или запрос',
            },
            {
                title: 'Цифровые сервисы',
                description:
                    'В таблице можно посмотреть статус заявления и скачать файлы документов. Доступны поиск и фильтрация по запросам',
            },
            {
                title: 'Цифровые сервисы',
                description:
                    'В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом',
            },
            {
                title: 'Подать заявление',
                description: 'Чтобы подать заявление, нажмите на кнопку',
            },
        ],
    },
    payments: {
        path: '/payments',
        name: 'Договоры и оплаты',
        steps: [
            {
                title: 'Договоры и оплаты',
                description:
                    'В этом разделе можно посмотреть задолженность и другую информацию по договору. У тебя есть договор на общежитие и на обучение. Их можно переключать в этом меню',
            },
            {
                title: 'Задолженность',
                description: 'Тут отображается задолженность или переплата',
            },
            {
                title: 'Оплата',
                description: 'Чтобы оплатить договор, нажмите на эту кнопку и отсканируйте QR-код',
            },
        ],
    },
    profile: {
        path: '/profile',
        name: 'Профиль',
        steps: [
            {
                title: 'Профиль',
                description: 'В этом разделе можно изменить пароль и имя',
            },
        ],
    },
    'medical-certificate': {
        path: '/medical-certificate',
        name: 'Предоставление медицинских справок',
        steps: [
            {
                title: 'Мед. свидетельство',
                description: 'В этом разделе можно получить мед. свидетельство',
            },
        ],
    },
    schedule: {
        path: '/schedule',
        name: 'Расписание',
        steps: [
            {
                title: 'Расписание',
                description: 'В этом разделе можно посмотреть расписание',
            },
        ],
    },
}
