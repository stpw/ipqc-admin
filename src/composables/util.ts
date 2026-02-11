import { ElNotification ,ElMessageBox} from 'element-plus'
import nprogress from 'nprogress'

export function toast(message: string, type: 'success' | 'error' = 'success', title: string ,dangerouslyUseHTMLString: boolean = false ) {
    ElNotification({
        title: title,
        message: message,
        type: type,
        dangerouslyUseHTMLString: dangerouslyUseHTMLString,
        duration: 2000
    })
}

export function confirm(message: string, title: string = '',  type: 'warning' | 'error' = 'warning') {
    return ElMessageBox.confirm(message, title, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: type,
    })
}

//显示全屏loding
export function showFullScreenLoading() {

    nprogress.start()
}

//隐藏全屏loding
export function hideFullScreenLoading() {
    nprogress.done()
}