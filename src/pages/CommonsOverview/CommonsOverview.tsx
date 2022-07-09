import './styles.scss'

import { FC, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  AppButton,
  Collapse,
  CollapseRef,
  ErrorMessage,
  Icon,
  Loader,
  Modal,
  NoDataMessage,
} from '@/common'
import { ICON_NAMES } from '@/enums'

const CommonsOverview: FC = () => {
  const { t } = useTranslation()

  const collapseRef = useRef<CollapseRef>(null)
  const [isModalShown, setIsModalShown] = useState(false)

  return (
    <div className='commons-overview'>
      <div className='commons-overview__row'>
        <div className='commons-overview__col'>
          <ErrorMessage message={t('commons-overview.loading-error-msg')} />
        </div>
        <div className='commons-overview__col'>
          <NoDataMessage message={t('commons-overview.no-data-msg')} />
        </div>
        <div className='commons-overview__col'>
          <Loader />
        </div>
      </div>
      <div className='commons-overview__row'>
        <div className='commons-overview__col'>
          <Collapse
            className='commons-overview__collapse'
            ref={collapseRef}
            head={
              <AppButton
                className='commons-overview__collapse-btn'
                schemes='flat'
                text={t('commons-overview.collapse-btn')}
                onClick={() => collapseRef.current?.toggleCollapse()}
              />
            }
            body={
              <div className='commons-overview__collapse-body'>
                {t('commons-overview.collapse-text')}
              </div>
            }
          />
        </div>
        <div className='commons-overview__col'>
          <AppButton
            text={t('commons-overview.modal-btn')}
            onClick={() => setIsModalShown(true)}
          />
          <Modal isShown={isModalShown} setIsShown={setIsModalShown}>
            <AppButton iconName={ICON_NAMES.xCircle} />
          </Modal>
        </div>
      </div>
      <div className='commons-overview__row'>
        <div className='commons-overview__col commons-overview__icons-wrp'>
          <div className='commons-overview__icons'>
            <Icon name={ICON_NAMES.academicCap} />
            <Icon name={ICON_NAMES.adjustments} />
            <Icon name={ICON_NAMES.annotation} />
            <Icon name={ICON_NAMES.archive} />
            <Icon name={ICON_NAMES.arrowCircleDown} />
            <Icon name={ICON_NAMES.arrowCircleLeft} />
            <Icon name={ICON_NAMES.arrowCircleRight} />
            <Icon name={ICON_NAMES.arrowCircleUp} />
            <Icon name={ICON_NAMES.arrowDown} />
            <Icon name={ICON_NAMES.arrowLeft} />
            <Icon name={ICON_NAMES.arrowNarrowDown} />
            <Icon name={ICON_NAMES.arrowNarrowLeft} />
            <Icon name={ICON_NAMES.arrowNarrowRight} />
            <Icon name={ICON_NAMES.arrowNarrowUp} />
            <Icon name={ICON_NAMES.arrowRight} />
            <Icon name={ICON_NAMES.arrowSmDown} />
            <Icon name={ICON_NAMES.arrowSmLeft} />
            <Icon name={ICON_NAMES.arrowSmRight} />
            <Icon name={ICON_NAMES.arrowSmUp} />
            <Icon name={ICON_NAMES.arrowUp} />
            <Icon name={ICON_NAMES.arrowsExpand} />
            <Icon name={ICON_NAMES.atSymbol} />
            <Icon name={ICON_NAMES.backspace} />
            <Icon name={ICON_NAMES.badgeCheck} />
            <Icon name={ICON_NAMES.ban} />
            <Icon name={ICON_NAMES.beaker} />
            <Icon name={ICON_NAMES.bell} />
            <Icon name={ICON_NAMES.bookOpen} />
            <Icon name={ICON_NAMES.bookmarkAlt} />
            <Icon name={ICON_NAMES.bookmark} />
            <Icon name={ICON_NAMES.briefcase} />
            <Icon name={ICON_NAMES.cake} />
            <Icon name={ICON_NAMES.calculator} />
            <Icon name={ICON_NAMES.calendar} />
            <Icon name={ICON_NAMES.camera} />
            <Icon name={ICON_NAMES.cash} />
            <Icon name={ICON_NAMES.chartBar} />
            <Icon name={ICON_NAMES.chartPie} />
            <Icon name={ICON_NAMES.chartSquareBar} />
            <Icon name={ICON_NAMES.chatAlt2} />
            <Icon name={ICON_NAMES.chatAlt} />
            <Icon name={ICON_NAMES.chat} />
            <Icon name={ICON_NAMES.checkCircle} />
            <Icon name={ICON_NAMES.check} />
            <Icon name={ICON_NAMES.chevronDoubleDown} />
            <Icon name={ICON_NAMES.chevronDoubleLeft} />
            <Icon name={ICON_NAMES.chevronDoubleRight} />
            <Icon name={ICON_NAMES.chevronDoubleUp} />
            <Icon name={ICON_NAMES.chevronDown} />
            <Icon name={ICON_NAMES.chevronLeft} />
            <Icon name={ICON_NAMES.chevronRight} />
            <Icon name={ICON_NAMES.chevronUp} />
            <Icon name={ICON_NAMES.chip} />
            <Icon name={ICON_NAMES.clipboardCheck} />
            <Icon name={ICON_NAMES.clipboardCopy} />
            <Icon name={ICON_NAMES.clipboardList} />
            <Icon name={ICON_NAMES.clipboard} />
            <Icon name={ICON_NAMES.clock} />
            <Icon name={ICON_NAMES.cloudDownload} />
            <Icon name={ICON_NAMES.cloudUpload} />
            <Icon name={ICON_NAMES.cloud} />
            <Icon name={ICON_NAMES.code} />
            <Icon name={ICON_NAMES.cog} />
            <Icon name={ICON_NAMES.collection} />
            <Icon name={ICON_NAMES.colorSwatch} />
            <Icon name={ICON_NAMES.creditCard} />
            <Icon name={ICON_NAMES.cubeTransparent} />
            <Icon name={ICON_NAMES.cube} />
            <Icon name={ICON_NAMES.currencyBangladeshi} />
            <Icon name={ICON_NAMES.currencyDollar} />
            <Icon name={ICON_NAMES.currencyEuro} />
            <Icon name={ICON_NAMES.currencyPound} />
            <Icon name={ICON_NAMES.currencyRupee} />
            <Icon name={ICON_NAMES.currencyYen} />
            <Icon name={ICON_NAMES.cursorClick} />
            <Icon name={ICON_NAMES.database} />
            <Icon name={ICON_NAMES.desktopComputer} />
            <Icon name={ICON_NAMES.deviceMobile} />
            <Icon name={ICON_NAMES.deviceTablet} />
            <Icon name={ICON_NAMES.documentAdd} />
            <Icon name={ICON_NAMES.documentDownload} />
            <Icon name={ICON_NAMES.documentDuplicate} />
            <Icon name={ICON_NAMES.documentRemove} />
            <Icon name={ICON_NAMES.documentReport} />
            <Icon name={ICON_NAMES.documentSearch} />
            <Icon name={ICON_NAMES.documentText} />
            <Icon name={ICON_NAMES.document} />
            <Icon name={ICON_NAMES.dotsCircleHorizontal} />
            <Icon name={ICON_NAMES.dotsHorizontal} />
            <Icon name={ICON_NAMES.dotsVertical} />
            <Icon name={ICON_NAMES.download} />
            <Icon name={ICON_NAMES.duplicate} />
            <Icon name={ICON_NAMES.emojiHappy} />
            <Icon name={ICON_NAMES.emojiSad} />
            <Icon name={ICON_NAMES.exclamationCircle} />
            <Icon name={ICON_NAMES.exclamation} />
            <Icon name={ICON_NAMES.externalLink} />
            <Icon name={ICON_NAMES.eyeOff} />
            <Icon name={ICON_NAMES.eye} />
            <Icon name={ICON_NAMES.fastForward} />
            <Icon name={ICON_NAMES.film} />
            <Icon name={ICON_NAMES.filter} />
            <Icon name={ICON_NAMES.fingerPrint} />
            <Icon name={ICON_NAMES.fire} />
            <Icon name={ICON_NAMES.flag} />
            <Icon name={ICON_NAMES.folderAdd} />
            <Icon name={ICON_NAMES.folderDownload} />
            <Icon name={ICON_NAMES.folderOpen} />
            <Icon name={ICON_NAMES.folderRemove} />
            <Icon name={ICON_NAMES.folder} />
            <Icon name={ICON_NAMES.gift} />
            <Icon name={ICON_NAMES.globeAlt} />
            <Icon name={ICON_NAMES.globe} />
            <Icon name={ICON_NAMES.hand} />
            <Icon name={ICON_NAMES.hashtag} />
            <Icon name={ICON_NAMES.heart} />
            <Icon name={ICON_NAMES.home} />
            <Icon name={ICON_NAMES.identification} />
            <Icon name={ICON_NAMES.inboxIn} />
            <Icon name={ICON_NAMES.inbox} />
            <Icon name={ICON_NAMES.informationCircle} />
            <Icon name={ICON_NAMES.key} />
            <Icon name={ICON_NAMES.library} />
            <Icon name={ICON_NAMES.lightBulb} />
            <Icon name={ICON_NAMES.lightningBolt} />
            <Icon name={ICON_NAMES.link} />
            <Icon name={ICON_NAMES.locationMarker} />
            <Icon name={ICON_NAMES.lockClosed} />
            <Icon name={ICON_NAMES.lockOpen} />
            <Icon name={ICON_NAMES.login} />
            <Icon name={ICON_NAMES.logout} />
            <Icon name={ICON_NAMES.mailOpen} />
            <Icon name={ICON_NAMES.mail} />
            <Icon name={ICON_NAMES.map} />
            <Icon name={ICON_NAMES.menuAlt1} />
            <Icon name={ICON_NAMES.menuAlt2} />
            <Icon name={ICON_NAMES.menuAlt3} />
            <Icon name={ICON_NAMES.menuAlt4} />
            <Icon name={ICON_NAMES.menu} />
            <Icon name={ICON_NAMES.microphone} />
            <Icon name={ICON_NAMES.minusCircle} />
            <Icon name={ICON_NAMES.minusSm} />
            <Icon name={ICON_NAMES.minus} />
            <Icon name={ICON_NAMES.moon} />
            <Icon name={ICON_NAMES.musicNote} />
            <Icon name={ICON_NAMES.newspaper} />
            <Icon name={ICON_NAMES.officeBuilding} />
            <Icon name={ICON_NAMES.paperAirplane} />
            <Icon name={ICON_NAMES.paperClip} />
            <Icon name={ICON_NAMES.pause} />
            <Icon name={ICON_NAMES.pencilAlt} />
            <Icon name={ICON_NAMES.pencil} />
            <Icon name={ICON_NAMES.phoneIncoming} />
            <Icon name={ICON_NAMES.phoneMissedCall} />
            <Icon name={ICON_NAMES.phoneOutgoing} />
            <Icon name={ICON_NAMES.phone} />
            <Icon name={ICON_NAMES.photograph} />
            <Icon name={ICON_NAMES.play} />
            <Icon name={ICON_NAMES.plusCircle} />
            <Icon name={ICON_NAMES.plusSm} />
            <Icon name={ICON_NAMES.plus} />
            <Icon name={ICON_NAMES.presentationChartBar} />
            <Icon name={ICON_NAMES.presentationChartLine} />
            <Icon name={ICON_NAMES.printer} />
            <Icon name={ICON_NAMES.puzzle} />
            <Icon name={ICON_NAMES.qrcode} />
            <Icon name={ICON_NAMES.questionMarkCircle} />
            <Icon name={ICON_NAMES.receiptRefund} />
            <Icon name={ICON_NAMES.receiptTax} />
            <Icon name={ICON_NAMES.refresh} />
            <Icon name={ICON_NAMES.reply} />
            <Icon name={ICON_NAMES.rewind} />
            <Icon name={ICON_NAMES.rss} />
            <Icon name={ICON_NAMES.saveAs} />
            <Icon name={ICON_NAMES.save} />
            <Icon name={ICON_NAMES.scale} />
            <Icon name={ICON_NAMES.scissors} />
            <Icon name={ICON_NAMES.searchCircle} />
            <Icon name={ICON_NAMES.search} />
            <Icon name={ICON_NAMES.selector} />
            <Icon name={ICON_NAMES.server} />
            <Icon name={ICON_NAMES.share} />
            <Icon name={ICON_NAMES.shieldCheck} />
            <Icon name={ICON_NAMES.shieldExclamation} />
            <Icon name={ICON_NAMES.shoppingBag} />
            <Icon name={ICON_NAMES.shoppingCart} />
            <Icon name={ICON_NAMES.sortAscending} />
            <Icon name={ICON_NAMES.sortDescending} />
            <Icon name={ICON_NAMES.sparkles} />
            <Icon name={ICON_NAMES.speakerphone} />
            <Icon name={ICON_NAMES.star} />
            <Icon name={ICON_NAMES.statusOffline} />
            <Icon name={ICON_NAMES.statusOnline} />
            <Icon name={ICON_NAMES.stop} />
            <Icon name={ICON_NAMES.sun} />
            <Icon name={ICON_NAMES.support} />
            <Icon name={ICON_NAMES.switchHorizontal} />
            <Icon name={ICON_NAMES.switchVertical} />
            <Icon name={ICON_NAMES.table} />
            <Icon name={ICON_NAMES.tag} />
            <Icon name={ICON_NAMES.template} />
            <Icon name={ICON_NAMES.terminal} />
            <Icon name={ICON_NAMES.thumbDown} />
            <Icon name={ICON_NAMES.thumbUp} />
            <Icon name={ICON_NAMES.ticket} />
            <Icon name={ICON_NAMES.translate} />
            <Icon name={ICON_NAMES.trash} />
            <Icon name={ICON_NAMES.trendingDown} />
            <Icon name={ICON_NAMES.trendingUp} />
            <Icon name={ICON_NAMES.truck} />
            <Icon name={ICON_NAMES.upload} />
            <Icon name={ICON_NAMES.userAdd} />
            <Icon name={ICON_NAMES.userCircle} />
            <Icon name={ICON_NAMES.userGroup} />
            <Icon name={ICON_NAMES.userRemove} />
            <Icon name={ICON_NAMES.user} />
            <Icon name={ICON_NAMES.users} />
            <Icon name={ICON_NAMES.variable} />
            <Icon name={ICON_NAMES.videoCamera} />
            <Icon name={ICON_NAMES.viewBoards} />
            <Icon name={ICON_NAMES.viewGridAdd} />
            <Icon name={ICON_NAMES.viewGrid} />
            <Icon name={ICON_NAMES.viewList} />
            <Icon name={ICON_NAMES.volumeOff} />
            <Icon name={ICON_NAMES.volumeUp} />
            <Icon name={ICON_NAMES.wifi} />
            <Icon name={ICON_NAMES.xCircle} />
            <Icon name={ICON_NAMES.x} />
            <Icon name={ICON_NAMES.zoomIn} />
            <Icon name={ICON_NAMES.zoomOut} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonsOverview
