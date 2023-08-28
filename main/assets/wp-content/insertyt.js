document.addEventListener("DOMContentLoaded", function() {
      var targetVids = document.querySelectorAll("[id^='vid-']");
      var divContent = {
        ai: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/ai.html"></iframe></div>`,
        team: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/team.html"></iframe></div>`,
        axis: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/axis.html"></iframe></div>`,
        abm: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/abm.html"></iframe></div>`,
        speed: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/speed.html"></iframe></div>`,
        rrm: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/rrm.html"></iframe></div>`,
        cta: `
          <div style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/cta.html"></iframe></div>`,
        corptest: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/corptest.html"></iframe></div>`,
        oscar: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/oscar.html"></iframe></div>`,
        nurse: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/nurse.html"></iframe></div>`,
        steve: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/steve.html"></iframe></div>`,
        hubert: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/hubert.html"></iframe></div>`,
        cfdwmn: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/cfdwmn.html"></iframe></div>`,
        bcc: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/bcc.html"></iframe></div>`,
        lisa: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/lisa.html"></iframe></div>`,
        student: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/student.html"></iframe></div>`,
        wallst: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/wallst.html"></iframe></div>`,
        morgan: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/morgan.html"></iframe></div>`,
        albert: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/albert.html"></iframe></div>`,
        oscar1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/oscar.html"></iframe></div>`,
        nurse1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/nurse.html"></iframe></div>`,
        steve1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/steve.html"></iframe></div>`,
        hubert1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/hubert.html"></iframe></div>`,
        cfdwmn1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/cfdwmn.html"></iframe></div>`,
        bcc1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/bcc.html"></iframe></div>`,
        lisa1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/lisa.html"></iframe></div>`,  
        student1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/student.html"></iframe></div>`,
        wallst1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/wallst.html"></iframe></div>`,
        morgan1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/morgan.html"></iframe></div>`,
        albert1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="assets/yt/albert.html"></iframe></div>`  
        
                        
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