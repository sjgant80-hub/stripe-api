#!/usr/bin/env node
/**
 * stripe-api · HTTP proxy for Stripe
 * Sovereign estate wrapper for Stripe · Payments
 * Docs: https://stripe.com/docs/api
 */
import { createServer } from 'node:http';
const PORT = process.env.PORT || 4200;
createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok', wraps: 'Stripe' }));
  res.end(JSON.stringify({ name: 'stripe-api', wraps: 'Stripe', docs: 'https://stripe.com/docs/api' }));
}).listen(PORT, () => console.log('stripe-api on', PORT));
