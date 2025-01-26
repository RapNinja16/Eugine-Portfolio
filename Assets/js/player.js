document.addEventListener("DOMContentLoaded", () => {
    const videoWrappers = document.querySelectorAll(".video-wrapper");
  
    videoWrappers.forEach((wrapper) => {
      const video = wrapper.querySelector("video");
      const playButton = wrapper.querySelector(".play-button");
      const timeline = wrapper.querySelector(".timeline");
  
      video.addEventListener("click", () => {
        if (video.paused) {
          video.play();
          playButton.classList.add("hide");

          
        } else {
          video.pause();
    
          playButton.classList.remove("hide");
        }
      });
  
      
      playButton.addEventListener("click", () => {
        if (video.paused) {
          video.play();
          playButton.classList.add("hide");
           
            document.querySelectorAll(".video").forEach((otherVideo) => {
                if (otherVideo !== video) {
                otherVideo.pause();
                const otherPlayButton = otherVideo
                    .closest(".video-wrapper")
                    .querySelector(".play-button");
                otherPlayButton.classList.remove("hide");
                }
            });
          
          
          
           
            video.addEventListener("timeupdate", () => {
                timeline.value = video.currentTime;
            });
        
          
            video.addEventListener("loadedmetadata", () => {
                timeline.max = video.duration;
            });
        
            
            timeline.addEventListener("input", () => {
                video.currentTime = timeline.value;
            });
        } else {
        playButton.classList.remove("hide");
          video.pause();
          
          
        }
      });
    });
  });
  