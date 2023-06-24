import * as Bing from './_bing'

export interface Extra {
  bingSession?: Bing.Session
  // if need reload the data
  needRefresh?: boolean
}

const enum ReadyState {
  'notInitialized' = 0,
  'processing' = 1,
  'ready' = 2,
  'ping' = 6
}
export interface CorePageData {
  content: {
    type: ReadyState
    text: string
  }
  links: {
    list: Array<{
      title: string
    }>
  }
  searchSuggestions: {
    list: Array<{
      title: string
    }>
  }
}
export { Bing }

export type Scene = 'newtab' | 'popup' | 'iframe' | undefined
