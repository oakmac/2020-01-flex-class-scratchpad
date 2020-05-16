# Thu, 16 May 2020

- Users, authentication, sessions, authorization, security
  - "just data"

- HTTP is stateless
- How can you know when it's the same person visiting a URL?
- Sessions
  - are you the same browser as last request?
  - NOT part of HTTP
  - a bunch of browser / web server tricks: cookie, IP address, pixel tracking
  - express-session middleware library
- Authentication
  - who are you?
  - trust big web properties using OAuth2
  - passport.js middleware library
- Authorization
  - are you allowed to do this?
  - think "roles and permissions"
- Other misc:
  - do **NOT** store passwords in plaintext
  - use bcrypt (or preferably, do not store at all)
- Use passport.js + OAuth2
  - middleware
