# Family Finance BE

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
