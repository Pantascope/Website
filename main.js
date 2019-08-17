var banner = document.querySelector('.heroRow');
var bannerVideo = document.querySelector('.bannerVideo');

if (/iPad|iPhone|iPod/.test(navigator.platform)) {
  banner.style.backgroundImage = 'url("' + bannerVideo.poster + '")';
  banner.style.backgroundSize = 'cover';
  banner.style.backgroundPosition = 'center';
  bannerVideo.style.display = 'none';
}