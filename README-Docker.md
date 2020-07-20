# Docker

- Build

  ```
  docker build -t myresume:dev .
  ```

- Run

  ```
  docker run -it -p 8080:8080 --rm myresume:dev
  ```

  ```
  http://localhost:8080
  ```

# Docker Compose

```
docker-compose up -d --build
docker-compose stop
```
