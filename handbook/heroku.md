### Heroku `rails` console
```bash 
heroku run 'bundle exec rails c' -a app_name
```

### Change `db` for review app (staging)
```bash 
  heroku addons:attach app_name::DATABASE --app <review-app-here> # Attach the staging database to your review app: 
```
```bash 
  heroku pg:promote <ENV name here> --app <review-app-here> # Promote the attached `db` to the primary database for your review app:
```

### Review app for `QA`

```bash
./bin/create_heroku_env.sh app_name    # Create All Apps
```

### `Magic Wormhole`
```bash
heroku run bash -a app_name # Run `bash` in `Heroku` `api` container: 
wget https://github.com/psanford/wormhole-william/releases/download/v1.0.5/wormhole-william-linux-amd64 # Get `Magic Wormhole` app within the `Heroku` container 
chmod +x wormhole-william-linux-amd64 # Make `Magic Wormhole` app executable
./wormhole-william-linux-amd64 receive "code here" # Receive through  `Magic Wormhole` the `CSV` file you sent in `step 1`
```