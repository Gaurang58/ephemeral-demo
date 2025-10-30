# 🚀 Azure Ephemeral Test Environment Setup - Progress Report

## 📘 Introduction
This document outlines the progress and approach used to create **ephemeral (temporary) test environments** in **Azure** for the frontend and backend applications using **GitHub Actions** and **Azure Container Apps**.  

The setup allows automatic deployment of isolated preview environments for each Pull Request (PR), which are automatically cleaned up when the PR is closed.

---

## 🎯 Project Objectives
1. Create automatic, on-demand test environments for each Pull Request.  
2. Deploy frontend and backend containers using Docker Compose configuration.  
3. Integrate with Azure Container Apps for hosting ephemeral environments.  
4. Enable automated cleanup when the Pull Request is closed.  
5. Ensure secure authentication between GitHub Actions and Azure using OIDC (OpenID Connect).

---

## ⚙️ Implementation Progress

### **1. GitHub Secrets Configuration**
The following secrets have been configured:


### **2. GitHub Workflows**
Two workflows are defined:
- **PR Preview** – Deploys backend and frontend containers on new or updated pull requests.  
- **PR Cleanup** – Automatically deletes the deployed containers when the pull request is closed.

### **3. Azure Setup**
- Azure Resource Group and Container Apps Environment created.  
- Azure Container Registry (ACR) set up to store container images.  
- Work in progress: Assigning a managed identity to the Container Apps environment and granting **AcrPull** permissions for image access.

---

## ⚠️ Current Challenge
The GitHub workflow currently fails when trying to pull images from **Azure Container Registry (ACR)**.  
This is due to missing permissions between the Container Apps environment and ACR.  

The issue is being resolved by enabling a **managed identity** for the environment and granting it the **“AcrPull”** role.

---

## 🔜 Next Steps
1. Upgrade the Azure CLI and containerapp extension to enable managed identity commands.  
2. Assign a system-managed identity to the Container Apps environment.  
3. Grant the **'AcrPull'** role to that identity for ACR access.  
4. Re-run the GitHub workflow to confirm successful deployment of PR preview environments.  
5. Validate automatic cleanup through the PR Cleanup workflow.

---

## 💡 Key Benefits
1. Fully automated preview environments for each Pull Request.  
2. Faster testing and feedback cycles for both frontend and backend teams.  
3. No manual cleanup — resources are automatically removed when the PR is closed.  
4. Improved security through OIDC-based authentication (no stored credentials).  
5. Scalable and cost-efficient use of Azure Container Apps.

---

📅 *Status: Work in Progress — Implementing managed identity and ACR access permissions*
