import { callBackground, genIssueUrl } from '@@/utils'
import { BugOutlined, LinkOutlined, ReloadOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Spin, Tooltip } from 'antd'

import s from '../chat.module.styl'
const reportIssues = async (e) => {
  // e.preventDefault()
  // const conversationOptions = data?.conversationOptions
  // const url = await genIssueUrl({
  //   engine,
  //   query: prompt,
  //   conversation: conversationOptions
  //     ? '[link](https://sydney.bing.com/sydney/GetConversation?' +
  //       `conversationId=${encodeURIComponent(conversationOptions.session?.conversationId ?? '')}&` +
  //       `source=${encodeURIComponent(conversationOptions.source ?? '')}&` +
  //       `participantId=${encodeURIComponent(conversationOptions.participantId ?? '')}&` +
  //       `conversationSignature=${encodeURIComponent(conversationOptions.session?.conversationSignature ?? '')})`
  //     : undefined
  // })
  // window.open(url)
}

export default () => {
  return (
    <header>
      <img src="../images/bing_48x48.png" />
      <h1>New Bing Anywhere</h1>
      <div className={s.btns}>
        <Tooltip>
          <Button
            icon={<ReloadOutlined />}
            type="ghost"
            onClick={(e) => {
              e.preventDefault()
              // setRefreshDataKey(Date.now())
              // setLoading(true)
              // setSession(undefined)
              // setContent({ text: '', sourceAttributions: [], suggestedResponses: [] })
            }}
            href=""
          />
        </Tooltip>

        <Button
          icon={<SettingOutlined />}
          type="ghost"
          href=""
          onClick={(e) => {
            e.preventDefault()
            // setOpenSettings(true)
          }}
        />
        <Tooltip title="Report a bug or suggestion">
          <Button icon={<BugOutlined />} type="ghost" onClick={reportIssues} href="" />
        </Tooltip>
        <Tooltip title="Open with Bing.com">
          <Button
            icon={<LinkOutlined />}
            type="ghost"
            href={`https://www.bing.com/search?q=${encodeURIComponent(prompt)}&showconv=1`}
            onClick={async (e) => {
              e.preventDefault()
              const url = e.currentTarget.href
              try {
                await callBackground('openUrlInSameTab', [{ url }])
              } catch (e) {
                window.open(url, '_blank')
              }
            }}
          />
        </Tooltip>
      </div>
    </header>
  )
}
