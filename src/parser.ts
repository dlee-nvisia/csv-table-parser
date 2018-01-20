import { FixedOptions, Options, AnyObject } from './interface'

import { convertCsvToArray } from './array'
import { convertCsvToObject } from './object'
import { trimUnnecessaryElement } from './shape'

const DefaultOptions: FixedOptions = {
	separator: ',',
	keys: [],
	type: 'object',
	trim: true,
	convertNumber: true,
	convertBoolean: true,
	defaultValue: '',
	ignoreRow: {
		lackElements: true
	},
	startRow: 0,
	startColumn: 0
}

export const createOptions = (options: Options): FixedOptions => {
	return { ...DefaultOptions, ...options }
}

export const parser = (tsvString: string, options: Options = {}): AnyObject | any[][] => {
	const fixedOptions = createOptions(options)
	const rows = trimUnnecessaryElement(tsvString.split('\n'), fixedOptions.startRow)
	return fixedOptions.type === 'object'
		? convertCsvToObject(rows, fixedOptions)
		: convertCsvToArray(rows, fixedOptions)
}

export default parser
