export const AWS_CONFIG = `serverless config credentials --provider aws --key ${process.env.AWS_ACCESS_KEY_ID} --secret ${process.env.AWS_SECRET_ACCESS_KEY} --profile remember-backend-dev &`
