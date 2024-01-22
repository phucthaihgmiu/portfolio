<p><a target="_blank" href="https://app.eraser.io/workspace/jo5AabYwugeAJSGEg2Xr" id="edit-in-eraser-github-link"><img alt="Edit in Eraser" src="https://firebasestorage.googleapis.com/v0/b/second-petal-295822.appspot.com/o/images%2Fgithub%2FOpen%20in%20Eraser.svg?alt=media&amp;token=968381c8-a7e7-472a-8ed6-4a6626da5501"></a></p>

# My Portfolio
Welcome to my personal portfolio website! This project showcases my skills, experiences, and projects. The website is built using React and deployed on AWS S3, managed by CloudFront and Route 53.

## Project Structure
- **React App**: The portfolio is built using React.js. The source code is organized in the `src`  directory.
- **AWS Services**:
    - **S3**: The React build files are hosted in an S3 bucket.
    - **Certificate Manager**: https certificate
    - **CloudFront**: Content Delivery Network (CDN) for faster content delivery.
    - **Route 53**: Domain management for the custom domain [﻿phucthaihg.site](https://phucthaihg.site/) .
- **API Gateway and Lambda**: The project uses AWS Gateway API to trigger Lambda functions for API calls. These Lambda functions access data in DynamoDB.
- **DynamoDB**: DynamoDB is used as a data store to manage information presented on the portfolio.
- **SES (Simple Email Service)**: Lambda functions are configured to send notification emails using SES.
![Website Cloud Architecture](/.eraser/jo5AabYwugeAJSGEg2Xr___ZyuCQ5RWGzOcvH70Y8Aipy4YHP62___---figure---EcJEzPabyVHbEjoxq5eOU---figure---CAaStYMHxUIvTF2s2SywKw.png "Website Cloud Architecture")

## Setup and Deployment
1. **Clone the Repository:**
   ```bash
    git clone https://github.com/your-username/your-portfolio.git
    cd your-portfolio
3. **Install Dependencies:**
   ```bash
    npm install
5. **_Run the React App:**
   ```bash
    npm start

## Reference
1. **Template:**[template](https://styleshout.com/free-templates/kards/)
2. **Setup Certificate, Cloudfront, Route53, S3:** [youtube](https://www.youtube.com/watch?v=mls8tiiI3uc&ab_channel=BeABetterDev)

<!--- Eraser file: https://app.eraser.io/workspace/jo5AabYwugeAJSGEg2Xr --->
