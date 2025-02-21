## Git Quick Reference

format: `<type>(<scope>): <description>`

- `api:` API endpoint changes
- `feat:` New features
- `fix:` Bug fixes
- `refactor:` Code restructuring
- `perf:` Performance improvements
- `style:` Formatting and styling
- `test:` Test additions or changes
- `docs:` Documentation updates
- `ui:` Interface changes
- `build:` Build system changes
- `dependencies:` Package updates
- `ops:` Infrastructure changes
- `chore:` Maintenance tasks

tips:

- Use imperative: "add/fix" not "added/fixed"
- Keep first line < 72 chars
- Add scope when possible: `feat(auth):`
- Reference issues: "fixes #123"

## Commit Type Format

`<type>(<optional scope>): <description>`

Example: `feat(auth): add OAuth2 authentication`

## Commit Types

### api

Use for changes that affect API endpoints or interfaces

- **Good**: `api(users): add pagination to users endpoint`
- **Bad**: `api: made some API changes`
- **When to use**: New endpoints, changes to request/response structures, API versioning

### feat

Use for new features and major functional additions

- **Good**: `feat(search): implement fuzzy search algorithm`
- **Bad**: `feat: new stuff`
- **When to use**: New user-facing features, significant new functionality

### fix

Use for bug fixes and error corrections

- **Good**: `fix(validation): handle null values in email validator`
- **Bad**: `fix: fixed bug`
- **When to use**: Bug fixes, error handling improvements, security vulnerability patches

### refactor

Use for code changes that neither fix bugs nor add features

- **Good**: `refactor(orders): simplify order processing pipeline`
- **Bad**: `refactor: clean up code`
- **When to use**: Code restructuring, renaming variables/functions, optimizing logic

### perf

Use for performance improvements

- **Good**: `perf(queries): optimize database index for search queries`
- **Bad**: `perf: make faster`
- **When to use**: Query optimization, reducing complexity, improving response times

### style

Use for code style changes (formatting, semicolons, etc.)

- **Good**: `style(components): apply consistent indentation`
- **Bad**: `style: prettier`
- **When to use**: Formatting changes, white-space adjustments, fixing linter issues

### test

Use for adding or modifying tests

- **Good**: `test(auth): add unit tests for password reset flow`
- **Bad**: `test: add tests`
- **When to use**: New tests, test modifications, test infrastructure changes

### docs

Use for documentation changes

- **Good**: `docs(api): update authentication endpoint documentation`
- **Bad**: `docs: update docs`
- **When to use**: README updates, code comments, documentation site changes

### build

Use for build system or external dependencies

- **Good**: `build(docker): update Node.js base image to 20.x`
- **Bad**: `build: update packages`
- **When to use**: Changes to build configuration, CI/CD pipelines

### dependencies

Use for dependency updates

- **Good**: `dependencies(security): update axios to patch CVE-2023-1234`
- **Bad**: `dependencies: update stuff`
- **When to use**: Package updates, adding/removing dependencies

### ops

Use for operational changes

- **Good**: `ops(kubernetes): increase replica count for web servers`
- **Bad**: `ops: server stuff`
- **When to use**: Infrastructure changes, deployment configurations, monitoring setup

### chore

Use for maintenance tasks

- **Good**: `chore(cleanup): remove deprecated feature flags`
- **Bad**: `chore: cleanup`
- **When to use**: Regular maintenance, cleaning up old code, updating configurations

### ui

Use for user interface changes

- **Good**: `ui(dashboard): redesign analytics charts`
- **Bad**: `ui: visual changes`
- **When to use**: Visual changes, layout modifications, styling updates

## Best Practices

1. Keep the first line under 72 characters
2. Use imperative mood ("add" not "added" or "adds")
3. Include a scope when possible to provide context
4. Add detailed description in commit body for complex changes
5. Reference issue numbers when applicable
6. Break large changes into smaller, logical commits

### Example

feat(auth): implement multi-factor authentication

- Add SMS verification service
- Create new user preferences for MFA settings
- Update login flow to handle MFA challenges

Resolves #123
Breaking Change: Requires additional environment variables for SMS service
