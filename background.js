
//只有打开百度才展示图标
chrome.runtime.onInstalled.addListener(function(){
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions:[
                    new chrome.declarativeContent.PageStateMatcher({pageUrl:{urlContains:'baidu.com'}})
                ],
                actions:[new chrome.declarativeContent.showPageAction()]
            }
        ])
    })
})
//添加右键百度搜索
chrome.contextMenus.create({
    title:"使用度娘搜索：%s", //%s表示选中的文字
    contexts:['selection'], //只有当选中文字时才会出现此右键菜单
    onclick:function(params){
        //打开一个新标签进行百度搜索，注意不能用location.href，因为此方法是属于background里的window对象
        chrome.tabs.create({url:'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)})
    },
    documentUrlPatterns: 'https://*.baidu.com/*' // 只在某些页面显示此右键菜单
}).

//桌面通知
chrome.notifications.create(null,{
    type:'basic',
    iconUrl:'img/icon.png',
    title:'这是标题',
    message:'您刚刚点击了自定义右键菜单'
})