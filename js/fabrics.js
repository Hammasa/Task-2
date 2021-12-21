// Background page
let _width , _height;
let c = new fabric.Canvas('c');

$('.thumb').on('click', function(){
     let color = $(this).css('background-color');
    let canvas = new fabric.Canvas('c');


    let rect = new fabric.Rect({
        left: 0,
        top: 0,
        fill: color,
        width: canvas.width,
        height: canvas.height
      });
      canvas.add(rect);
});

$('.download-btn').click(function(){
    $('.download-btn').attr('href',$('#c')[0].toDataURL({
        format: 'png',
        quality: 1
    }))
})

/*Text*/
$('#text-done').on('click',function(){
    c = new fabric.Canvas('c');
    let heading = $('.heading1').val();
    let subheading = '\r\n'+$('.heading2').val();
    let para = '\r\n\r\n'+$('.para').val();
    let  headingSize = $('#size').val();
    
    let _heading = new fabric.Text(heading, { left: 100, top: 10, textAlign:'center',fontSize:headingSize });
    let _subheading = new fabric.Text(subheading, { left: 100, top: 10, textAlign:'center', fontSize:20 });
    let _para = new fabric.Text(para, { left: 100, top: 10, textAlign:'center', fontSize:16 });
    c.add(_heading,_subheading,_para);
})


/* Images */
function imageToCavas(img){
    var imgToCv = new fabric.Image(img, {
      left: 10,
      top: 10
    });
    c.add(imgToCv);
}