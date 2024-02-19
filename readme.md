## Issue: Handling Stripe Redirects with Expo

### Steps i took to reproduce

1. Initialize a new Expo app with the Tabs template:
   ```bash
   pnpm create expo-app@latest --template tabs@50
   ```
2. Install Stripe and Expo Linking:
   ```bash
   pnpm expo install @stripe/stripe-react-native expo-linking
   ```
3. Add the Expo plugin for Stripe to app.json
4. Implement the Stripe Provider in the app's layout (`layout.tsx`).
5. Set up a URL listener for Stripe in `components/StripeHandleUrl` to handle safepay redirects.

### Configuration to run this demo:

- **Stripe Provider:** Ensure you add the correct values in the Stripe Provider configuration within `layout.tsx`.
- **App JSON:** Update `app.json` to include the correct Stripe plugin configuration.

### Issue Description

When making a payment with Stripe that requires leaving the app (e.g., using iDeal), and upon redirecting back to the app via a deep link (specifically with `/safepay`), the URL listener is correctly triggered. However, the Expo router attempts to navigate to this route, which is not desired.

**Expected Behavior:** The Expo router should ignore the `/safepay` deep link and not attempt to navigate to it. It would be beneficial to have a configuration option to specify routes the router should ignore.

### Possible Solution

A potential solution might involve configuring the Expo router to exclude certain routes from being handled or to specifically handle `/safepay` redirects in a way that does not interfere with the app's navigation flow.
