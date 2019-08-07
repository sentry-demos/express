#!/bin/bash

run_curl () {
 for ((i=0; i<=((RANDOM % 10)); i++))
 do
  curl "$@";
 done
}

NAME=express
RANDOM_STRING=`openssl rand -base64 8`

run_curl https://sentry-demos-$NAME.herokuapp.com/handled
run_curl https://sentry-demos-$NAME.herokuapp.com/unhandled
run_curl -X POST https://sentry-demos-$NAME.herokuapp.com/checkout -H "Content-Type: application/json" -H "X-Session-ID: _${RANDOM_STRING}" -H "X-Transaction-ID: _${RANDOM_STRING}" -d "{\"email\":\"$X@yahoo.com\", \"cart\":[{\"id\":\"wrench\", \"name\":\"Wrench\", \"price\":500}]}"