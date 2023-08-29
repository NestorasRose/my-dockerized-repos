### Kubernetes
- Log in to gcloud - `gcloud auth login` (make sure you are using your @numan.com account)
- Get creds for the cluster - `gcloud container clusters get-credentials numan-staging-europe-cluster --region europe-west1 --project numan-apps-staging`
- Find the relevant namespace e.g. `api-europe`
  - Get a shell on a machine - `kubectl exec -n api-europe -it svc/api-web-stable -- bash` (you may need ash for alpine based imagesr)
- You can then run rails console etc. as you need