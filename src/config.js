const dev = {
  STRIPE_KEY: "pk_test_8rGGJh99hpCamR3vhDGLbfce",
  s3: {
    REGION: "us-east-1",
    BUCKET: "topcofounder-tasks-v2-dev-attachmentsbucket-1pblz4pk9q6c6"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://3lcj7iy1i0.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Y0HeGrFHO",
    APP_CLIENT_ID: "7prq4o9emvl603uv7c4duephbt",
    IDENTITY_POOL_ID: "us-east-1:5eeb4fac-bb6b-4f03-9d90-6d0952fd6282"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_8rGGJh99hpCamR3vhDGLbfce",
  s3: {
    REGION: "us-east-1",
    BUCKET: "topcofounder-tasks-v2-prod-attachmentsbucket-yovry1nryqhd"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://pnhym59sp0.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_xDwhDxCW7",
    APP_CLIENT_ID: "65ejcion7c7nhnb7l0abilprjb",
    IDENTITY_POOL_ID: "us-east-1:53c522e2-19b9-43a0-8e5e-927e6e845793"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  FB: "2163374583926958",
  ...config
};


