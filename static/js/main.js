

$(document).ready(function () {

        });

        //feed 는 메인 화면에 들어갈 post를 받아서 뿌리는 역할입니다
         function feed() {
            $.ajax({
                type: 'GET',
                url: '/api/feed',
                data: {},
                success: function (response) {

                }
            })

             //여기다가 포스트 html 을 foreach
        }