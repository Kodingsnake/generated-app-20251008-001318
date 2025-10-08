# CatoSphere MD: A Retro Resource Hub

[cloudflarebutton]

CatoSphere MD is a visually striking, retro-themed web application designed as a central resource hub for cat welfare in Maryland. The application adopts a nostalgic early-internet aesthetic, featuring pixel art, neon colors, glitch effects, and CRT screen textures, all while being a modern, responsive, and fast single-page application. The core functionality is to provide two clear, organized lists of resources: one for rehoming cats and another for spaying and neutering services. Each resource is presented in a distinct 'card' using an accordion component, allowing users to expand and view details without leaving the page. The entire experience is designed to be intuitive, visually engaging, and highly performant, running on Cloudflare's edge network.

## Key Features

-   **Stunning Retro Aesthetic:** A unique, nostalgic UI with pixel fonts, neon colors, and CRT scanline effects.
-   **Single-Page Application:** A fast, seamless user experience with no page reloads.
-   **Organized Resource Hub:** Clear, distinct sections for "Rehoming" and "Spay & Neuter" services in Maryland.
-   **Interactive Accordion UI:** Resource details are neatly tucked into expandable cards.
-   **Fully Responsive:** A flawless layout that adapts perfectly to desktops, tablets, and mobile devices.
-   **Edge Deployed:** Built to be deployed on Cloudflare's global network for exceptional performance and reliability.

## Technology Stack

-   **Frontend:** React, Vite, TypeScript
-   **Styling:** Tailwind CSS
-   **UI Components:** shadcn/ui
-   **Animations:** Framer Motion
-   **Icons:** Lucide React
-   **Deployment:** Cloudflare Workers

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [Bun](https://bun.sh/) package manager

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/catosphere_md.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd catosphere_md
    ```
3.  **Install dependencies:**
    ```sh
    bun install
    ```

## Development

To start the local development server, run the following command. This will launch the application with hot-reloading enabled.

```sh
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port specified in your terminal) to view it in your browser.

## Building for Production

To create a production-ready build of the application, run:

```sh
bun run build
```

This command bundles the application into the `dist` directory, optimized for deployment.

## Deployment

This project is configured for seamless deployment to **Cloudflare Pages**.

### One-Click Deploy

You can deploy this application to your own Cloudflare account with a single click.

[cloudflarebutton]

### Manual Deployment with Wrangler

1.  **Install Wrangler CLI:**
    ```sh
    bun add -g wrangler
    ```
2.  **Authenticate Wrangler:**
    ```sh
    wrangler login
    ```
3.  **Deploy the application:**
    ```sh
    bun run deploy
    ```

This will build and deploy your application to Cloudflare. Wrangler will provide you with the URL of your deployed project.