import { SEARCH } from './types'

export const handler_search = (content) => {
    return {
        type: SEARCH.UPDATE,
        content: content
    }
}