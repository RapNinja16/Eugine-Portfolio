document.addEventListener("DOMContentLoaded", () => {
  const videoWrappers = document.querySelectorAll(".video-wrapper");

  videoWrappers.forEach((wrapper) => {
    const video = wrapper.querySelector("video");
    const playButton = wrapper.querySelector(".play-button");
    const timeline = wrapper.querySelector(".timeline");

    const updateTimeline = () => {
      timeline.max = video.duration;
      timeline.value = video.currentTime;
      updateTimelineStyle();
    };

    const updateTimelineStyle = () => {
      const progress = (timeline.value / timeline.max) * 100 || 0; // Calculate progress percentage
      timeline.style.background = `linear-gradient(to right, red ${progress}%, #ccc ${progress}%)`;
    };

    const pauseAllVideos = () => {
      document.querySelectorAll(".video").forEach((otherVideo) => {
        if (otherVideo !== video) {
          otherVideo.pause();
          const otherPlayButton = otherVideo
            .closest(".video-wrapper")
            .querySelector(".play-button");
          otherPlayButton.classList.remove("hide");
        }
      });
    };

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
        pauseAllVideos();
        video.play();
        playButton.classList.add("hide");
      } else {
        video.pause();
        playButton.classList.remove("hide");
      }
    });

    video.addEventListener("timeupdate", () => {
      timeline.value = video.currentTime;
      updateTimelineStyle(); // Update timeline style on time update
    });

    video.addEventListener("loadedmetadata", updateTimeline);

    timeline.addEventListener("input", () => {
      video.currentTime = timeline.value;
      updateTimelineStyle(); // Update timeline style when user drags the timeline
    });
  });
});
