# DynamicForms

The project is to demonstrate creation of dynamic form using JSON schema

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Sample JSON input

```
[
    {
      stepName: 'Step 1',
      Controls: [
        {
          Field: 'First Name',
          Type: 'text',
          Required: true,
          Length: 30
        },
        {
          Field: 'Last Name',
          Type: 'text',
          Required: true,
          Length: 30
        },
        {
          Field: 'Address',
          Type: 'textarea',
          Required: true,
          Length: 300
        }
      ]
    },
    {
      stepName: 'Step 2',
      Controls: [
        {
          Field: 'Interested In?',
          Type: 'checkbox',
          Required: true,
          Options: ['Books', 'TV', 'Video games']
        }
      ]
    }
  ]
```
