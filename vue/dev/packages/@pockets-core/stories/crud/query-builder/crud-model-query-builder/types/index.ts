export interface props {
  /**
    Class to apply to editor instance
  */
  class?: string
  modelValue: object
  /**
    Only text mode is supported
  */
  mode?: "text"
  /**
    
  */
  navigationBar?: boolean
  askToFormat?: boolean
  content?: {
    text?: string
  }
  ajvOptions?: {
    useDefaults?: 'empty'
    allowUnionTypes?: boolean
    allowMatchingProperties?: boolean
    allErrors: boolean
    verbose: boolean
    $data: boolean
  }
  onChange?: ( content: unknown ) => void
  onRenderMenu?: ( menuitems: unknown ) => void
  validator?: ( ...args: any ) => void
}
