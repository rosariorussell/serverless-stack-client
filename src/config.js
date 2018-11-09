const dev = {
  STRIPE_KEY: "pk_test_8rGGJh99hpCamR3vhDGLbfce",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1491po0syjmnh"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ia50qu1i3g.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Zut33hUck",
    APP_CLIENT_ID: "73sb1fvm76istsb19qtcpimj03",
    IDENTITY_POOL_ID: "us-east-1:350b66d5-ed75-49d2-b955-804027d5d76a"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_8rGGJh99hpCamR3vhDGLbfce",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-9vhmj1ie0h60"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://cj5484pq64.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_b9DG0MIPa",
    APP_CLIENT_ID: "1mnfs5jsio3ntrgmosl1vpn8ul",
    IDENTITY_POOL_ID: "us-east-1:848ff18d-5840-40a6-9f10-532ec8392e26"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
