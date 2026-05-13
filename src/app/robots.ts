import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

const siteUrl = siteConfig.url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
