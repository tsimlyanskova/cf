document.addEventListener("DOMContentLoaded", function() {
      var targetVids = document.querySelectorAll("[id^='vid-']");
      var divContent = {
        ai: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/ai.html"></iframe></div>`,
        team: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/team.html"></iframe></div>`,
        axis: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/axis.html"></iframe></div>`,
        abm: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/abm.html"></iframe></div>`,
        speed: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/speed.html"></iframe></div>`,
        rrm: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/rrm.html"></iframe></div>`,
        cta: `
          <div style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/cta.html"></iframe></div>`,
        corptest: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/corptest.html"></iframe></div>`,
        oscar: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/oscar.html"></iframe></div>`,
        nurse: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/nurse.html"></iframe></div>`,
        steve: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/steve.html"></iframe></div>`,
        hubert: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/hubert.html"></iframe></div>`,
        cfdwmn: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/cfdwmn.html"></iframe></div>`,
        bcc: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/bcc.html"></iframe></div>`,
        lisa: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/lisa.html"></iframe></div>`,
        student: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/student.html"></iframe></div>`,
        wallst: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/wallst.html"></iframe></div>`,
        morgan: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/morgan.html"></iframe></div>`,
        albert: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/albert.html"></iframe></div>`,
        oscar1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/oscar.html"></iframe></div>`,
        nurse1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/nurse.html"></iframe></div>`,
        steve1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/steve.html"></iframe></div>`,
        hubert1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/hubert.html"></iframe></div>`,
        cfdwmn1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/cfdwmn.html"></iframe></div>`,
        bcc1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/bcc.html"></iframe></div>`,
        lisa1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/lisa.html"></iframe></div>`,  
        student1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/student.html"></iframe></div>`,
        wallst1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/wallst.html"></iframe></div>`,
        morgan1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/morgan.html"></iframe></div>`,
        albert1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/vm/albert.html"></iframe></div>`  
        
                        
      };

var alreadyReplaced = {}; // Keep track of already replaced elements

      function replaceContent(div, targetVid) {
        targetVid.innerHTML = divContent[div];
        alreadyReplaced[div] = true; // Mark the element as already replaced
      }

      // Intersection Observer to lazy load when elements enter viewport
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var targetVid = entry.target;
            var id = targetVid.id;
            var div = id.replace("vid-", "");

            // Check if the element has not been replaced yet
            if (!alreadyReplaced[div]) {
              replaceContent(div, targetVid);
              observer.unobserve(targetVid);
            }
          }
        });
      }, { threshold: 0 });

      targetVids.forEach(function (targetVid) {
        observer.observe(targetVid);
      });

      // Delayed lazy load after 1 minute
      setTimeout(function() {
        targetVids.forEach(function (targetVid) {
          var id = targetVid.id;
          var div = id.replace("vid-", "");

          // Check if the element has not been replaced yet
          if (!alreadyReplaced[div]) {
            replaceContent(div, targetVid);
            observer.unobserve(targetVid);
          }
        });
      }, 60000); // 60000 milliseconds = 1 minute
    });