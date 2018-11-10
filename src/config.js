const dev = {
  STRIPE_KEY: "pk_test_8rGGJh99hpCamR3vhDGLbfce",
  s3: {
    REGION: "us-east-1",
    BUCKET: "topcofounder-tasks-dev-attachmentsbucket-s6ezndyk96qi"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://6u94edswr3.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_rLuZ0MEDF",
    APP_CLIENT_ID: "k8t2qjpsvkclqanhn52uuvlln",
    IDENTITY_POOL_ID: "us-east-1:e58f0b41-5e78-487c-a944-afe95a2b607d"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_8rGGJh99hpCamR3vhDGLbfce",
  s3: {
    REGION: "us-east-1",
    BUCKET: "topcofounder-tasks-prod-attachmentsbucket-1hy4hgfc7ifib"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://atkeza7ok4.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_XZPWLYHIn",
    APP_CLIENT_ID: "41nllc41p3gofr8lum3fthea1r",
    IDENTITY_POOL_ID: "us-east-1:3c51a3f2-b5a3-4dd7-9dc0-63a6e154302a"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
