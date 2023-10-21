.PHONY: dev
dev:
	@./scripts/check_dependencies.sh
	@echo "Starting development server..."
	@npm run dev

.PHONY: deploy
deploy:
	@echo "Deploying to production... (\033[0;33mto implement!\033[0;0m)"

.PHONY: install-deps
install-deps:
	@echo "Installing dependencies..."
	@npm install

.PHONE: lint
lint:
	@echo "Linting..."
	@npm run lint

.PHONY: build
build: install-deps
	@echo "Building..."
	@npm run build

.PHONY: serve
serve: build
	@echo "Serving..."
	@node ./build/index.js
	# with @sveltekit/adapter-static use this: @npm run serve
	# with @sveltekit/adapter-node use this: @node ./build/index.js
