# Family Finance BE

## To Do

- Create & update body validations
- UUid
- Filter find all
- Find all Pagination
- Create, update & delete many
- Files storage
- Authentication
- Authorization
- Handle error cases
  - ID not found
  - Missing required prop
  - Unauthorized
- Notifications Generator
- Emailing Service
- PDF Generator

## Technical Features

### Models

#### user

- props
  - name
  - username
  - email
  - password
- relations
  - role
  - family

#### role

- props
  - name
- relations
  - users

#### family

- props
  - name
- relations
  - users
  - accounts

#### account

- props
  - name
  - currency
  - description
- relations
  - family
  - transfersFrom
  - transfersTo
  - categories

#### transfer

- props
  - amount
  - exchange rate
- relations
  - from
  - to

#### category

- props
  - name
  - type
- relations
  - account
  - records

#### record

- props
  - value
  - note
  - timestamp
- relations
  - category
