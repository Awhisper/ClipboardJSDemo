var Clipboard = require('xxxxx clipboard.js')

//对'.btn'的class添加clipboard监听事件
//当该按钮被点击，会触发Clipboard的onSuccess
//触发说明已经写入成功

function setupClipboard(){
    //配置动态剪切板
    var cbobject = new Clipboard('.btn');
    cbobject.on('success', function(e) {
        // console.info('Action:', e.action);
        // console.info('Text:', e.text);
        // console.info('Trigger:', e.trigger);
        // console.info('已写入剪切板:'+e.text);
        e.clearSelection();
    });

    cbobject.on('error', function(e) {
        // console.error('Action:', e.action);
        // console.error('Trigger:', e.trigger);
    });
}

//配置js剪切板
setupClipboard();
//配置点击事件
$('.btn').on('click', click);
//写入要复制的内容数据
$('.btn').attr('data-clipboard-text', '我被写进剪切板啦字符串');

function click(){
    // anything you want
}
