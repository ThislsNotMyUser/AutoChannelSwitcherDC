/**
 * @name AutoChannelSwitcher
 * @description Auto-switch to the first unread, unmuted channel.
 * @version 1.1.0
 */

module.exports = class AutoChannelSwitcher {
  start() {
    this._interval = setInterval(() => {
      const unreadChannels = Array.from(document.querySelectorAll('[aria-label*="unread"], .unread-2wipsx'));

      for (const el of unreadChannels) {
        
        if (el.closest('[style*="opacity: 0.4"]') || el.closest('[data-list-item-id*="muted"]')) continue;

        el.click(); 
        break;
      }
    }, 2000);
  }

  stop() {
    clearInterval(this._interval);
  }
};