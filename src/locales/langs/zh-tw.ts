import zhTW from './zh-tw.json';

const local: App.I18n.Schema = {
  system: {
    title: 'Soybean 管理系統',
    updateTitle: '系統版本更新通知',
    updateContent: '偵測到系統有新版本發布，是否立即重新整理頁面？',
    updateConfirm: '立即重新整理',
    updateCancel: '稍後再說'
  },
  common: {
    action: '操作',
    add: '新增',
    addSuccess: '新增成功',
    backToHome: '返回首頁',
    batchDelete: '批次刪除',
    cancel: '取消',
    close: '關閉',
    check: '勾選',
    selectAll: '全選',
    expandColumn: '展開列',
    columnSetting: '列設定',
    config: '設定',
    confirm: '確認',
    delete: '刪除',
    deleteSuccess: '刪除成功',
    confirmDelete: '確認刪除嗎？',
    edit: '編輯',
    warning: '警告',
    error: '錯誤',
    index: '序號',
    keywordSearch: '請輸入關鍵字搜尋',
    logout: '登出',
    logoutConfirm: '確認登出嗎？',
    lookForward: '敬請期待',
    modify: '修改',
    modifySuccess: '修改成功',
    noData: '無資料',
    operate: '操作',
    pleaseCheckValue: '請檢查輸入的值是否合法',
    refresh: '重新整理',
    reset: '重置',
    search: '搜尋',
    switch: '切換',
    tip: '提示',
    trigger: '觸發',
    update: '更新',
    updateSuccess: '更新成功',
    userCenter: '個人中心',
    yesOrNo: {
      yes: '是',
      no: '否'
    }
  },
  request: {
    logout: '請求失敗後登出使用者',
    logoutMsg: '使用者狀態失效，請重新登入',
    logoutWithModal: '請求失敗後彈出對話框再登出使用者',
    logoutWithModalMsg: '使用者狀態失效，請重新登入',
    refreshToken: '請求的Token已過期，重新整理Token',
    tokenExpired: 'Token已過期'
  },
  theme: {
    themeDrawerTitle: '主題設定',
    tabs: {
      appearance: '外觀',
      layout: '佈局',
      general: '通用',
      preset: '預設'
    },
    appearance: {
      themeSchema: {
        title: '主題模式',
        light: '亮色模式',
        dark: '暗黑模式',
        auto: '跟隨系統'
      },
      grayscale: '灰色模式',
      colourWeakness: '色弱模式',
      themeColor: {
        title: '主題顏色',
        primary: '主色',
        info: '資訊色',
        success: '成功色',
        warning: '警告色',
        error: '錯誤色',
        followPrimary: '跟隨主色'
      },
      themeRadius: {
        title: '主題圓角'
      },
      recommendColor: '應用推薦演算法的顏色',
      recommendColorDesc: '推薦顏色的演算法參照',
      preset: {
        title: '主題預設',
        apply: '應用',
        applySuccess: '預設應用成功',
        default: {
          name: '預設預設',
          desc: 'Soybean 預設主題預設'
        },
        dark: {
          name: '暗色預設',
          desc: '適用於夜間使用的暗色主題預設'
        },
        compact: {
          name: '緊湊型',
          desc: '適用於小螢幕的緊湊佈局預設'
        },
        azir: {
          name: 'Azir的預設',
          desc: '是 Azir 比較喜歡的莫蘭迪色系冷淡風'
        }
      }
    },
    layout: {
      layoutMode: {
        title: '佈局模式',
        vertical: '左側選單模式',
        'vertical-mix': '左側選單混合模式',
        'vertical-hybrid-header-first': '左側混合-頂部優先',
        horizontal: '頂部選單模式',
        'top-hybrid-sidebar-first': '頂部混合-側邊優先',
        'top-hybrid-header-first': '頂部混合-頂部優先',
        vertical_detail: '左側選單佈局，選單在左，內容在右。',
        'vertical-mix_detail': '左側雙選單佈局，一級選單在左側深色區域，二級選單在左側淺色區域。',
        'vertical-hybrid-header-first_detail':
          '左側混合佈局，一級選單在頂部，二級選單在左側深色區域，三級選單在左側淺色區域。',
        horizontal_detail: '頂部選單佈局，選單在頂部，內容在下方。',
        'top-hybrid-sidebar-first_detail': '頂部混合佈局，一級選單在左側，二級選單在頂部。',
        'top-hybrid-header-first_detail': '頂部混合佈局，一級選單在頂部，二級選單在左側。'
      },
      tab: {
        title: '標籤欄設定',
        visible: '顯示標籤欄',
        cache: '標籤欄資訊快取',
        cacheTip: '一鍵開啟/關閉全域 keepalive',
        height: '標籤欄高度',
        mode: {
          title: '標籤欄風格',
          slider: '滑塊風格',
          chrome: '谷歌風格',
          button: '按鈕風格'
        },
        closeByMiddleClick: '滑鼠中鍵關閉標籤頁',
        closeByMiddleClickTip: '啟用後可以使用滑鼠中鍵點擊標籤頁進行關閉'
      },
      header: {
        title: '頭部設定',
        height: '頭部高度',
        breadcrumb: {
          visible: '顯示麵包屑',
          showIcon: '顯示麵包屑圖示'
        }
      },
      sider: {
        title: '側邊欄設定',
        inverted: '深色側邊欄',
        width: '側邊欄寬度',
        collapsedWidth: '側邊欄摺疊寬度',
        mixWidth: '混合佈局側邊欄寬度',
        mixCollapsedWidth: '混合佈局側邊欄摺疊寬度',
        mixChildMenuWidth: '混合佈局子選單寬度',
        autoSelectFirstMenu: '自動選擇第一個子選單',
        autoSelectFirstMenuTip: '點擊一級選單時，自動選擇並導航到第一個子選單的最深層級'
      },
      footer: {
        title: '底部設定',
        visible: '顯示底部',
        fixed: '固定底部',
        height: '底部高度',
        right: '底部居右'
      },
      content: {
        title: '內容區域設定',
        scrollMode: {
          title: '滾動模式',
          tip: '主題滾動僅 main 部分滾動，外層滾動可攜帶頭部底部一起滾動',
          wrapper: '外層滾動',
          content: '主體滾動'
        },
        page: {
          animate: '頁面切換動畫',
          mode: {
            title: '頁面切換動畫類型',
            'fade-slide': '滑動',
            fade: '淡入淡出',
            'fade-bottom': '底部消退',
            'fade-scale': '縮放消退',
            'zoom-fade': '漸變',
            'zoom-out': '閃現',
            none: '無'
          }
        },
        fixedHeaderAndTab: '固定頭部和標籤欄'
      }
    },
    general: {
      title: '通用設定',
      watermark: {
        title: '水印設定',
        visible: '顯示全螢幕水印',
        text: '自定義水印文字',
        enableUserName: '啟用使用者名稱水印',
        enableTime: '顯示當前時間',
        timeFormat: '時間格式'
      },
      multilingual: {
        title: '多語言設定',
        visible: '顯示多語言按鈕'
      },
      globalSearch: {
        title: '全域搜尋設定',
        visible: '顯示全域搜尋按鈕'
      }
    },
    configOperation: {
      copyConfig: '複製設定',
      copySuccessMsg: '複製成功，請替換 src/theme/settings.ts 中的變數 themeSettings',
      resetConfig: '重置設定',
      resetSuccessMsg: '重置成功'
    }
  },
  route: {
    login: '登入',
    403: '無權限',
    404: '頁面不存在',
    500: '伺服器錯誤',
    'cloudwallet-login': 'CloudWallet 登入',
    'iframe-page': '外連頁面',
    home: '首頁'
  },
  page: {
    login: {
      common: {
        loginOrRegister: '登入 / 註冊',
        userNamePlaceholder: '請輸入使用者名稱',
        phonePlaceholder: '請輸入手機號碼',
        codePlaceholder: '請輸入驗證碼',
        passwordPlaceholder: '請輸入密碼',
        confirmPasswordPlaceholder: '請再次輸入密碼',
        codeLogin: '驗證碼登入',
        confirm: '確定',
        back: '返回',
        validateSuccess: '驗證成功',
        loginSuccess: '登入成功',
        welcomeBack: '歡迎回來，{userName} ！'
      },
      pwdLogin: {
        title: '密碼登入',
        rememberMe: '記住我',
        forgetPassword: '忘記密碼？',
        register: '註冊帳號',
        otherAccountLogin: '其他帳號登入',
        otherLoginMode: '其他登入方式',
        superAdmin: '超級管理員',
        admin: '管理員',
        user: '一般使用者'
      },
      codeLogin: {
        title: '驗證碼登入',
        getCode: '取得驗證碼',
        reGetCode: '{time}秒後重新取得',
        sendCodeSuccess: '驗證碼發送成功',
        imageCodePlaceholder: '請輸入圖片驗證碼'
      },
      register: {
        title: '註冊帳號',
        agreement: '我已經仔細閱讀並接受',
        protocol: '《使用者協議》',
        policy: '《隱私權政策》'
      },
      resetPwd: {
        title: '重置密碼'
      },
      bindWeChat: {
        title: '綁定微信'
      }
    },
    home: {
      branchDesc:
        '為了方便大家開發和更新合併，我們對main分支的程式碼進行了精簡，只保留了首頁選單，其餘內容已移至example分支進行維護。預覽地址顯示的內容即為example分支的內容。',
      greeting: '早安，{userName}, 今天又是充滿活力的一天!',
      weatherDesc: '今日多雲轉晴，20℃ - 25℃!',
      projectCount: '專案數',
      todo: '待辦',
      message: '訊息',
      downloadCount: '下載量',
      registerCount: '註冊量',
      schedule: '作息安排',
      study: '學習',
      work: '工作',
      rest: '休息',
      entertainment: '娛樂',
      visitCount: '訪問量',
      turnover: '成交額',
      dealCount: '成交量',
      projectNews: {
        title: '專案動態',
        moreNews: '更多動態',
        desc1: 'Soybean 在2021年5月28日建立了開源專案 soybean-admin!',
        desc2: 'Yanbowe 向 soybean-admin 提交了一個bug，多標籤欄不會自適應。',
        desc3: 'Soybean 準備為 soybean-admin 的釋出做充分的準備工作!',
        desc4: 'Soybean 正在忙於為soybean-admin寫專案說明文件！',
        desc5: 'Soybean 剛才把工作臺頁面隨便寫了一些，湊合能看了！'
      },
      creativity: '創意'
    }
  },
  form: {
    required: '不能為空',
    userName: {
      required: '請輸入使用者名稱',
      invalid: '使用者名稱格式不正確'
    },
    phone: {
      required: '請輸入手機號碼',
      invalid: '手機號碼格式不正確'
    },
    pwd: {
      required: '請輸入密碼',
      invalid: '密碼格式不正確，6-18位字元，包含字母、數字、下劃線'
    },
    confirmPwd: {
      required: '請輸入確認密碼',
      invalid: '兩次輸入密碼不一致'
    },
    code: {
      required: '請輸入驗證碼',
      invalid: '驗證碼格式不正確'
    },
    email: {
      required: '請輸入電子郵件',
      invalid: '電子郵件格式不正確'
    }
  },
  dropdown: {
    closeCurrent: '關閉',
    closeOther: '關閉其它',
    closeLeft: '關閉左側',
    closeRight: '關閉右側',
    closeAll: '關閉所有',
    pin: '固定標籤',
    unpin: '取消固定'
  },
  icon: {
    themeConfig: '主題設定',
    themeSchema: '主題模式',
    lang: '切換語言',
    fullscreen: '全螢幕',
    fullscreenExit: '離開全螢幕',
    reload: '重新整理頁面',
    collapse: '摺疊選單',
    expand: '展開選單',
    pin: '固定',
    unpin: '取消固定'
  },
  datatable: {
    itemCount: '共 {total} 條',
    fixed: {
      left: '左固定',
      right: '右固定',
      unFixed: '取消固定'
    }
  }
};

export default {
  ...local,
  ...zhTW
};
