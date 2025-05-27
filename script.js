// Random site name
const siteNames = ['ChatZone', 'LinkUp', 'GroupSpace', 'TalkHub', 'SocialNest'];

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('siteName').textContent =
    siteNames[Math.floor(Math.random() * siteNames.length)];
});

// Load the internal WhatsApp or Telegram content
function loadContent(platform) {
  const content = {
    whatsapp: `
      <h2>WhatsApp Groups</h2>
      <ul>
        <li><a href="#">📱 Tech Talk</a></li>
        <li><a href="#">🎮 Gaming Group</a></li>
        <li><a href="#">🎓 Study Buddies</a></li>
      </ul>
    `,
    telegram: `
      <h2>Telegram Groups</h2>
      <ul>
        <li><a href="#">💬 Chat Central</a></li>
        <li><a href="#">📰 News Updates</a></li>
        <li><a href="#">📚 Learning Hub</a></li>
      </ul>
      <div>
        <h3>Here We have these categorize</h3>
      </div>
    `
  };

  document.getElementById('mainContent').innerHTML = content[platform];
}

// Handle first/second click behavior
function handleClick(platform) {
  const key = `clicked_${platform}`;
  const alreadyClicked = localStorage.getItem(key);

  if (!alreadyClicked) {
    localStorage.setItem(key, 'true');
    window.open("https://www.profitableratecpm.com/yj4ia9g1?key=24de9592b4784134b56016f708ce8492", "_blank");
  } else {
    loadContent(platform);
  }
}
