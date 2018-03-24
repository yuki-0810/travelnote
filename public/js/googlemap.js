var markerData = new Array();
var markerPosArray = new Array();
var pinPlace =[];
var markerMemo = new Array()

$(function() {
    $("#datepicker").datepicker();
});

var contentString = '<div class="panel-body">'+
                        '<div class="form-group">'+
                            '<label>都市名</label><input id="cityName" type="text" class="form-control">'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<label>日付</label><input type="text" id="datepicker" class="form-control">'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<label>旅の思い出</label><textarea id="travelMemo" class="form-control"></textarea>'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<label>食事</label>'+
                            '<div data-toggle="buttons">'+
                                '<label class="btn btn-default active form-check-label">'+
                                    '<input class="form-check-input" type="radio" checked autocomplete="off"> ☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆☆☆'+
                                '</label>'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<label>物価</label>'+
                            '<div data-toggle="buttons">'+
                                '<label class="btn btn-default active form-check-label">'+
                                    '<input class="form-check-input" type="radio" checked autocomplete="off"> ☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆☆☆'+
                                '</label>'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<label>観光地充実度</label>'+
                            '<div data-toggle="buttons">'+
                                '<label class="btn btn-default active form-check-label">'+
                                    '<input class="form-check-input" type="radio" checked autocomplete="off"> ☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆☆☆'+
                                '</label>'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<label>治安</label>'+
                            '<div data-toggle="buttons">'+
                                '<label class="btn btn-default active form-check-label">'+
                                    '<input class="form-check-input" type="radio" checked autocomplete="off"> ☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆☆☆'+
                                '</label>'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<label>興奮・目新しさ</label>'+
                            '<div data-toggle="buttons">'+
                                '<label class="btn btn-default active form-check-label">'+
                                    '<input class="form-check-input" type="radio" checked autocomplete="off"> ☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆☆'+
                                '</label>'+
                                '<label class="btn btn-default form-check-label">'+
                                    '<input class="form-check-input" type="radio" autocomplete="off">☆☆☆☆☆'+
                                '</label>'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<input id="save" type="submit" class="btn btn-success" value="保存" onClick="saveData()">'+
                        '</div>'+
                    '</div>';

function initMap() {
    // マーカーを立てる場所名・緯度・経度・メモ

    var initPlace = {lat: 35.363, lng: 141.044};
    
    //マップオブジェクト
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: initPlace
        });

    map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
    });

    //google.maps.event.removeListener(marker);
}


//マーカーの設置と座標取得
function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title:"test"
    });
    
    //経度と緯度をそれぞれ分けて配列に格納
    pinPlace[0] = marker.position.lat();
    pinPlace[1] = marker.position.lng();    
    
    //ピンごとの経度緯度を格納
    markerPosArray.push(pinPlace);
    
    //経度緯度の場所に画面移動
    map.panTo(latLng);
    
    //マーカーに入力フォームを表示
    setForm(marker, map);
}

//マーカーにメモ追加
function setForm(marker, map){
    
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  infowindow.open(map, marker);
}

function saveData(markerPosArray, markerData){
    var memo = document.getElementById("travelMemo").value;

    
    //ajaxでのcsrfトークン送信
    $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
    });

    //テキストの入力値を取得する。
    var cityName = "test";
    cityName = $("#cityName").val();
 
    //アップロードファイルの入力値を取得する。
    //var fileData = document.getElementById("file").files[0];
 
    //フォームデータを作成する。(送信するデータ)
    var form = new FormData();

    //フォームデータにテキストの内容、アップロードファイルの内容を格納する。
    form.append( "cityName", cityName );
    //form.append( "file", fileData );
    

    //ポスト送信する。
    $.ajax({
        type: 'post',
        url: '/savedata',
        data: form,
        processData : false,
        contentType : false,
        

        //Controller側でフォーム入力値をデータベースに保存し、
        //成功の場合、以下を行う。
        success: function(data){
            alert('Ajax成功・javaScriptでリロードします。');
            location.href = "http://ece0fd449314480e80a44162a3e9c645.vfs.cloud9.us-east-2.amazonaws.com/";
        },
        
        //失敗の場合、以下を行う。
        error : function(){
            alert('通信ができない状態です。');
        }

    });
}
