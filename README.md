# My Portfolio

Welcome to my personal portfolio website! This project showcases my skills, experiences, and projects. The website is built using React and deployed on AWS S3, managed by CloudFront and Route 53.

## Project Structure

- **React App**: The portfolio is built using React.js. The source code is organized in the `src` directory.

- **AWS Services**:
  - **S3**: The React build files are hosted in an S3 bucket.
  - **CloudFront**: Content Delivery Network (CDN) for faster content delivery.
  - **Route 53**: Domain management for the custom domain [phucthaihg.site](https://phucthaihg.site).

- **API Gateway and Lambda**: The project uses AWS Gateway API to trigger Lambda functions for API calls. These Lambda functions access data in DynamoDB.

- **DynamoDB**: DynamoDB is used as a data store to manage information presented on the portfolio.

- **SES (Simple Email Service)**: Lambda functions are configured to send notification emails using SES.

## Setup and Deployment

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio

2. **Install Dependencies:** 
   ```bash
   npm install

3. ***Run the React App:*
   ```bash
   npm start

