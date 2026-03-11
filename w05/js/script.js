$("#preamble-btn-1").click(function(){
  })
  
  
    $("#preamble-btn-1").hover(function(){
        $("#preamble-btn-1").toggleClass("rotate")
})


$("#bleb").click(function(){
    $("#menu").toggleClass("active")
  })

$(".album-thumbs").flickity({
  freeScroll: true,
  contain: true,
  // disable previous & next buttons and dots
  prevNextButtons: false,
  pageDots: false
})
