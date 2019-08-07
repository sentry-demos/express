#!/bin/bash

NAME=express
RANDOM_STRING=`cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 8 | head -n 1`

run_curl () {
 for ((i=0; i <=  RANDOM % 10 + RANDOM % 10; i++))
 do
  curl "$@";
 done
}

run_curl https://sentry-demos-$NAME.herokuapp.com/handled
run_curl https://sentry-demos-$NAME.herokuapp.com/unhandled
run_curl -X POST https://sentry-demos-$NAME.herokuapp.com/checkout -H "Content-Type: application/json" -H "X-Session-ID: _$RANDOM_STRING" -H "X-Transaction-ID: _$" -d "{\"email\":\"$X@yahoo.com\", \"cart\":[{\"id\":\"wrench\", \"name\":\"Wrench\", \"price\":500}]}"