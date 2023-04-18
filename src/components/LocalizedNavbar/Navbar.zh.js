const zhNavbar = {
  hideOnScroll: true,
  title: "ChatGPT SC",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/logo.svg",
  },
  items: [
    {
      to: "https://chat.openai.com/chat",
      label: "ChatGPT官网",
      position: "left",
    },
    {
      to: "https://nchat.aihub.ren/",
      label: "免翻墙镜像",
      position: "left",
    },
    {
      href: 'https://faka.aihub.ren/buy/42',
      label: '获取账号API',
      target: '_blank',
      position: 'left',
    },
    { type: "localeDropdown", position: "right" },
    {
      href: "https://alist.azad.asia/",
      position: "right",
      className: "header-github-link",
    },
    {
      href: "https://ss.azad.asia/",
      position: "right",
      className: "header-discord-link",
    },
  ],
};

module.exports = zhNavbar;
