// Random site name
const siteNames = ['ChatZone', 'LinkUp', 'GroupSpace', 'TalkHub', 'SocialNest'];

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('siteName').textContent =
    siteNames[Math.floor(Math.random() * siteNames.length)];
});

// Track clicks and auto-reset after inactivity
const buttonState = {
  whatsapp: { clicked: false, timer: null },
  telegram: { clicked: false, timer: null },
};

function resetClickState(platform) {
  buttonState[platform].clicked = false;
}

function handleClick(platform) {
  const state = buttonState[platform];

  // If user hasn't clicked yet OR time has expired
  if (!state.clicked) {
    state.clicked = true;
    window.open("https://www.profitableratecpm.com/yj4ia9g1?key=24de9592b4784134b56016f708ce8492", "_blank");
  } else {
    loadContent(platform);
  }

  // Reset logic: if inactive for 15s, reset click state
  if (state.timer) clearTimeout(state.timer);
  state.timer = setTimeout(() => resetClickState(platform), 10000); // 10 seconds
}

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
      <h2>Telegram Channels</h2>
      <ul>
        <li><a href="#">💬 Chat Central</a></li>
        <li><a href="#">📰 News Updates</a></li>
        <li><a href="#">📚 Learning Hub</a></li>
      </ul>
    `
  };

  document.getElementById('mainContent').innerHTML = content[platform];
}
