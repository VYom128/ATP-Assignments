# BlogApp Deployment Fix - CORS/Network Error Resolution

## Steps:

- [x] **Step 1:** Simplify CORS in Backend/server.js to allow all origins (origin: true) for Vercel compatibility.
- [x] **Step 2:** Create Backend/vercel.json with CORS headers and rewrites.
- [x] **Step 3:** Update Frontend/src/axiosConfig.js default baseURL to Vercel backend URL.
- [ ] **Step 4:** Deploy changes to Vercel.
- [ ] **Step 5:** Set Environment Variables on Vercel:
  - Frontend: VITE_API_URL = https://blogapp-ajamoepw6-vyomt128s-projects.vercel.app
  - Backend: FRONTEND_URL = https://blogapp-omega-one.vercel.app
- [ ] **Step 6:** Test registration flow from frontend Vercel URL.
- [ ] **Step 7:** Verify no localhost:5000 errors, successful auth/register.

## Code Changes Complete ✅

**Remaining Steps (User Actions):**

1. **Deploy Backend:** cd blogapp/Backend && vercel --prod (or Vercel dashboard)
2. **Deploy Frontend:** cd blogapp/Frontend && vercel --prod (or dashboard)

**Set Vercel Environment Variables:**

- **Frontend Project (blogapp-omega-one):** Add `VITE_API_URL` = `https://blogapp-ajamoepw6-vyomt128s-projects.vercel.app`
- **Backend Project (blogapp-ajamoepw6...):** Add `FRONTEND_URL` = `https://blogapp-omega-one.vercel.app` (optional now)

3. Test registration at your frontend Vercel URL.

4. Check browser console - no more localhost:5000 or CORS errors.
