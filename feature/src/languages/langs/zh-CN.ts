export default {
  'zh-CN': {
    feature: {
      market: {
        title: '插件市场',
        search: '搜索插件',
        searchResult: '搜索结果',
        explore: '探索',
        efficiency: '效率',
        searchTool: '搜索工具',
        imageTool: '图像',
        developTool: '开发者',
        systemTool: '系统',
        finder: {
          recommended: '推荐',
          lastUpdated: '最近更新',
        },
        install: '安装',
      },
      installed: {
        title: '已安装',
        tips1: '暂无任何插件',
        tips2: '去插件市场选择安装合适的插件吧！',
        developer: '开发者',
        unknown: '未知',
        remove: '移除',
        functionKey: '功能关键字',
        detailInfo: '详情介绍',
        addToPanel: '点击+号，固定关键词到超级面板',
        removeFromPanel: '点击-号，从超级面板移除关键词',
      },
      settings: {
        title: '账户和设置',
        account: {
          accountInfo: '账户信息',
          tips1: 'rubick 用户',
          tips2: '软件偏好设置完成后需重启软件，头像和昵称请前往小程序设置',
          themeColor: '主题色设置',
          primaryColor: '主色调',
          errorColor: '错误色',
          warningColor: '警告色',
          successColor: '成功色',
          infoColor: '提醒色',
          personalized: '用户个性化设置',
          greeting: '主搜索框欢迎语',
          logo: '界面 logo',
          replace: '点我替换',
          reset: '恢复默认设置',
        },
        basic: {
          title: '基本设置',
          shortcutKey: '快捷键',
          showOrHiddle: '显示/隐藏快捷键',
          screenCapture: '截屏',
          common: '通用',
          autoPaste: '输入框自动粘贴',
          autoBoot: '开机启动',
          spaceExec: '空格执行',
          on: '开',
          off: '关',
          theme: '主题',
          darkMode: '暗黑模式',
          language: '语言',
          changeLang: '切换语言',
          cn: '简体中文',
          en: 'English',
        },
        global: {
          title: '全局快捷键',
          instructions: '说明及示例',
          tips: '按下快捷键，自动搜索对应关键字，当关键字结果完全匹配，且结果唯一时，会直接指向该功能。',
          example: '示例',
          example1: '快捷键 「 Alt + W」 关键字 「 微信」',
          tips1: '按下Alt + W 直接打开本地微信应用',
          example2: '快捷键 「 Ctrl + Alt + A」 关键字 「 截屏」',
          tips2: '按下 Ctrl + Alt + A 进行截屏',
          shortcutKey: '快捷键',
          funtionKey: '功能关键字',
          addShortcutKey: '新增全局快捷功能',
          addShortcutKeyTips:
            '先按功能键（Ctrl、Shift、{optionKeyName}），再按其他普通键。或按 F1-F12 单键。',
        },
        superPanel: {
          title: '超级面板设置',
          tips: '请选择需要添加到超级面板中的常用插件',
          add: '添加',
          remove: '移除',
        },
        intranet: {
          title: '内网部署配置',
          tips: '把插件发布到公网 npm 如果不符合您的公司安全要求，rubick 支持内网私有源和私有插件库，如果您需要内网部署使用，可以自行配置以下规则。',
          npmMirror: 'npm 源',
          dbUrl: 'database url',
          accessToken: 'access token',
          placeholder: '内网gitlab仓库必填',
        },
        localstart: {
          title: '本地启动',
        },
        database: {
          title: '多端数据同步',
        },
      },
      dev: {
        title: '开发者',
        tips: 'rubick 插件系统依托于 npm 管理，本地调试需要先在本地插件当前目录执行 npm link',
        pluginName: '插件名称',
        install: '安装',
        refreshPlugins: '刷新插件',
        installSuccess: '{pluginName}安装成功！',
        refreshSuccess: '{pluginName}刷新成功！',
      },
    },
  },
};
