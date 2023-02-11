install: 
	npm ci
brain-games: 
	node bin/brain-games.js
publish: 
	npm publish --dry-run
lint:
	npx eslint .
brain-even: 
	node bin/brain-even.js
game-test: 
	node __tests__/game.test.js