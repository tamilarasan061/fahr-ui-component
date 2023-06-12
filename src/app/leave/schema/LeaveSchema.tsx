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
                        type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
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
                        lookup: 'REPLACED_BY',
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
                        lookup: undefined,
                    },
                },
                {
                    id: '4',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 4,
                    validation: {
                        isRequired: false,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
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
                      type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                      isRequired: true,
                      regex: null,
                    },
                    action: {
                      lookup: undefined,
                    },
                },
                {
                    id: '2',
                    name_en: 'Medical Report Issuing Authority',
                    name_ar: 'الجهة المانحة لشهادة الاجازة المرضية',
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
                        lookup: undefined,
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
                        lookup: 'GET_GENERIC_LOOKUP',
                    },
                },
                {
                    id: '4',
                    name_en: 'Sick Leave Reason',
                    name_ar: 'سبب الاجازة المرضية – نوع المرض',
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
                        lookup: undefined,
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
                        lookup: 'REPLACED_BY',
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
                        lookup: undefined,
                    },
                },
                {
                    id: '7',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 7,
                    validation: {
                        isRequired: false,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
                    },
                },
            ],
        },
        {
            id: '3',
            code: 'BUSINESS MISSION INSIDE UAE',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                      type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                      isRequired: true,
                      regex: null,
                    },
                    action: {
                      lookup: undefined,
                    },
                },
                {
                    id: '2',
                    name_en: 'Mission Objective',
                    name_ar: 'هدف المهمة',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION10',
                    seq: 2,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '3',
                    name_en: 'Providing Food',
                    name_ar: 'توفير المعيشة/ الطعام؟',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION11',
                    seq: 3,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_Yes_No',
                    },
                },
                {
                    id: '4',
                    name_en: 'Providing Accommodation',
                    name_ar: 'توفير الإقامة/ السكن؟',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION12',
                    seq: 4,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_Yes_No',
                    },
                },
                {
                    id: '5',
                    name_en: 'Providing  Transportation',
                    name_ar: 'توفير المواصلات؟',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION13',
                    seq: 5,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_Yes_No',
                    },
                },
                {
                    id: '6',
                    name_en: 'Replaced By',
                    name_ar: 'الموظف البديل',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_REPLACEMENT_PER_ID',
                    seq: 6,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'REPLACED_BY',
                    },
                },
                {
                    id: '7',
                    name_en: 'Comments',
                    name_ar: '',
                    inputType: {
                        type: 'textarea',
                    },
                    api_param: 'I_COMMENTS',
                    seq: 7,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '8',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 8,
                    validation: {
                        isRequired: true,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
                    },
                },
            ],
        },
        {
            id: '4',
            code: 'BUSINESS MISSION OUTSIDE UAE',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                      type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                      isRequired: true,
                      regex: null,
                    },
                    action: {
                      lookup: undefined,
                    },
                },
                {
                    id: '2',
                    name_en: 'Travel Country',
                    name_ar: 'الدولة',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION8',
                    seq: 2,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: 'AE_NATIONALITY',
                    },
                },
                {
                    id: '3',
                    name_en: 'Participant Category',
                    name_ar: 'موفد / رئيس وفد',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION14',
                    seq: 3,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_Travel_Participant_Type',
                    },
                },
                {
                    id: '4',
                    name_en: 'Travel Number',
                    name_ar: 'رقم المهمة',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION4',
                    seq: 4,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '5',
                    name_en: 'Travel Year',
                    name_ar: 'سنة المهمة',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION5',
                    seq: 5,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '6',
                    name_en: 'Travel Type',
                    name_ar: 'نوع المهمة',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION6',
                    seq: 5,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_Travel_Type',
                    },
                },
                {
                    id: '7',
                    name_en: 'Travel Name',
                    name_ar: 'إسم المهمة',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION9',
                    seq: 7,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '8',
                    name_en: 'Travel Objective 1',
                    name_ar: 'هدف المهمة',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION10',
                    seq: 8,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '9',
                    name_en: 'Travel Objective 2',
                    name_ar: 'هدف المهمة',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION15',
                    seq: 9,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '10',
                    name_en: 'Travel Objective 3',
                    name_ar: 'هدف المهمة',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION16',
                    seq: 10,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '11',
                    name_en: 'Are you Travelling alone?',
                    name_ar: '',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION25',
                    seq: 11,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_Yes_No',
                    },
                },
                {
                    id: '12',
                    name_en: 'Replaced By',
                    name_ar: 'الموظف البديل',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_REPLACEMENT_PER_ID',
                    seq: 12,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'REPLACED_BY',
                    },
                },
                {
                    id: '13',
                    name_en: 'Comments',
                    name_ar: '',
                    inputType: {
                        type: 'textarea',
                    },
                    api_param: 'I_COMMENTS',
                    seq: 13,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '14',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 14,
                    validation: {
                        isRequired: false,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
                    },
                },
            ],
        },
        {
            id: '5',
            code: 'COMPANIONSATE FIRST',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '2',
                    name_en: 'Reason',
                    name_ar: '',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_EXIT_PERMIT_REASON',
                    seq: 2,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: 'XXFAHR_EXIT_REASON',
                    },
                },
                {
                    id: '3',
                    name_en: 'Replaced By',
                    name_ar: 'الموظف البديل',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_REPLACEMENT_PER_ID',
                    seq: 3,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'REPLACED_BY',
                    },
                },
                {
                    id: '4',
                    name_en: 'Comments',
                    name_ar: '',
                    inputType: {
                        type: 'textarea',
                    },
                    api_param: 'I_COMMENTS',
                    seq: 4,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '5',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 5,
                    validation: {
                        isRequired: true,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
                    },
                },
            ],
        },
        {
            id: '6',
            code: 'COMPANIONSATE SECOND',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '2',
                    name_en: 'Reason',
                    name_ar: '',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_EXIT_PERMIT_REASON',
                    seq: 2,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: 'XXFAHR_EXIT_REASON',
                    },
                },
                {
                    id: '3',
                    name_en: 'Replaced By',
                    name_ar: 'الموظف البديل',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_REPLACEMENT_PER_ID',
                    seq: 3,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'REPLACED_BY',
                    },
                },
                {
                    id: '4',
                    name_en: 'Comments',
                    name_ar: '',
                    inputType: {
                        type: 'textarea',
                    },
                    api_param: 'I_COMMENTS',
                    seq: 4,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '5',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 5,
                    validation: {
                        isRequired: true,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
                    },
                },
            ],
        },
        {
            id: '7',
            code: 'DO EXAM',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '2',
                    name_en: 'Country of Study',
                    name_ar: '',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_COUNTRY_OF_STUDY',
                    seq: 2,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FND_TERRITORIES',
                    },
                },
                {
                    id: '3',
                    name_en: 'Replaced By',
                    name_ar: 'الموظف البديل',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_REPLACEMENT_PER_ID',
                    seq: 3,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'REPLACED_BY',
                    },
                },
                {
                    id: '4',
                    name_en: 'Comments',
                    name_ar: '',
                    inputType: {
                        type: 'textarea',
                    },
                    api_param: 'I_COMMENTS',
                    seq: 4,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '5',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 5,
                    validation: {
                        isRequired: true,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
                    },
                },
            ],
        },
        {
            id: '8',
            code: 'EXCEPTIONAL FREE',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '2',
                    name_en: 'Reason',
                    name_ar: '',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_EXIT_PERMIT_REASON',
                    seq: 2,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'XXFAHR_EXIT_REASON',
                    },
                },
                {
                    id: '3',
                    name_en: 'Replaced By',
                    name_ar: 'الموظف البديل',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_REPLACEMENT_PER_ID',
                    seq: 3,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'REPLACED_BY',
                    },
                },
                {
                    id: '4',
                    name_en: 'Comments',
                    name_ar: '',
                    inputType: {
                        type: 'textarea',
                    },
                    api_param: 'I_COMMENTS',
                    seq: 4,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '5',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 5,
                    validation: {
                        isRequired: true,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
                    },
                },
            ],
        },
        {
            id: '9',
            code: 'EXCEPTIONAL SICK INSIDE',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '2',
                    name_en: 'Reason',
                    name_ar: '',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_EXIT_PERMIT_REASON',
                    seq: 2,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'XXFAHR_EXIT_REASON',
                    },
                },
                {
                    id: '3',
                    name_en: 'Relationship',
                    name_ar: 'صلة القرابة',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION1',
                    seq: 3,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_CONTACT_REL_DET',
                    },
                },
                {
                    id: '4',
                    name_en: 'Sick Leave Reason',
                    name_ar: 'سبب الاجازة المرضية – نوع المرض',
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
                        lookup: undefined,
                    },
                },
                {
                    id: '5',
                    name_en: 'Medical Report Issuing Authority',
                    name_ar: 'الجهة المانحة لشهادة الاجازة المرضية',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'I_ISSUING_AUTHORITY',
                    seq: 5,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '6',
                    name_en: 'Replaced By',
                    name_ar: 'الموظف البديل',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_REPLACEMENT_PER_ID',
                    seq: 6,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'REPLACED_BY',
                    },
                },
                {
                    id: '7',
                    name_en: 'Comments',
                    name_ar: '',
                    inputType: {
                        type: 'textarea',
                    },
                    api_param: 'I_COMMENTS',
                    seq: 7,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '8',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 8,
                    validation: {
                        isRequired: true,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
                    },
                },
            ],
        },
        {
            id: '10',
            code: 'EXCEPTIONAL SICK OUTSIDE',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '2',
                    name_en: 'Reason',
                    name_ar: '',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_EXIT_PERMIT_REASON',
                    seq: 2,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'XXFAHR_EXIT_REASON',
                    },
                },
                {
                    id: '3',
                    name_en: 'Relationship',
                    name_ar: 'صلة القرابة',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION1',
                    seq: 3,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_CONTACT_REL_DET',
                    },
                },
                {
                    id: '4',
                    name_en: 'Sick Leave Reason',
                    name_ar: 'سبب الاجازة المرضية – نوع المرض',
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
                        lookup: undefined,
                    },
                },
                {
                    id: '5',
                    name_en: 'Medical Report Issuing Authority',
                    name_ar: 'الجهة المانحة لشهادة الاجازة المرضية',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'I_ISSUING_AUTHORITY',
                    seq: 5,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '6',
                    name_en: 'Replaced By',
                    name_ar: 'الموظف البديل',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_REPLACEMENT_PER_ID',
                    seq: 6,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'REPLACED_BY',
                    },
                },
                {
                    id: '7',
                    name_en: 'Comments',
                    name_ar: '',
                    inputType: {
                        type: 'textarea',
                    },
                    api_param: 'I_COMMENTS',
                    seq: 7,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '8',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 8,
                    validation: {
                        isRequired: true,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
                    },
                },
            ],
        },
        {
            id: '11',
            code: 'HAJJ',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
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
                        lookup: 'REPLACED_BY',
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
                        lookup: undefined,
                    },
                },
                {
                    id: '4',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 4,
                    validation: {
                        isRequired: false,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
                    },
                },
            ],
        },
        {
            id: '12',
            code: 'IDDAT',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
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
                        lookup: 'REPLACED_BY',
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
                        lookup: undefined,
                    },
                },
                {
                    id: '4',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 4,
                    validation: {
                        isRequired: false,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
                    },
                },
            ],
        },
        {
            id: '13',
            code: 'UAE NATIONAL SERVICE LEAVE',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
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
                        lookup: 'REPLACED_BY',
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
                        lookup: undefined,
                    },
                },
                {
                    id: '4',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 4,
                    validation: {
                        isRequired: false,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
                    },
                },
            ],
        },
        {
            id: '14',
            code: 'UNPAID',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'range',
                    },
                    api_param: '[I_FROM_DATE,I_TO_DATE]',
                    seq: 1,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
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
                        lookup: 'REPLACED_BY',
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
                        lookup: undefined,
                    },
                },
                {
                    id: '4',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '[{I_FILENAME_1,I_FILE_BLOB_1,I_FILE_TYPE_1,I_FILENAME_2,I_FILE_BLOB_2,I_FILE_TYPE_2,I_FILENAME_3,I_FILE_BLOB_3,I_FILE_TYPE_3}]',
                    seq: 4,
                    validation: {
                        isRequired: false,
                        regex: null,
                        sizeMatch:'2MB',
                    },
                    action: {
                        lookup: undefined,
                    },
                },
            ],
        },
    ],
}