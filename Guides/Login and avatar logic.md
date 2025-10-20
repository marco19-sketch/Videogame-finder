| Responsibility                                      | Function                            |
| --------------------------------------------------- | ----------------------------------- |
| Sign in, verify email, throw friendly errors        | `LogInFunction`                     |
| Detect login/logout, load and cache username/avatar | `useAuth()`                         |
| Display user info                                   | Components reading from `useAuth()` |
