import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  base: "/HD2-Modding-Wiki/",
  title: "Helldivers 2 Modding Wiki",
  description: "The Modding Wiki For Helldivers 2",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: `Users`,
        items: [
          { text: 'Getting Started', link: `/player-overview`}
        ]
      },
      {
        text: 'Developers',
        items: [
          { text: 'Getting Started', link: '/overview' },
          { text: 'Textures', link: '/materials/textures'},
          { 
            text: 'Materials', 
            collapsed: true,
            link: '/materials/overview',
            items: [
              {text: 'Advanced', link: '/materials/advanced'},
              {text: 'Basic+', link: '/materials/basic'},
              {text: 'Translucent', link: '/materials/translucent'},
              {text: 'Alpha Clip', link: '/materials/alphaclip'},
              {text: 'Original', link: '/materials/original'},
              {text: 'Emissive', link: '/materials/emissive'}
            ]
          },
          {
            text: 'LUT Modding',
            collapsed: true,
            link: '/lut/overview',
            items: [
              
            ]
          },
          {
            text: 'Audio',
            collapsed: true,
            link: '/audio/overview',
            items: [
              {text: 'Music', link: '/audio/music', collapsed: true, items: [
                {text: 'Mission Music', link: '/audio/missionmusic'},
                {text: 'Troubleshooting', link: '/audio/troubleshooting'}
                ]},
              {text: 'Voicelines', link: '/audio/voicelines'},
              {text: 'SFX', link: '/audio/sfx'}
            ]
          },{
            text: 'Text',
            collapsed: true,
            link: '/text/overview',
            items: [

            ]
          },{
            text: 'Capes',
            collapsed: true,
            link: '/cape/overview',
            items: [
              {text: 'Beginners Course', link: '/cape/beginnersguide'},
              {text: 'Intermediate Course', link: '/cape/intermediateguide'},
              {text: 'Advanced Course', link: '/cape/advancedguide'}
            ]
          }
        ]
      },
      {
        text: "Other",
        items: [
          { text: `FAQ`, link: `/faq`}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Boxofbiscuits97/HD2-Modding-Wiki' }
    ],

    editLink: {
      pattern: 'https://github.com/Boxofbiscuits97/HD2-Modding-Wiki/edit/main/docs/:path',
      text: "Edit this page on GitHub"
    }
  }
})
