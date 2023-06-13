import { Schema } from "../createLeave";

export function dynamicFormSchema(code:string){
   const schema: Schema = {
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    name_en: 'Certificate Info',
                    name_ar: '',
                    inputType: {
                        type: 'input',
                    },
                    api_param:
                    'ABS_INFORMATION1',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
                    seq: 8,
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
            id: '15',
            code: 'PARENTAL LEAVE',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'range',
                    },
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    name_en: 'Child FirstName',
                    name_ar: 'الاسم الأول للطفل',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION1',
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
                    name_en: 'Child Family Name',
                    name_ar: 'اسم العائلة للطفل',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION2',
                    seq: 3,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '4',
                    name_en: 'Child Gender',
                    name_ar: 'النوع',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION3',
                    seq: 4,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: 'SEX',
                    },
                },
                {
                    id: '5',
                    name_en: 'Child Birth Date',
                    name_ar: 'تاريخ ميلاد الطفل',
                    inputType: {
                        type: 'date',
                    },
                    api_param: 'ABS_INFORMATION4',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
            id: '16',
            code: 'MATERNITY',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                        type: 'range',
                    },
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    name_en: 'Certificate Info',
                    name_ar: '',
                    inputType: {
                        type: 'input',
                    },
                    api_param:
                    'ABS_INFORMATION1',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
                    seq: 5,
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
            id: '17',
            code: 'SICK COMMITTEE',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                      type: 'range',
                    },
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    name_en: 'Certificate Info',
                    name_ar: '',
                    inputType: {
                        type: 'input',
                    },
                    api_param:
                    'ABS_INFORMATION1',
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
                    seq: 8,
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
            id: '18',
            code: 'STUDY ABROAD',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                      type: 'range',
                    },
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    name_en: 'Training Donated By',
                    name_ar: 'الجهة القائمة بالتبرع',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION1',
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
                    name_en: 'Training Performed By',
                    name_ar: 'الجهة القائمة على التدريب',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION2',
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
                    name_en: 'Reason',
                    name_ar: 'سبب الغياب',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION3',
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
                    name_en: 'Educational Institute',
                    name_ar: 'جهة التعليم',
                    inputType: {
                        type: 'input',
                    },
                    api_param:
                    'ABS_INFORMATION4',
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
                    name_en: 'Qualification',
                    name_ar: 'المؤهل',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION5',
                    seq: 6,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: 'QUALIFICATION_TYPE',
                    },
                },
                {
                    id: '7',
                    name_en: 'Study Duration',
                    name_ar: 'مدة الدراسة',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION6',
                    seq: 7,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '8',
                    name_en: 'Required Language Preparation',
                    name_ar: 'بحاجة للغة تحضيرية؟ ',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION7',
                    seq: 8,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_Yes_No',
                    },
                },
                {
                    id: '9',
                    name_en: 'Country of Study',
                    name_ar: 'الدولة',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_COUNTRY_OF_STUDY',
                    seq: 9,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: 'FND_TERRITORIES',
                    },
                },
                {
                    id: '10',
                    name_en: 'Replaced By',
                    name_ar: 'الموظف البديل',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'I_REPLACEMENT_PER_ID',
                    seq: 8,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'REPLACED_BY',
                    },
                },
                {
                    id: '11',
                    name_en: 'Comments',
                    name_ar: '',
                    inputType: {
                        type: 'textarea',
                    },
                    api_param: 'I_COMMENTS',
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
                    id: '12',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
                    seq: 10,
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
            id: '19',
            code: 'STUDY INSIDE',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                      type: 'range',
                    },
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    name_en: 'Educational Institute',
                    name_ar: 'جهة التعليم',
                    inputType: {
                        type: 'input',
                    },
                    api_param:
                    'ABS_INFORMATION4',
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
                    name_en: 'Qualification',
                    name_ar: 'المؤهل',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION5',
                    seq: 3,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: 'QUALIFICATION_TYPE',
                    },
                },
                {
                    id: '4',
                    name_en: 'Study Duration',
                    name_ar: 'مدة الدراسة',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION6',
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
                    name_en: 'Required Language Preparation',
                    name_ar: 'بحاجة للغة تحضيرية؟ ',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION7',
                    seq: 5,
                    validation: {
                        isRequired: true,
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
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
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
            id: '20',
            code: 'TRAINING REQUEST INSIDE UAE',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                      type: 'range',
                    },
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    name_en: 'Training Course Title',
                    name_ar: 'عنوان الدورة',
                    inputType: {
                        type: 'input',
                    },
                    api_param:
                    'ABS_INFORMATION8',
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
                    name_en: 'Category',
                    name_ar: 'فئة الدورة التدريبية',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION6',
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
                    name_en: 'Training Location',
                    name_ar: 'الجهة المقام بها الدورة',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION12',
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
                    name_en: 'Training Course Year',
                    name_ar: 'سنة الدورة التدريبية',
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
                    name_en: 'Training Course Number',
                    name_ar: 'رقم الدورة التدريبية',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION4',
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
                    name_en: 'Training Course Place',
                    name_ar: 'الدولة المقام بها الدورة',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION15',
                    seq: 7,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'AE_NATIONALITY',
                    },
                },
                {
                    id: '8',
                    name_en: 'Providing Food',
                    name_ar: 'توفير المعيشة/ الطعام؟',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION16',
                    seq: 8,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_Yes_No',
                    },
                },
                {
                    id: '9',
                    name_en: 'Providing Accommodation',
                    name_ar: 'توفير الإقامة/ السكن؟',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION17',
                    seq: 9,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_Yes_No',
                    },
                },
                {
                    id: '10',
                    name_en: 'Providing  Transportation',
                    name_ar: 'توفير المواصلات؟',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION18',
                    seq: 10,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_Yes_No',
                    },
                },
                {
                    id: '11',
                    name_en: 'Comments',
                    name_ar: '',
                    inputType: {
                        type: 'textarea',
                    },
                    api_param: 'I_COMMENTS',
                    seq: 11,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '12',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
                    seq: 12,
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
            id: '21',
            code: 'TRAINING REQUEST OUTSIDE UAE',
            icon: '',
            form_elements: [
                {
                    id: '1',
                    name_en: 'Select Date',
                    name_ar: '',
                    inputType: {
                      type: 'range',
                    },
                    api_param: '["I_FROM_DATE","I_TO_DATE"]',
                    api_param_type: 'Array',
                    api_param_value: '["from","to"]',
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
                    name_en: 'Training Course Title',
                    name_ar: 'عنوان الدورة',
                    inputType: {
                        type: 'input',
                    },
                    api_param:
                    'ABS_INFORMATION8',
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
                    name_en: 'Category',
                    name_ar: 'فئة الدورة التدريبية',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION6',
                    seq: 3,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '4',
                    name_en: 'Type',
                    name_ar: 'نوع الدورة التدريبية',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION7',
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
                    name_en: 'Training Location',
                    name_ar: 'الجهة المقام بها الدورة',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION12',
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
                    name_en: 'Training Course Year',
                    name_ar: 'سنة الدورة التدريبية',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION5',
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
                    name_en: 'Training Course Number',
                    name_ar: 'رقم الدورة التدريبية',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION4',
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
                    id: '7',
                    name_en: 'Training Course Place',
                    name_ar: 'الدولة المقام بها الدورة',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION15',
                    seq: 7,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'AE_NATIONALITY',
                    },
                },
                {
                    id: '8',
                    name_en: 'Training Provider Name',
                    name_ar: '',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION10',
                    seq: 8,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '9',
                    name_en: 'Payer Name',
                    name_ar: '',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION11',
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
                    name_en: 'Amount',
                    name_ar: '',
                    inputType: {
                        type: 'input',
                    },
                    api_param: 'ABS_INFORMATION13',
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
                    name_en: 'Element Confirmation',
                    name_ar: '',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION20',
                    seq: 11,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_Yes_No',
                    },
                },
                {
                    id: '12',
                    name_en: 'Travel Payment Type',
                    name_ar: '',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION16',
                    seq: 12,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_BTR_PAYMENT_TYPE',
                    },
                },
                {
                    id: '13',
                    name_en: 'Job',
                    name_ar: '',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION17',
                    seq: 13,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_BTR_JOBS',
                    },
                },
                {
                    id: '14',
                    name_en: 'Delegation Type',
                    name_ar: '',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION18',
                    seq: 14,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_DELEGATION_TYPE',
                    },
                },
                {
                    id: '15',
                    name_en: 'Are you traveling alone ?',
                    name_ar: '',
                    inputType: {
                        type: 'dropdown',
                    },
                    api_param: 'ABS_INFORMATION25',
                    seq: 15,
                    validation: {
                        isRequired: true,
                        regex: null,
                    },
                    action: {
                        lookup: 'FG_Yes_No',
                    },
                },
                {
                    id: '16',
                    name_en: 'Comments',
                    name_ar: '',
                    inputType: {
                        type: 'textarea',
                    },
                    api_param: 'I_COMMENTS',
                    seq: 16,
                    validation: {
                        isRequired: false,
                        regex: null,
                    },
                    action: {
                        lookup: undefined,
                    },
                },
                {
                    id: '17',
                    name_en: 'Attachment',
                    name_ar: '',
                    inputType: {
                        type: 'fileselect',
                        size: 'filesize',
                        file: 'blob'
                    },
                    api_param:
                    '["I_FILENAME_1","I_FILE_BLOB_1","I_FILE_TYPE_1","I_FILENAME_2","I_FILE_BLOB_2","I_FILE_TYPE_2","I_FILENAME_3","I_FILE_BLOB_3","I_FILE_TYPE_3"]',
                    api_param_type: 'Array',
                    seq: 17,
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
    ],
}
return schema.forms.filter((s) => s.code ==code)[0]
}