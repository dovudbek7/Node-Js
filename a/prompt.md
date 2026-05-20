# TASK

Build a complete backend system using:

* Django
* Django REST Framework
* PostgreSQL
* JWT Authentication
* Telegram Bot Integration
* Docker
* Redis
* Celery

Project type:

Community Event Platform.

Examples:

* Chess events
* Mafia games
* Board games
* Meetups
* Offline community activities

The backend must be scalable, production-ready, clean architecture, modular, and follow best practices.

---

# IMPORTANT

I will provide 2 markdown documentation files after this prompt.

You MUST strictly follow those documents.

Those docs contain:

* full database structure
* business logic
* API endpoints
* permissions
* authentication flow
* attendance logic
* waiting list system
* organizer approval flow
* leaderboard
* reports
* achievements
* search system

You must carefully analyze both documents before writing code.

---

# REQUIRED PROJECT STRUCTURE

Use modular DRF apps structure.

Example:

```bash
apps/
│
├── accounts/
├── attendance/
├── events/
├── categories/
├── interests/
├── locations/
├── organizer/
├── ratings/
├── reports/
├── achievements/
└── common/
```

---

# REQUIRED FEATURES

Implement ALL APIs from the documentation.

Including:

* Telegram authentication
* JWT auth
* onboarding flow
* profile system
* event CRUD
* attendance system
* waiting list
* leaderboard
* reports
* organizer request system
* achievements
* search API
* admin APIs

---

# TELEGRAM BOT

Use this Telegram Bot token for testing:

```env
BOT_TOKEN=8980123227:AAGkb2zjBGBiUCd9jzVQAKDVzVk9J8InGR8
```

This is a TEST bot.

Use Telegram Bot API integration properly.

Notifications should be sent through the bot.

Examples:

* organizer approved
* event reminder
* waiting list approved
* event cancelled

---

# AUTHENTICATION

Use JWT authentication.

Preferred package:

```python
djangorestframework-simplejwt
```

---

# DATABASE

Use PostgreSQL.

Do NOT use SQLite.

---

# IMPORTANT DATABASE RULES

## seats_left

DO NOT store in database.

Must be calculated dynamically.

Formula:

```python
seats_left = total_seats - joined_users
```

---

## user_history

Do NOT create separate history table.

Build from Attendance + Event relations.

---

## attendance unique constraint

Prevent duplicate joins.

```python
(user_id, event_id)
```

---

# WAITING LIST SYSTEM

If event is full:

User must go into waiting list.

When someone leaves:

* first waiting user auto joins
* Telegram notification sent automatically

Implement this correctly.

---

# ATTENDANCE SYSTEM

Attendance statuses:

```python
joined
attended
cancelled
```

Organizer can mark users as attended from organizer dashboard APIs.

---

# ORGANIZER SYSTEM

Users CANNOT create events unless approved.

Flow:

1. user sends organizer request
2. admin approves
3. user becomes organizer

Implement full workflow.

---

# SEARCH SYSTEM

Create optimized search endpoint.

Search by:

* event title
* category
* organizer
* location

Use:

* Django filters
* Q objects
* icontains
* optimization

---

# ACHIEVEMENT SYSTEM

Implement achievement system.

Examples:

* 10 Events Joined
* Chess Master
* Top Organizer

Create reusable scalable structure.

---

# REPORT SYSTEM

Simple report system.

User sends:

* target_user
* message

No moderation system needed yet.

---

# PERMISSIONS

Normal User:

* join event
* leave event
* rate users
* report users

Organizer:

* create event
* update event
* manage attendance

Admin:

* approve organizers
* view reports

Use custom DRF permissions.

---

# API REQUIREMENTS

Use:

* ViewSets
* Routers
* Serializers
* GenericAPIView where appropriate

API responses must be clean and frontend friendly.

---

# VALIDATION RULES

Implement validations carefully.

Examples:

* cannot join same event twice
* cannot rate without attending
* cannot create event without organizer access
* cannot join cancelled events
* cannot join completed events

---

# PERFORMANCE REQUIREMENTS

Use:

* select_related
* prefetch_related
* queryset optimization
* pagination

Add indexes where necessary.

---

# ASYNC TASKS

Use Celery + Redis for:

* telegram notifications
* reminders
* scheduled tasks

---

# EVENT STATUS AUTOMATION

Automatically mark events:

* upcoming
* completed
* cancelled

Use Celery Beat or scheduled tasks.

---

# ADMIN PANEL

Create clean Django admin configurations.

Admin should easily manage:

* organizer requests
* reports
* categories
* interests
* events
* users

---

# SWAGGER / API DOCS

Add Swagger documentation.

Preferred:

* drf-spectacular

Generate complete API schema.

---

# SECURITY

Use:

* environment variables
* .env
* proper secret management
* secure JWT setup

Never hardcode secrets except current testing token.

---

# REQUIRED FILES

Generate:

* requirements.txt
* docker-compose.yml
* Dockerfile
* .env.example
* README.md

---

# README REQUIREMENTS

README must include:

* setup instructions
* docker setup
* migrations
* create superuser
* run celery
* run redis
* API docs URLs
* testing instructions

---

# MOCK DATA

IMPORTANT:

Create a separate Python script or Django management command that generates:

* 10 users
* 10 events
* categories
* interests
* attendance data
* leaderboard data
* organizer requests

The goal:
I should be able to test the project immediately after running seed/mock data command.

Example:

```bash
python manage.py seed_data
```

---

# CODE STYLE

Code must be:

* clean
* scalable
* modular
* production-ready
* well-structured
* readable

Avoid spaghetti code.

---

# ARCHITECTURE PRIORITY

Priority order:

1. Clean architecture
2. Correct business logic
3. Scalability
4. Performance
5. Beautiful code structure

---

# IMPORTANT FINAL INSTRUCTION

Before generating code:

1. Carefully analyze BOTH markdown documents
2. Design database relationships properly
3. Think through business logic
4. Then generate the implementation

DO NOT skip analysis.

Build the backend like a real startup MVP intended for future scaling.
