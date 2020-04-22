/* 文档统一管理 */

import * as common from './commonDocs'
import * as feedback from './feedbackDocs'
import * as dataDisplay from './dataDisplayDocs'
import * as dataEntry from './dataEntryDocs'

export default { ...common, ...feedback, ...dataDisplay, ...dataEntry }
