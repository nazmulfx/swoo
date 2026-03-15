# 🛒 Swoo - Modern Ecommerce for ERPNext

A cutting-edge ecommerce application built for **ERPNext**, featuring a high-performance **React** dashboard powered by **Vite**.

---

## ⚡ Features

- **Blazing Fast**: React + Vite for a seamless developer and user experience.
- **ERPNext Powered**: Robust back-end integration using the latest Frappe standards.
- **Developer First**: Sophisticated linting and formatting setup with `pre-commit`.
- **Customizable**: Built with extensibility in mind for tailored ecommerce flows.

---

## 🚀 Installation

Follow these steps to get **Swoo** up and running on your local bench:

### 1. Fetch the App
```bash
cd $PATH_TO_YOUR_BENCH
bench get-app https://github.com/nazmulfx/swoo --branch version-16
```

### 2. Install on Site
```bash
bench --site <your-site-name> install-app swoo
```

### 3. Build Assets
```bash
bench build --app swoo
```

> [!TIP]
> Make sure your bench environment is up-to-date before installation to ensure compatibility with React 19.

---

## 🛠️ Development & Contributing

We welcome contributions! To maintain code quality, we use `pre-commit` hooks.

### Setup Pre-commit
```bash
cd apps/swoo
pre-commit install
```

### Tooling
Our CI/CD pipeline and pre-commit hooks utilize the following:
- 🖋️ **Ruff**: For Python linting and formatting.
- 🎨 **ESLint & Prettier**: For React/JS excellence.
- ⚡ **Pyupgrade**: For keeping Python syntax modern.

---

## 📜 License

This project is licensed under the **MIT License**.
