# [My App](http://my_app.io)

Built from [nano-react-app](https://github.com/adrianmcli/nano-react-app) - which makes use of [Parcel](https://parceljs.org/), but code wise is entirely React.

## System Architecture

- [30k ft view](https://draw.io)

## Setup

```shell
mkdir ~/projects/my_project
cd ~/projects/my_project
git clone git@github.com:my_project/my_app.git

cd ~/projects/my_project/my_app
docker-compose run --rm npm install
docker-compose up -d
```

## Deployment

This should be done for you via CI/CD, but in case you need to manually push some artifacts. This assumes you have credentials within [~/.aws](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html), and set the value of `AWS_PROFILE` appropriately in the docker-compose.override.yml file.

```shell
docker-compose run --rm npm run build
docker-compose run --rm aws s3 sync /usr/src/app/dist s3://com.my_project
# and if you're in a rush...
docker-compose run --rm aws cloudfront create-invalidation --distribution-id asdf1234asdf1234 --paths "/index.html"
```

## Reading

Explore React [guides](https://reactjs.org/docs/hello-world.html), or jump in [chat](https://www.reactiflux.com) for help.

Learn about [Docker](https://docs.docker.com/compose/gettingstarted).

Learn about GitHub [Actions](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions).
