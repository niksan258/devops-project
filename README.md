# DevOps project

### This project consists of 2 main pipelines:

### CI Pipeline
 Triggers when creating pull requests against the dev and main branches utilising a reusable template
#### Responsible for
- Unit tests
- Code linting
- Code format check
- SAST

### CI/CD Pipeline
 Triggers when pushing code to the main branch
#### Responsible for
- Calling the reusable CI template
- Builds a docker image
- Scans docker image for vulnerabilities
- Uploads it to Docker Hub
- Deploys it to a service on render.io

## Branching strategy
![image](https://github.com/user-attachments/assets/669820b9-34bb-4f23-93a4-0d2b96f5feb8)
A standard branching strategy is used, where we have feature branches that merge to dev when ready, and the dev branch merging to a main branch when stable. The main branch then gets deployed on pushes.
