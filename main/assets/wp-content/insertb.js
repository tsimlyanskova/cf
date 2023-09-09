document.addEventListener("DOMContentLoaded", function() {
      var targetVids = document.querySelectorAll("[id^='vid-']");
      var divContent = {
        ai: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/a5554a02-f5e7-43ef-8be8-e2c1cf9342f5?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        team: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/a79dab89-223e-4d01-a3d0-d6b4e73c4382?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        axis: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/1c5d757a-1c97-4d00-af25-8b1d3543daa2?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        abm: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/c13c3444-1677-4ae1-b2ea-557708f4f2a5?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        speed: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/b4726506-0249-4a3f-80bb-492e176101bd?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        rrm: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/b4726506-0249-4a3f-80bb-492e176101bd?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        cta: `
          <div style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/29666397-6001-4f4f-aa6e-3c7f309215e8?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        corptest: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/ab5235d4-4ab6-4953-b983-856c97c55a9e?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        oscar: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/fffb52e1-09ff-41e6-bbfa-14d9b51f8933?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        nurse: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/e03e2701-2bdb-41ba-97b7-c2fded47015d?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        steve: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/c57be8d8-edcd-4dff-a4e8-6526fac28267?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        hubert: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/a89055d0-8ae2-4d1e-8bb2-2ebd5875f231?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        cfdwmn: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/50f95207-ca4d-4e3c-bd05-10ffa9282bd3?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        bcc: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/25bb268a-9ca1-4f18-9d56-82a82cb166f4?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        lisa: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/9757276b-f305-4843-a1fe-13264fc2ffeb?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        student: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/691bab19-1b17-4c7c-9a11-d51ebe39ce1c?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        wallst: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/f902d926-7aad-49bd-9214-549d34153651?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        morgan: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/4e14b918-b917-40b2-a926-5196f47e47fe?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        albert: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/c6176f50-84df-4562-a2e3-5c4ad98bb9d6?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        oscar1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/fffb52e1-09ff-41e6-bbfa-14d9b51f8933?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        nurse1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/e03e2701-2bdb-41ba-97b7-c2fded47015d?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        steve1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/c57be8d8-edcd-4dff-a4e8-6526fac28267?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        hubert1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/a89055d0-8ae2-4d1e-8bb2-2ebd5875f231?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        cfdwmn1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/50f95207-ca4d-4e3c-bd05-10ffa9282bd3?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        bcc1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/25bb268a-9ca1-4f18-9d56-82a82cb166f4?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        lisa1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/9757276b-f305-4843-a1fe-13264fc2ffeb?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,  
        student1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/691bab19-1b17-4c7c-9a11-d51ebe39ce1c?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        wallst1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/f902d926-7aad-49bd-9214-549d34153651?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        morgan1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/4e14b918-b917-40b2-a926-5196f47e47fe?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`,
        albert1: `
          <div class="thrv_responsive_video thrv_wrapper tcb-lazy-load rv_style_lifted_style2 tve-droppable" style="position:relative;padding-top:56.25%;"><iframe loading="lazy" style="border:none;position:absolute;top:0;left:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true" class="" src="https://iframe.mediadelivery.net/embed/153931/c6176f50-84df-4562-a2e3-5c4ad98bb9d6?autoplay=false&loop=false&muted=false&preload=false"></iframe></div>`  
        
                        
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