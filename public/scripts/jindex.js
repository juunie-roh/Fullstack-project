function imgShow(imgIndex){
  $('.main_banner>div').hide();
  $('.main_banner>div').eq(imgIndex).fadeIn();
} 

let imgIndex = 0; 
setInterval(()=>{
  imgIndex++;
  imgShow(imgIndex);
  if ( imgIndex>=$('.main_banner>div').length-1)
  imgIndex=0;
}, 3000)

function tabShow(liIndex){
    $('.contents>div').hide();
    $('.contents>div').eq(liIndex).show();
}
tabShow(0); // 0탭이 클릭된 상태처럼 초기화

$('.tab-container .btns li').on('click', function(){
  //  function 함수 사용하세요.
    const liIndex = $(this).index(); 
    tabShow(liIndex);
})

$(window).on('scroll', function(){
    const st = $(this).scrollTop();
    console.log(st)
    const section01Top = $('#section01').offset().top;
    // getClientRect() :  
    if( st > section01Top){
      $('header').addClass('active');
    }else{ 
      $('header').removeClass('active');
    }
})