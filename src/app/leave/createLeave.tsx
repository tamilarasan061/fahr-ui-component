export interface FormElement {
    id: string
    name_en: string
    name_ar: string
    inputType: {
      type: string
      size?: string
      file?: 'blob' | string
    }
    api_param: string
    api_param_value?: string
    api_param_type?: string
    seq: number
    validation: {
      isRequired: boolean
      regex: null | RegExp
      sizeMatch?: string
    }
    action: {
      lookup: string | undefined
    }
  }
  
  export interface Form {
    id: string
    code: string
    icon: string
    form_elements: FormElement[]
  }
  
  export interface Schema {
    forms: Form[]
  }
  
  export interface Option {
    key: string
    label: string
  }