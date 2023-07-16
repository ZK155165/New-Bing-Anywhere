import useConfig from '@/hooks/useConfig'
import { type Scene } from '@@/types'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import s from '../chat.module.styl'
// import Article from './Article'
// import Footer from './Footer'
// import Header from './Header'
// import Settings from './Settings'

export default () => {
  const [config] = useConfig()
  const { scene = 'newtab' } = useParams<{ scene: Scene }>()

  const isPopup = scene === 'popup'

  const [openSettings, setOpenSettings] = useState(false)
  const popupCss = {
    minWidth: 400,
    minHeight: 400,
    borderRadius: 0
  }
  return (
    <>
      1111111
      {/* <Settings
        open={openSettings}
        onCancel={() => {
          setOpenSettings(false)
          setTimeout(() => {
            location.reload()
          }, 100)
        }}
      />
      <div className={[s.wrap, s[config.conversationStyle?.toLowerCase()]].filter(Boolean).join(' ')} style={isPopup ? popupCss : {}}>
        <Header />
      </div>
      <main>
        <hr />
        <Article />
      </main>
      <Footer /> */}
    </>
  )
}
