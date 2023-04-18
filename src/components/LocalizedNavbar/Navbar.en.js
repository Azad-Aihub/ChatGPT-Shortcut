const enNavbar = {
  hideOnScroll: true,
  title: "ChatGPT SC",
  logo: {
    alt: "ChatGPT Shortcuts",
    src: "img/logo.svg",
  },
  items: [
    {
      href: 'https://faka.aihub.ren/buy/42',
      label: '稳定账号API',
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

module.exports = enNavbar;
