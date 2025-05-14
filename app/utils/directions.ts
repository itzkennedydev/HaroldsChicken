export const getDirectionsUrl = () => {
  return "https://www.google.com/maps/place/Harold's+Chicken+Sports+Bar/@41.5062359,-90.5166081,17z/data=!4m14!1m7!3m6!1s0x87e231469fa44355:0x54cb1c7446567d9e!2sHarold's+Chicken+Sports+Bar!8m2!3d41.5062359!4d-90.5166081!16s%2Fg%2F11wtvlptzn!3m5!1s0x87e231469fa44355:0x54cb1c7446567d9e!8m2!3d41.5062359!4d-90.5166081!16s%2Fg%2F11wtvlptzn?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D";
};

export const openDirections = () => {
  window.open(getDirectionsUrl(), '_blank', 'noopener,noreferrer');
}; 