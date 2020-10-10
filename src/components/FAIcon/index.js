import React from 'react';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faStar as faStarlight } from '@fortawesome/pro-light-svg-icons';
import { faStar as faStarsolid } from '@fortawesome/pro-solid-svg-icons';
import { faAngleRight as faAngleRightSolid } from '@fortawesome/pro-light-svg-icons';
import { faAngleDown as faAngleDownSolid } from '@fortawesome/pro-light-svg-icons';
//import each icon individually
import { faCheckSquare } from '@fortawesome/pro-regular-svg-icons/faCheckSquare';
import { faCopy } from '@fortawesome/pro-regular-svg-icons/faCopy';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { faCoffee } from '@fortawesome/pro-regular-svg-icons/faCoffee';
import { faArrowRight } from '@fortawesome/pro-regular-svg-icons/faArrowRight';
import { faArrowLeft } from '@fortawesome/pro-regular-svg-icons/faArrowLeft';
import { faLongArrowLeft } from '@fortawesome/pro-regular-svg-icons/faLongArrowLeft';
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons/faEnvelope';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons/faChevronRight';
import { faAbacus } from '@fortawesome/pro-regular-svg-icons/faAbacus';
import { faSearch } from '@fortawesome/pro-regular-svg-icons/faSearch';
import { faTimes } from '@fortawesome/pro-regular-svg-icons/faTimes';
import { faCheckCircle } from '@fortawesome/pro-regular-svg-icons/faCheckCircle';
import { faCircle } from '@fortawesome/pro-regular-svg-icons/faCircle';
import { faBolt } from '@fortawesome/pro-regular-svg-icons/faBolt';
import { faAngleLeft } from '@fortawesome/pro-regular-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/pro-regular-svg-icons/faAngleRight';
import { faChevronDoubleLeft } from '@fortawesome/pro-regular-svg-icons/faChevronDoubleLeft';
import { faPlus } from '@fortawesome/pro-regular-svg-icons/faPlus';
import { faPlusSquare } from '@fortawesome/pro-regular-svg-icons/faPlusSquare';
import { faChevronDoubleRight } from '@fortawesome/pro-regular-svg-icons/faChevronDoubleRight';
import { faBars } from '@fortawesome/pro-regular-svg-icons/faBars';
import { faMinus } from '@fortawesome/pro-regular-svg-icons/faMinus';
import { faFileUpload } from '@fortawesome/pro-regular-svg-icons/faFileUpload';
import { faCloudUpload } from '@fortawesome/pro-regular-svg-icons/faCloudUpload';
import { faArrowFromBottom } from '@fortawesome/pro-regular-svg-icons/faArrowFromBottom';
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons/faInfoCircle';
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons/faLongArrowRight';
import { faQuestionCircle } from '@fortawesome/pro-regular-svg-icons/faQuestionCircle';
import { faUpload } from '@fortawesome/pro-regular-svg-icons/faUpload';
import { faGripLinesVertical } from '@fortawesome/pro-regular-svg-icons/faGripLinesVertical';
import { faGripVertical } from '@fortawesome/pro-regular-svg-icons/faGripVertical';
import { faSignOut } from '@fortawesome/pro-regular-svg-icons/faSignOut';
import { faUserCircle } from '@fortawesome/pro-regular-svg-icons/faUserCircle';
import { faArrowToBottom } from '@fortawesome/pro-regular-svg-icons/faArrowToBottom';
import { faExclamationCircle } from '@fortawesome/pro-regular-svg-icons/faExclamationCircle';
import { faChevronLeft } from '@fortawesome/pro-regular-svg-icons/faChevronLeft';
import { faEllipsisH } from '@fortawesome/pro-regular-svg-icons/faEllipsisH';
import { faUndo } from '@fortawesome/pro-regular-svg-icons/faUndo';
import { faThumbsDown } from '@fortawesome/pro-regular-svg-icons/faThumbsDown';
import { faThumbsUp } from '@fortawesome/pro-regular-svg-icons/faThumbsUp';
import { faTrash } from '@fortawesome/pro-regular-svg-icons/faTrash';
import { faPencil } from '@fortawesome/pro-regular-svg-icons/faPencil';
import { faLock } from '@fortawesome/pro-regular-svg-icons/faLock';
import { faLink } from '@fortawesome/pro-regular-svg-icons/faLink';
import { faDownload } from '@fortawesome/pro-regular-svg-icons/faDownload';
import { faRepeat } from '@fortawesome/pro-regular-svg-icons/faRepeat';
import { faRedo } from '@fortawesome/pro-regular-svg-icons/faRedo';
import { faStickyNote } from '@fortawesome/pro-regular-svg-icons/faStickyNote';
import { faArrowDown } from '@fortawesome/pro-regular-svg-icons/faArrowDown';
import { faAngleUp } from '@fortawesome/pro-regular-svg-icons/faAngleUp';
import { faAngleDown } from '@fortawesome/pro-regular-svg-icons/faAngleDown';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons/faChevronDown';
import { faBriefcase } from '@fortawesome/pro-regular-svg-icons/faBriefcase';
import { faEllipsisV } from '@fortawesome/pro-regular-svg-icons/faEllipsisV';
import { faPaperclip } from '@fortawesome/pro-regular-svg-icons/faPaperclip';
import { faFilter } from '@fortawesome/pro-regular-svg-icons/faFilter';
import { faFileAlt } from '@fortawesome/pro-regular-svg-icons/faFileAlt';
import { faFileWord } from '@fortawesome/pro-regular-svg-icons/faFileWord';
import { faFilePdf } from '@fortawesome/pro-regular-svg-icons/faFilePdf';
import { faClipboard } from '@fortawesome/pro-regular-svg-icons/faClipboard';
import { faPause } from '@fortawesome/pro-regular-svg-icons/faPause';
import { faArrowsV } from '@fortawesome/pro-regular-svg-icons/faArrowsV';
import { faSmile } from '@fortawesome/pro-regular-svg-icons/faSmile';
import { faStar } from '@fortawesome/pro-regular-svg-icons/faStar';
import { faFrown } from '@fortawesome/pro-regular-svg-icons/faFrown';
import { faDoNotEnter } from '@fortawesome/pro-regular-svg-icons/faDoNotEnter';
import { faSave } from '@fortawesome/pro-regular-svg-icons/faSave';
import { faChevronUp } from '@fortawesome/pro-regular-svg-icons/faChevronUp';
import { faExternalLink } from '@fortawesome/pro-regular-svg-icons/faExternalLink';
import { faBan } from '@fortawesome/pro-regular-svg-icons/faBan';
import { faTimesCircle } from '@fortawesome/pro-regular-svg-icons/faTimesCircle';
import { faWindowClose } from '@fortawesome/pro-regular-svg-icons/faWindowClose';
import { faUserMdChat } from '@fortawesome/pro-regular-svg-icons/faUserMdChat';
import { faHandPaper } from '@fortawesome/pro-regular-svg-icons/faHandPaper';
import { faBold } from '@fortawesome/pro-regular-svg-icons/faBold';
import { faItalic } from '@fortawesome/pro-regular-svg-icons/faItalic';
import { faCode } from '@fortawesome/pro-regular-svg-icons/faCode';
import { faUnderline } from '@fortawesome/pro-regular-svg-icons/faUnderline';
import { faListUl } from '@fortawesome/pro-regular-svg-icons/faListUl';
import { faListOl } from '@fortawesome/pro-regular-svg-icons/faListOl';
import { faQuoteRight } from '@fortawesome/pro-regular-svg-icons/faQuoteRight';
import { faCodeCommit } from '@fortawesome/pro-regular-svg-icons/faCodeCommit';
import { faBell } from '@fortawesome/pro-regular-svg-icons/faBell';
import { faH1 } from '@fortawesome/pro-regular-svg-icons/faH1';
import { faH2 } from '@fortawesome/pro-regular-svg-icons/faH2';
import { faH3 } from '@fortawesome/pro-regular-svg-icons/faH3';
import { faH4 } from '@fortawesome/pro-regular-svg-icons/faH4';
import { faPlay } from '@fortawesome/pro-regular-svg-icons/faPlay';
import { faDotCircle } from '@fortawesome/pro-regular-svg-icons/faDotCircle';
import { faGlobe } from '@fortawesome/pro-regular-svg-icons/faGlobe';

//brand icons
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-relative-parent-imports
import * as theme from '../../../styles/theme.js';

library.add(
  faCheckSquare,
  faPlusSquare,
  faCheck,
  faCoffee,
  faArrowRight,
  faArrowLeft,
  faArrowDown,
  faLongArrowLeft,
  faEnvelope,
  faChevronRight,
  faAbacus,
  faSearch,
  faTimes,
  faCheckCircle,
  faCircle,
  faBolt,
  faAngleLeft,
  faAngleRight,
  faChevronDoubleLeft,
  faPlus,
  faPlusSquare,
  faChevronDoubleRight,
  faBars,
  faMinus,
  faFileUpload,
  faCloudUpload,
  faArrowFromBottom,
  faArrowToBottom,
  faInfoCircle,
  faLongArrowRight,
  faUserCircle,
  faSignOut,
  faGripLinesVertical,
  faGripVertical,
  faUpload,
  faQuestionCircle,
  faLink,
  faLock,
  faPencil,
  faTrash,
  faThumbsDown,
  faThumbsUp,
  faUndo,
  faEllipsisH,
  faChevronLeft,
  faExclamationCircle,
  faDownload,
  faRepeat,
  faRedo,
  faStickyNote,
  faArrowDown,
  faAngleDown,
  faAngleUp,
  faChevronDown,
  faBriefcase,
  faEllipsisV,
  faPaperclip,
  faFilter,
  faFileAlt,
  faFileWord,
  faFilePdf,
  faClipboard,
  faPause,
  faPlay,
  faArrowsV,
  faSmile,
  faStar,
  faFrown,
  faDoNotEnter,
  faSave,
  faChevronUp,
  faExternalLink,
  faTwitter,
  faFacebook,
  faLinkedin,
  faBan,
  faTimesCircle,
  faWindowClose,
  faUserMdChat,
  faHandPaper,
  faCodeCommit,
  faCopy,
  faBold,
  faItalic,
  faUnderline,
  faCode,
  faListOl,
  faListUl,
  faQuoteRight,
  faBell,
  faH1,
  faH2,
  faH3,
  faH4,
  faStarlight,
  faStarsolid,
  faAngleRightSolid,
  faAngleDownSolid,
  faAngleUp,
  faDotCircle,
  faGlobe
);
dom.watch();

const getColor = color => {
  if (!color) return 'inherit';
  switch (color) {
    case 'red':
      return theme.colors.red;
    case 'green':
      return theme.colors.green;
    case 'blue':
      return theme.colors.defaultblue;
    case 'externalblue':
      return theme.colors.blue;
    case 'orange':
      return theme.colors.orange;
    case 'yellow':
      return theme.colors.yellow;
    case 'white':
      return theme.colors.white;
    case 'dark':
      return theme.fontColor.dark;
    case 'grey':
      return theme.fontColor.light;
    case 'lightgrey':
      return theme.fontColor.veryLight;
    default:
      return color;
  }
};

const FAIcon = ({
  className = '',
  name,
  size = '1x',
  color = 'inherit',
  cursor = 'inherit',
  fixedWidth = false,
  type = 'far',
  ...rest
}) => {
  let newColor = getColor(color);
  return (
    <FontAwesomeIcon
      icon={[type, name]}
      color={newColor}
      size={size}
      className={className}
      fixedWidth={fixedWidth}
    />
  );
};

export default FAIcon;
