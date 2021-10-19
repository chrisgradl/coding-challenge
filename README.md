# coding-challenge
Coding Challenge for hello-again

## mock fetch

in `__DEV__` Mode the fetchRewards.ts is exporting a mock Function replace it to test with real backend

##room for discussion:
* should the server state be stored inside redux or in a cache for Example: react-query or swr?
* no Tests added: how can we add integration tests, would they make sense?
* what is happening to the collected Rewards when the list is refetched with new data, or when a collected reward is removed from the server?
* only reward Id should be stored in redux state not the complete object?
