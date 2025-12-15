document.addEventListener('DOMContentLoaded', () => {
    
    const yearButtons = document.querySelectorAll('.year-btn');
    const loadingScreen = document.getElementById('fake-loading-screen');
    const loadingVideo = document.getElementById('loading-image'); 
    const progressBarFill = document.getElementById('progress-bar-fill');

    yearButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            const targetUrl = button.getAttribute('data-url');
            const videoSrc = button.getAttribute('data-gif');

            // 1. 비디오 세팅
            loadingVideo.src = videoSrc;
            loadingVideo.onloadeddata = () => { loadingVideo.play(); };
            loadingVideo.load();

            // 2. 화면 보여주기
            loadingScreen.classList.remove('hidden');

            // [핵심 수정] 게이지 애니메이션 강제 적용
            // 일단 0%로 확실하게 죽여놓습니다.
            progressBarFill.style.width = '0%';

            setTimeout(() => {
                progressBarFill.style.width = '100%';
            }, 100); 

            // 3. 3초 뒤 이동
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 3100);
        });
    });
});