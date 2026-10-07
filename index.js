function createLoginTracker(userInfo) {
  let attempts = 0;

  return (password) => {
    if (attempts >= 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (password === userInfo.password) {
      return "Login successful";
    }

    attempts++;

    return `Attempt ${attempts}: Login failed`;
  };
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};