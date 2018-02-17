import { FixedOptions, Options, AnyObject } from './interface'
export declare const createOptions: (options: Options) => FixedOptions
export declare const parser: (tsvString: string, options?: Options) => AnyObject | any[][]
export default parser
