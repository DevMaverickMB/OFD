// Cloudinary Video Configuration
// These URLs use optimized transformations for fast loading and streaming

const CLOUD_NAME = 'dmghhstx4';

// Transformations for optimal video delivery:
// f_auto - Automatically selects the best format (WebM for Chrome, MP4 for Safari)
// q_auto - Automatically adjusts quality based on bandwidth
// vc_auto - Auto video codec for best compression
const VIDEO_TRANSFORMATIONS = 'f_auto,q_auto';

// Video public IDs
const VIDEO_IDS = {
    hero: 'video1_humhvc',
    banner: 'Bannervideo_bibtry',
};

// Generate optimized video URL
const getVideoUrl = (videoId) => {
    return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${VIDEO_TRANSFORMATIONS}/${videoId}`;
};

// Export optimized video URLs
export const cloudinaryVideos = {
    heroVideo: getVideoUrl(VIDEO_IDS.hero),
    bannerVideo: getVideoUrl(VIDEO_IDS.banner),
};

// For direct URL usage (fallback)
export const videoUrls = {
    heroVideo: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${VIDEO_TRANSFORMATIONS}/video1_humhvc`,
    bannerVideo: `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${VIDEO_TRANSFORMATIONS}/Bannervideo_bibtry`,
};

export default cloudinaryVideos;
