const dev = {
  STRIPE_KEY: "pk_test_8rGGJh99hpCamR3vhDGLbfce",
  s3: {
    REGION: "us-east-1",
    BUCKET: "topcofounder-tasks-dev-attachmentsbucket-nzfq609zq1y7"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://mu2005o9xb.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_yOIrRfyo3",
    APP_CLIENT_ID: "2frrv98aj87rqeh3u8026q3uh4",
    IDENTITY_POOL_ID: "us-east-1:4281ced2-9050-4c5c-b410-7ff8b0c5c1a0"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_8rGGJh99hpCamR3vhDGLbfce",
  s3: {
    REGION: "us-east-1",
    BUCKET: "topcofounder-tasks-prod-attachmentsbucket-lxvmnjhemw8v"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://jqzdlq9p87.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_eTquHPWkG",
    APP_CLIENT_ID: "ec6b3h80nchah7a1f5vufb0bf",
    IDENTITY_POOL_ID: "us-east-1:e68fc2ca-12ff-461f-82ea-26d349ee3d69"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
