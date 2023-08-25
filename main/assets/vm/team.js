$('.lazy').Lazy({
  team: function(element) {
    element.html('<div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://cf-ad6.pages.dev/vm/team"></iframe></div></div>');
    element.load();
  }
});
