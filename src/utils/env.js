// Environment variables utility
export const getSaaSWebsite = () => {
  const url = import.meta.env.VITE_SAAS_WEBSITE || '';
  if (!url) return '';
  
  // If URL doesn't start with http:// or https://, add https://
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `http://${url}`;
  }
  
  return url;
  console.log('SaaS Website URL:', url);
};

