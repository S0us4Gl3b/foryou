document.addEventListener('DOMContentLoaded', () => {

    const videoLink = "https://www.youtube.com/watch?v=Br2rofxz_C0";
    const videoContainer = document.getElementById('player');

    // Extract the video ID from the URL
    const urlRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([\w-]+)|youtu\.be\/([\w-]+)/;
    const match = videoLink.match(urlRegex);

    if (match && (match[1] || match[2])) {
        const videoId = match[1] || match[2];
        videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>`;
    } else {
        videoContainer.innerHTML = '<p style="color: red;">Invalid YouTube URL. Please try again.</p>';
    }
});