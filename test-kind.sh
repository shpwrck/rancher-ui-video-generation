kind create cluster --config=files/kind-config.yml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
kubectl wait --for=condition=Available --timeout=500s -n ingress-nginx deployment/ingress-nginx-controller
while ! kubectl get pods -l app.kubernetes.io/component=controller -n ingress-nginx; do sleep 1; done
kubectl wait --for=condition=Ready --timeout=500s -n ingress-nginx -l app.kubernetes.io/component=controller pod
kubectl create namespace cattle-system
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.5.1/cert-manager.crds.yaml
helm install cert-manager jetstack/cert-manager --namespace cert-manager --create-namespace --version v1.5.1
kubectl wait --for=condition=Available --timeout=500s -n cert-manager deployment/cert-manager
helm install rancher rancher-latest/rancher --namespace cattle-system --set hostname=localhost --set bootstrapPassword=admin --set replicas=1
kubectl wait --for=condition=Available --timeout=500s -n cattle-system deployment/rancher
kubectl patch settings first-login --type='json' -p='[{"op": "replace", "path": "/value", "value": "false"}]'
kubectl patch user $(kubectl get user -l authz.management.cattle.io/bootstrapping=admin-user -o jsonpath='{.items[*].metadata.name}') --type='json' -p='[{"op": "replace", "path": "/mustChangePassword", "value": False}]'
