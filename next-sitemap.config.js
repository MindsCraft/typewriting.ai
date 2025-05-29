/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://typewriting.ai',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 1,
  exclude: ['/server-sitemap.xml', '/features/*', '/experiments/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://typewriting.ai/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/features/*', '/experiments/*'],
      },
    ],
  },
} 