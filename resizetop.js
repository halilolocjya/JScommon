var $ = window.jQuery = require('jquery');
var h;


function resizeTopBlock() {
    var $headWrapper = $('#headWrapper'),$mainImgBlock=$('#mainImgBlock'),
        $topRight=$('.js_rightWrap'),$leftWrap=$('#leftWrap'),$topRightTwo=$('.block_wrap'),$mainImg=$("#mainImg"),$iconItem=$('.js_imgItem'),$abilityItem=$('.js_abilityItem'),$areaItem=$('.js_areaItem');
    var docEl = document.documentElement;
    /**
     * 页面缩放标准：
     * 顶部：
     * 右侧定宽 320px 右侧底部按钮 定高720px
     * 左侧：面包屑 定高=padding+height+margin（20+14+30）；底部产品详情=margin+linheight（37+37+18）
     * 其余部分全部自适应  全屏
     */
    $mainImg.on('load', function () {
        resizeRightHeight()
    });
    function resizeRightHeight() {
        var winWid=docEl.clientWidth,winHeight=docEl.clientHeight;
        // var h1 = $headWrapper.height();
        // if(winWid<1280){
        //     winWid=1280;
        // }
        var h1 = winHeight-2;//顶部区域的高度=窗口的高度-2px底部线
        $headWrapper.find('.js_headBlock').css({
            'height': h1,
            'width':winWid,
            'margin':'0 auto'

        });
        $topRight.css('height', h1);//右边区域的总高度
        //每一块的高度
        var h2=(h1-72-2-2)/2;//右边每个小方块=总高度-按钮高度-2px底部线-2px 底部线
        $topRightTwo.css({
            'height':h2,
            'line-height': h2+'px'
        });

        var w1=winWid-320-2-2;//左边宽度=窗口宽度-右边定宽320 -2
        $leftWrap.css('width', w1);//右边区域的总高度

        var h3=h1-20-14-30-92;//图片区域的高度=顶部高度-面包屑高度-margin-padding-底部产品详情的高度
        $mainImgBlock.css({
            'height':h3,
            'line-height': h3+'px'
        });
        var icon_h=(h1-81-2-4)/3;//外观定制：每一个备选图标所在区域高度=top高度-border*3-选择框高度
        $iconItem.css({
            'height':icon_h,
            'line-height': icon_h+'px'
        });

        var area_choose_h=(h1-81-2-2)/2;//功能定制选择框高度
        $('.js_abilityItem,.js_areaItem').css({
            'height':area_choose_h,
            'line-height': area_choose_h+'px'
        });
        imgFitable(w1,h3,$mainImg);
    }
    resizeRightHeight()
}

/**
 * 图片自适应
 * @param blockWidth 宽度左侧
 * @param blockHeight 高度图片区域
 * @param $img
 */
function imgFitable(blockWidth,blockHeight,$img){
    var w=$img.width(),h=$img.height();

    if(w==0 || h == 0){
        return;
    }
    //w==h
    $img.css({
        'width':blockHeight,
        'height':blockHeight,
    });  
    // if(w>h){
    //     // jinxian 1:1比例
    //     $img.css({
    //         'width':'auto',
    //     });
    //     if(h>blockHeight){
    //         $img.css({
    //             'height':blockHeight,
    //         });
    //     }else{
    //         $img.css({
    //             'height':h,
    //         });
    //     }
    //
    // }else{
    //     if(w>blockWidth){
    //         $img.css({
    //             'width':blockWidth,
    //             'height':'auto',
    //         });
    //     }else{
    //
    //         $img.css({
    //             'width':w,
    //             'height':'auto',
    //         });
    //     }
    //
    //
    //
    // }
    

}
function resizeTop() {

    window.addEventListener('resize', function () {
        clearTimeout(h);
        h = setTimeout(resizeTopBlock, 300);
    }, false);
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(h);
            h = setTimeout(resizeTopBlock, 300);
        }
    }, false);

    resizeTopBlock();

}


module.exports = {
    resizeTop:resizeTop,
    resizeTopBlock:resizeTopBlock
}