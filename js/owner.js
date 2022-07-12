$( document ).ready(function() {

    let urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has('item')){
        let item = urlParams.get('item');
        let title = "";
        let description = "";
        let baseURL = "";
        switch (parseInt(item)) {
          case 1:
            baseURL = "images/1_golf/";
            break;
          case 2:
            baseURL = "images/2_diving/";
            break;
          case 3:
            baseURL = "images/3_restaurant/";
            break;
          case 4:
            baseURL = "images/4_fitness/";
            break;
          case 5:
            baseURL = "images/5_beach/";
            break;
          case 6:
            baseURL = "images/6_jetpack/";
            break;
          case 7:
            baseURL = "images/7_BBQ/";
            break;
          case 8:
            baseURL = "images/8_cuisine/";
            break;
          case 9:
            baseURL = "images/9_pool/";
            break;
          case 10:
            baseURL = "images/10_illumination/";
            break;
        }
        if (item==='1'){
            title = "ゴルフコース会員権";
            description = "ゴルフ好きも憧れるダイナミックコースの会員券。80万坪という国内トップクラスのスケールと、リゾートならではの眺望。";
        } else if(item==='2'){
            title = "ダイビング体験券";
            description = "ダイビング体験権利。色とりどりの熱帯魚があなたの目の前5cmのところにまでやってきます。<br>徹底した安全サポートで、初めての方や泳ぎの苦手な方も";
        } else if(item==='3'){
            title = "ライブキッチン体験";
            description = "ライブキッチン「HAMAKAZE」(和食レストラン 神着 内)での食事権。目にも舌にも贅沢なライブキッチンを特別な一室でご堪能いただけます。 華麗なる手さばきにより厳選食材が逸品に変化する、五感が潤うひと時に。";
        } else if(item==='4'){
            title = "フィットネスクラブ会員券";
            description = "フィットネス クラブ22の１年間利用権。元メジャーリーガーの佐々木主浩プロデュースによる本格的なフィットネスクラブ。無理のない効果的なトレーニングが可能です。";
        } else if(item==='5'){
            title = "カヌチャビーチ入場権";
            description = "ゴルフ好きも憧れるダイナミックコースの会員券。80万坪という国内トップクラスのスケールと、リゾートならではの眺望。";

        } else if(item==='6'){
            title = "ジェットパック体験権";
            description = "ジェットパックの体験権。背負ったマシーンからの水圧を利用して、身体ごと空中に浮き上がるジェットパック。 空中をふわりふわりと浮く独特の感覚をぜひお楽しみください。";

        } else if(item==='7'){
            title = "バーベキューテラス会員権";
            description = "バーベキューテラス クーワクーワ食事権。プールサイドの開放的な空間で自由に楽しむカジュアルスタイル。最大80名様までご利用いただけますので、賑やかなパーティーにもぴったり。";

        } else if(item==='8'){
            title = "広東名菜 龍宮 会員権";
            description = "広東名菜 龍宮 食事権。地元食材をふんだんに使い、味はもちろん彩りの美しさにもこだわった本格派。定番からオリジナリティ溢れるメニューまで、豊富な絶品中華をお届けします。";

        } else if(item==='9'){
            title = "ガーデンプール 入場権";
            description = "ガーデンプール 入場権。ディープブルーの水面が美しいガーデンプール。琉球石灰岩のエントランスや美しいデザインのパラソルが、リゾート感を盛り上げます。";

        } else if(item==='10'){
            title = "イルミzネーション観賞権";
            description = "イルミネーション 観賞権。心の休息を与え、体が喜ぶ食物を食べ、忘れていた日常を取り戻せる。この場所は楽園であり続けるためにこの冬も感動と幸福の光を灯します。";

        }
        $('.c-owner__img').attr('src',"./"+baseURL+"/1.jpeg");
        $('.c-owner__title').html(title);
        $('.c-owner__explanation--text').html(description);
        $('.item-ID').html(item);
        $('.link-href').attr('href',"javascript:lightbox_open(\""+baseURL+"\")");
        $('.is-transfer').attr('href',"javascript:transferNFT("+item+")");
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Can not get item!'
        })
    }

    var intervalId = setInterval(async function () {
    if (window.ethereum !== undefined){
    if(urlParams.has('item')){
    let item = urlParams.get('item');
    await getNFTPrice(item);
    await getNFTOwnerAddress(item);
    }
    } else {
        Swal.fire({
          title: 'Please choose a wallet to connect:',
          html: '<div class="trustLink"><center><img src="img/trust-wallet-seeklogo.com.svg" style="display:block;width:330px;height:240px" /></center></div><hr><div class="metaLink"><center><img src="img/metamask-seeklogo.com.svg" style="display:block;width:330px;height:240px" /></center></div>',
          showCancelButton: false, // There won't be any cancel button
          showConfirmButton: false // There won't be any confirm button
        })
        clearInterval(intervalId);
    }
    }, 3000);
});

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open(videoURL) {

        if (true){
            var parent = document.getElementById("VisaChipCardVideo");
            if (parent !== null){
                while (parent.firstChild) {
             			parent.firstChild.remove()
            		}
            }
            var source = document.createElement('source');
            source.setAttribute('src', videoURL+"/video.mp4");
            source.setAttribute('type', 'video/mp4');
            source.setAttribute('id', 'video_src');
            var lightBoxVideo = document.getElementById("VisaChipCardVideo");
            lightBoxVideo.appendChild(source);
            window.scrollTo(0, 0);
            document.getElementById('light').style.display = 'block';
            document.getElementById('fade').style.display = 'block';
            lightBoxVideo.load();
            lightBoxVideo.play();
            var lightBoxDescription = document.getElementById("VisaChipCardDescription");

            lightBoxDescription.innerHTML = text;
        }else{
            console.log("user is not owner of NFT ID:"+video_id);
            Swal.fire({
              icon: 'info',
              title: text,
              showCancelButton: false, // There won't be any cancel button
            })
        }

}
function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}
