export const dynamicFormSchema={
    forms: [
        {
            id: '1',
            code: 'ANNUAL LEAVE',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'date',
                    },
                    api_param: undefined,
                    seq: 1,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        pre: undefined,
                    },
                },
                {
                    id: '2',
                    name_en: 'Replaced By',
                    name_ar: 'الموظف البديل',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_REPLACEMENT_PER_ID',
                    seq: 2,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        pre: 'GET_REPLACE_BY_LIST',
                    },
                },
                {
                    id: '3',
                    name_en: 'Comments',
                    name_ar: '',
                    inputType: {
                        type: 'textarea',
                    },
                    api_param: 'I_COMMENTS',
                    seq: 3,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        pre: undefined,
                    },
                },
                {
                    id: '4',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                    },
                    api_param: undefined,
                    seq: 4,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        pre: undefined,
                    },
                },
            ],
        },
        {
            id: '2',
            code: 'SICK',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'date',
                    },
                    api_param: undefined,
                    seq: 1,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        pre: undefined,
                    },
                },
                {
                    id: '2',
                    name_en: 'Medical Report Issuing Authority',
                    name_ar: 'الموظف البديل',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'I_ISSUING_AUTHORITY',
                    seq: 2,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        pre: undefined,
                    },
                },
                {
                    id: '3',
                    name_en: 'Reason',
                    name_ar: '',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_SICK_LEAVE_REASON',
                    seq: 3,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        pre: 'GET_GENERIC_LOOKUP',
                    },
                },
                {
                    id: '4',
                    name_en: 'Sick Leave Reason',
                    name_ar: '',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'I_SICK_LEAVE_REASON',
                    seq: 4,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        pre: undefined,
                    },
                },
                {
                    id: '5',
                    name_en: 'Replaced By',
                    name_ar: 'الموظف البديل',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_REPLACEMENT_PER_ID',
                    seq: 5,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        pre: 'GET_REPLACE_BY_LIST',
                    },
                },
                {
                    id: '6',
                    name_en: 'Comments',
                    name_ar: '',
                    inputType: {
                        type: 'textarea',
                    },
                    api_param: 'I_COMMENTS',
                    seq: 6,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        pre: undefined,
                    },
                },
                {
                    id: '7',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                    },
                    api_param: undefined,
                    seq: 7,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        pre: undefined,
                    },
                },
            ],
        },
    ],
}