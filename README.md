# ticketing

Based on Stephen Grider's "Microservices with Node JS and React" course.

To run locally:

1) You must have Docker Desktop with Kubernets enabled.

2) Install Skaffold

3) You must have the NGINX ingress controller installed:
    https://kubernetes.github.io/ingress-nginx/deploy/

4) Change your /etc/hosts file pointing your "127.0.0.1" ip to "ticketing.dev"

5) Create a jwt-secret Kubernetes's secret with a key JWT_KEY and the value of the key.

6) Run `scaffold dev`