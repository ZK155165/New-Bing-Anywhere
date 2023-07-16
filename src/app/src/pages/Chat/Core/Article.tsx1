import useConfig from '@/hooks/useConfig'
import { Button, Spin, Tooltip } from 'antd'
import React, { useState } from 'react'
import s from '../chat.module.styl'
import Markdown from './Markdown'

export default () => {
  const [config] = useConfig()
  const [error, setError] = useState()
  const [loading, setLoading] = useState()
  const content = {
    text: 'Loading...',
    sourceAttributions: []
  }
  return (
    <article>
      <div className={s.cont}>
        {(() => {
          const DoChat = () => (
            <Button
              type="primary"
              style={{
                width: '100%',
                height: 50
              }}
              onClick={() => {
                // setNeedFecth(Date.now().toString())
              }}
            >
              点击加载
            </Button>
          )
          if (loading) {
            return (
              <div className={s.loading}>
                <Spin size="small" delay={300} />
              </div>
            )
          }
          if (error) {
            // if (error.message) {
            //   return <>{error.message}</>
            // }
            return (
              <>
                <p>
                  <span style={{ color: 'red' }}>Error</span>: There seem to be some errors{' '}
                  {error ? (
                    <>
                      :<span style={{ color: 'red', fontSize: 12 }}>{(error.message as string) ?? error.toString()} </span>
                    </>
                  ) : (
                    ''
                  )}
                </p>
                <p>You can try the following methods to fix them:</p>
                <ul>
                  <li>
                    If you are using browsers like <em>Brave</em>, please make sure you have allowed third-party cookies for the domain
                    `*.google.com`.
                  </li>

                  <li>
                    Make sure you have successfully logged in to your Microsoft account on{' '}
                    <a href="https://www.bing.com" target="_blank" rel="nofollow noopener noreferrer">
                      Bing.com
                    </a>
                    .
                  </li>

                  <li>
                    There might be a Network Error, if you are from a country or region that does not support the New Bing Chat. You may
                    need to configure a network proxy correctly. Refer to{' '}
                    <a href="https://github.com/haozi/New-Bing-Anywhere/issues/8" target="_blank" rel="nofollow noopener noreferrer">
                      {' <'}Configure the Network Proxy{'>'}
                    </a>{' '}
                    for more information.
                  </li>
                  <li>Click the force refresh button in the top right corner and try again.</li>
                  <li>
                    If it remains unresolved, please{' '}
                    <a href="https://github.com/haozi/New-Bing-Anywhere/issues" onClick={reportIssues}>
                      submit an issue
                    </a>{' '}
                    to us.
                  </li>
                </ul>
              </>
            )
          }
          // console.log(content.text, config.triggerMode)
          if (config.triggerMode === 'Manually') {
            return <DoChat />
          } else if (config.triggerMode === 'Questionmark') {
            if (content.text) {
              return <Markdown children={content.text} />
            } else {
              return <DoChat />
            }
          } else if (config.triggerMode === 'Always') {
            if (content.text) {
              return <Markdown children={content.text} />
            }
          }

          return null
        })()}

        {!loading && content.sourceAttributions.length > 0 && (
          <>
            <hr />
            <ul className={s.sourceAttributions}>
              {content.sourceAttributions.map(
                (item, i) =>
                  item.providerDisplayName &&
                  item.seeMoreUrl && (
                    <li key={i}>
                      <a href={item.seeMoreUrl} target="_blank" title={item.providerDisplayName} rel="nofollow noopener noreferrer">
                        {item.providerDisplayName}
                      </a>
                    </li>
                  )
              )}
            </ul>
          </>
        )}
      </div>
    </article>
  )
}
