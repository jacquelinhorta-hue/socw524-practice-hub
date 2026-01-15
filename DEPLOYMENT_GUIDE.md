# 🚀 GitHub Pages Deployment Guide

## Your Repository is Ready!

I've initialized a Git repository with all your SOCW524 Practice Visual Learning Hub files. Now you need to create a GitHub repository and push your code to enable GitHub Pages hosting.

## 📋 Step-by-Step Deployment Instructions

### Step 1: Create a GitHub Repository

1. **Go to GitHub**: Visit [github.com](https://github.com) and sign in
   - If you don't have an account, create one (it's free!)

2. **Create New Repository**:
   - Click the **"+"** icon in the top-right corner
   - Select **"New repository"**

3. **Repository Settings**:
   - **Repository name**: `socw524-practice-hub` (or any name you prefer)
   - **Description**: "SOCW524 Practice Visual Learning Hub - Interactive study resource"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click **"Create repository"**

### Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. **Use these commands in your terminal:**

#### Option A: If you see the "Quick setup" page, copy the repository URL

It will look like: `https://github.com/YOUR-USERNAME/socw524-practice-hub.git`

Then run these commands in your terminal:

```bash
cd "/Users/jacquelinhorta/Desktop/Spring 2026 APU/SOCW524 Practice"

# Add the remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/socw524-practice-hub.git

# Rename the branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

#### Option B: Copy the exact commands from GitHub

GitHub will provide exact commands on the repository page. Copy and paste them into your terminal.

### Step 3: Enable GitHub Pages

1. **Go to Repository Settings**:
   - On your GitHub repository page, click **"Settings"** (top menu)

2. **Navigate to Pages**:
   - In the left sidebar, scroll down and click **"Pages"**

3. **Configure GitHub Pages**:
   - **Source**: Select **"Deploy from a branch"**
   - **Branch**: Select **"main"** (or "master")
   - **Folder**: Select **"/ (root)"**
   - Click **"Save"**

4. **Wait for Deployment**:
   - GitHub will build and deploy your site (takes 1-2 minutes)
   - Refresh the page to see the deployment status

5. **Get Your Public URL**:
   - Once deployed, you'll see a message: **"Your site is live at..."**
   - Your URL will be: `https://YOUR-USERNAME.github.io/socw524-practice-hub/`

## 🎯 Quick Command Reference

Here are the exact commands you'll need (replace YOUR-USERNAME):

```bash
# Navigate to your project
cd "/Users/jacquelinhorta/Desktop/Spring 2026 APU/SOCW524 Practice"

# Add GitHub remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/socw524-practice-hub.git

# Ensure you're on the main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🔧 Troubleshooting

### If you get an authentication error:

GitHub no longer accepts password authentication. You need to use a **Personal Access Token**:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "SOCW524 Deployment"
4. Select scopes: **repo** (full control of private repositories)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. When pushing, use the token as your password

### If you need to configure Git:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 📱 Alternative: Use GitHub Desktop (Easier!)

If you prefer a visual interface:

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in to GitHub
3. Click "Add" → "Add Existing Repository"
4. Select: `/Users/jacquelinhorta/Desktop/Spring 2026 APU/SOCW524 Practice`
5. Click "Publish repository"
6. Choose repository name and make it public
7. Click "Publish repository"
8. Then follow Step 3 above to enable GitHub Pages

## ✅ Verification

Once deployed, your website will be live at:
```
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
```

You can share this URL with anyone, and they can access your Visual Learning Hub!

## 🔄 Future Updates

When you make changes to your website:

```bash
cd "/Users/jacquelinhorta/Desktop/Spring 2026 APU/SOCW524 Practice"
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically update your live site within 1-2 minutes!

## 📞 Need Help?

If you encounter any issues:
1. Check the GitHub Pages documentation: [docs.github.com/pages](https://docs.github.com/pages)
2. Verify your repository is public
3. Ensure the branch and folder settings are correct
4. Wait a few minutes for the initial deployment

---

## 🎉 What You'll Have

Once deployed, you'll have:
- ✅ A public URL you can share with classmates
- ✅ Free hosting (no cost!)
- ✅ Automatic HTTPS security
- ✅ Easy updates via Git
- ✅ Professional web presence

Your SOCW524 Practice Visual Learning Hub will be accessible to anyone with the link, making it perfect for studying with classmates!

---

**Your local repository is ready to push!** Just follow the steps above to get your public URL. 🚀
