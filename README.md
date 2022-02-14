# azf-schools-info

Information regarding our schools

## Usage

### `/schools` - Get all schools

No more needed to get all schools

### `/schools` - Search for schools having `Yrkesfaglig fordypning`

```json
{
  "yff": true
}
```

### `/schools` -  Get only 1 school

```json
{
  "shortName": "GRVS",
  "limit": 1
}
```

### `/schools` - Get the three first schools having `Yrkesfaglig fordypning`

```json
{
  "yff": true,
  "limit": 3
}
```

## E18

To support [E18](https://github.com/vtfk/e18-node#usage), add `E18_URL`, `E18_KEY`, `E18_SYSTEM` and `E18_EMPTY_JOB` to your Application Settings
