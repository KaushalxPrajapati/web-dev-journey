# MongoDB Connection Error Explanation

## Problem

The backend was failing to connect to MongoDB Atlas with this error:

```text
querySrv ECONNREFUSED _mongodb._tcp.cluster0.r4nasrl.mongodb.net
```

## Why it happened

- The application used a MongoDB Atlas SRV connection string.
- Node tried to resolve the SRV DNS record `_mongodb._tcp.cluster0.r4nasrl.mongodb.net`.
- That SRV lookup failed with `ECONNREFUSED`, meaning DNS resolution or network access to Atlas was blocked on this machine.

## What this means

- The backend was not able to establish a real MongoDB connection.
- The app fell back to an in-memory user store in local development mode.
- That means registration and login could work temporarily, but data was not persisted in MongoDB Atlas.

## Fix

1. Use a host-based connection string instead of `mongodb+srv://`.
2. Ensure Atlas network access is configured correctly (`0.0.0.0/0` or your IP).
3. Verify the `MONGO_URI` value in `.env`.
4. Restart the backend server after updating `.env`.

## Example of a working URI

```text
mongodb://kaushal:kaushal123@ac-eoocgxy-shard-00-00.r4nasrl.mongodb.net:27017,ac-eoocgxy-shard-00-01.r4nasrl.mongodb.net:27017,ac-eoocgxy-shard-00-02.r4nasrl.mongodb.net:27017/?ssl=true&authSource=admin&retryWrites=true&w=majority
```

## Why the `.md` file

This file documents the exact error and the reason behind it in a readable format so you can understand and fix the issue later.
