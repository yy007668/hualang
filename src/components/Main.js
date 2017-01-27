require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


// 获取图片相关数据
var imageDatas = require('../data/imageDatas.json');

// 利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
  for (var i = 0, j = imageDatasArr.length; i < j; i++) {
    var singleImageData = imageDatasArr[i];

    singleImageData.imageUrl = require('../images/' + singleImageData.fileName);

    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);



var AppComponent = React.createClass({
  render: function() {
    return (
      <section className="stage">
          <section className="img-sec">
          </section>
          <nav className="controller-nav">
          </nav>
        </section>
    );
  }
})

AppComponent.defaultProps = {};

export default AppComponent;
