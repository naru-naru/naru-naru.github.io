　
jQuery(function($){

 
  //コンテンツを囲む要素をidで指定
  var container = document.querySelector('.gallery__list');
 
  //すべての画像を読み込み終わった後に関数を実行
  imagesLoaded(container, function () {
    var msnry = new Masonry(container, {
      itemSelector: '.gallery__list__item', //コンテンツのclass名
      isFitWidth: true, //コンテナの親要素のサイズに基づいて、コンテンツのカラムを自動調節します。
      columnWidth: 330, //カラムの幅を設定
    });
  });
});
  