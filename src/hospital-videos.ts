for (const button of document.querySelectorAll<HTMLButtonElement>('.hospital-video-play')) {
  const video = button.previousElementSibling
  if (!(video instanceof HTMLVideoElement)) continue

  button.addEventListener('click', () => {
    video.controls = true
    button.hidden = true
    video.focus({ preventScroll: true })
    void video.play().catch(() => {
      // The native controls allow retrying if playback fails.
    })
  }, { once: true })

  video.controls = false
  button.hidden = false
}
