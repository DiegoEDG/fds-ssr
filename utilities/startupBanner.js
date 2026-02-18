function logServerStart({ port }) {
  const RESET = '\x1b[0m';
  const BOLD = '\x1b[1m';
  const DIM = '\x1b[2m';
  const CYAN = '\x1b[36m';
  const GREEN = '\x1b[32m';
  const YELLOW = '\x1b[33m';
  const MAGENTA = '\x1b[35m';

  const url = `http://localhost:${port}`;

  console.log(`${BOLD}${MAGENTA}========================================${RESET}`);
  console.log(`${BOLD}${CYAN}🚀 fds-ssr server up!${RESET} ${DIM}(Express)${RESET}`);
  console.log(`${BOLD}${GREEN}🌐 URL:${RESET} ${YELLOW}${url}${RESET}`);
  console.log(`${BOLD}${MAGENTA}========================================${RESET}`);
}

module.exports = {
  logServerStart,
};
