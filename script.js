// Sample video data
const videos = [
    {
        id: 1,
        title: "Introduction to Machine Learning",
        channel: "Tech Edu",
        views: "1.2M",
        uploadTime: "2 days ago",
        thumbnail: "https://picsum.photos/id/10/320/180.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
        id: 2,
        title: "Building a Web Application",
        channel: "Web Dev Pro",
        views: "850K",
        uploadTime: "1 week ago",
        thumbnail: "https://picsum.photos/id/20/320/180.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
        id: 3,
        title: "Cooking Pasta Like a Chef",
        channel: "Food Masters",
        views: "2.5M",
        uploadTime: "3 days ago",
        thumbnail: "https://picsum.photos/id/30/320/180.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
        id: 4,
        title: "Travel Vlog: Beautiful Italy",
        channel: "Wanderlust",
        views: "3.1M",
        uploadTime: "5 days ago",
        thumbnail: "https://picsum.photos/id/40/320/180.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoy.mp4"
    },
    {
        id: 5,
        title: "Gaming Highlights - New Release",
        channel: "Game Central",
        views: "1.7M",
        uploadTime: "4 days ago",
        thumbnail: "https://picsum.photos/id/50/320/180.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
    },
    {
        id: 6,
        title: "Fitness Tips for Beginners",
        channel: "Health First",
        views: "950K",
        uploadTime: "1 day ago",
        thumbnail: "https://picsum.photos/id/60/320/180.jpg",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerRubbles.mp4"
    }
];

// DOM elements
const trendingVideosContainer = document.getElementById('trending-videos');
const recommendedVideosContainer = document.getElementById('recommended-videos');

// Function to render video cards
function renderVideoCards(videosArray, container) {
    container.innerHTML = '';
    
    videosArray.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail" onclick="openVideoModal('${video.videoUrl}', '${video.title}')">
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-channel">${video.channel}</div>
                <div class="video-stats">
                    <span>${video.views} views</span>
                    <span>${video.uploadTime}</span>
                </div>
            </div>
        `;
        
        container.appendChild(videoCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Show all videos in trending section initially
    renderVideoCards(videos, trendingVideosContainer);
    
    // Generate recommendations based on some simple logic
    generateRecommendations();
});

// Simple recommendation algorithm
function generateRecommendations() {
    // For demonstration purposes, we'll just shuffle the videos and pick 4 random ones
    // In a real application, this would involve more complex algorithms
    
    // Create a copy of the videos array and shuffle it
    const shuffledVideos = [...videos].sort(() => 0.5 - Math.random());
    
    // Pick the first 4 videos as recommendations
    const recommendedVideos = shuffledVideos.slice(0, 4);
    
    // Render the recommended videos
    renderVideoCards(recommendedVideos, recommendedVideosContainer);
}

// Video modal functionality
function openVideoModal(videoUrl, title) {
    // Create modal element if it doesn't exist
    let modal = document.getElementById('video-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'video-modal';
        modal.className = 'modal';
        modal.innerHTML = `
            <span class="close-btn" onclick="closeVideoModal()">&times;</span>
            <div class="modal-content">
                <video controls autoplay>
                    <source src="${videoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `;
        document.body.appendChild(modal);
    } else {
        // Update the existing modal with new video
        const videoElement = modal.querySelector('video source');
        videoElement.src = videoUrl;
        const videoTag = modal.querySelector('video');
        videoTag.load();
        videoTag.play();
    }
    
    modal.style.display = 'flex';
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside the video
window.onclick = function(event) {
    const modal = document.getElementById('video-modal');
    if (event.target === modal) {
        closeVideoModal();
    }
};