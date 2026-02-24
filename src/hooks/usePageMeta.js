import { useEffect, useRef } from 'react';

/**
 * Updates document title, meta description, canonical, Open Graph tags, and optional JSON-LD.
 * No external deps – works with React 19 and avoids react-helmet-async peer conflicts.
 */
export function usePageMeta({
  title,
  description,
  canonical,
  ogUrl,
  ogTitle,
  ogDescription,
  ogImage,
  jsonLd,
}) {
  const scriptRef = useRef(null);

  useEffect(() => {
    if (title) document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (description) {
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    const setOg = (prop, value) => {
      if (!value) return;
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    if (ogUrl) setOg('og:url', ogUrl);
    if (ogTitle) setOg('og:title', ogTitle);
    if (ogDescription) setOg('og:description', ogDescription);
    if (ogImage) setOg('og:image', ogImage);

    if (jsonLd) {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
      scriptRef.current = script;
    }

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, [title, description, canonical, ogUrl, ogTitle, ogDescription, ogImage, jsonLd]);
}
