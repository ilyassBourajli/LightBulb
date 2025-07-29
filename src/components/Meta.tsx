import React from 'react';

interface MetaProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const Meta: React.FC<MetaProps> = ({ title, description, image, url }) => {
  React.useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    // Open Graph
    const setOg = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    setOg('og:title', title);
    setOg('og:description', description);
    if (image) setOg('og:image', image);
    if (url) setOg('og:url', url);
    setOg('og:type', 'website');
    return () => {};
  }, [title, description, image, url]);
  return null;
};

export default Meta; 