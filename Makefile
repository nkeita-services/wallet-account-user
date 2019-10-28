build: ##@Intsall Dependencies
	mvn package -DskipTests
up: build ##@Run locally
	docker-compose up -d --build
down: ##@Stop containers
	docker-compose down
deploy: ##@Build and deploy to Cloud Run
	gcloud builds submit --tag gcr.io/wallet-254709/wallet-account-user-svc
	gcloud beta run deploy --image gcr.io/wallet-254709/wallet-account-user-svc --platform managed --allow-unauthenticated