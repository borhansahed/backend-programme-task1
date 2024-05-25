# backend-programme-task1

### Create a Post

- **URL**: `/api/posts/create`
- **Method**: `POST`
- **Body**: JSON
  - `title`: string
  - `description`: string
- **Success Response**:
  - **Code**: `201`
  - **Content**:
    ```json
    {
      "title": "Test Post",
      "description": "This is a test post description"
    }
    ```

## Running Tests

    ```bash
    npm run test
    ```
