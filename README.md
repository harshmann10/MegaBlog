# Pixel Blog

Welcome to the GitHub repository for the Pixel Blog App! This repository contains the source code for a powerful blogging platform equipped with essential features like user authentication, post management, and content creation. It utilizes Appwrite as the backend service for managing the database and storage operations.

![Pixel Blog Dashboard](https://github.com/user-attachments/assets/e41d365a-c112-4123-9cc1-14d3657f3f53)

## Introduction

Pixel Blog is a full-fledged blog application built with React.js that offers the following features:

- **Home Page:**
![home page](https://github.com/user-attachments/assets/5afd7baf-1f10-434c-b72d-6f649d190712)

- **User Management:**

  - Users can register for new accounts using a signup form with validation (powered by React Hook Form).
  ![Signup Form](https://github.com/user-attachments/assets/f7f3ef5a-fc1c-4165-a0a4-601f5659ab37)

  - Existing users can log in securely using Appwrite for authentication.
  ![Login Form](https://github.com/user-attachments/assets/da3cb766-37d1-48e4-800f-a5c7493fa2c4)

  - Users can log out seamlessly, clearing authentication tokens.

- **Post Creation:**

  - Authorized users can create new blog posts, crafting content with ease using a rich text editor (like TinyMCE).
  ![Create Post](https://github.com/user-attachments/assets/b45e94d0-44a7-43f9-a98c-64d65ca2a640)

  - Post data is stored securely in Appwrite's database.

- **Post Listing:**

  - A clear and organized list displays all published blog posts.
  - Each post showcases the title, author, and a snippet of the content.
  - Consider implementing pagination or sorting for extensive post management (optional).
  ![Post Listing](https://github.com/user-attachments/assets/6e6415fc-413b-459f-b7ea-059916719c22)


- **Update Post:**

  - Users can update their existing post if the same user that is logged in and owns the post.
  - Users can also delete their own post.
  ![Update Post 1](https://github.com/user-attachments/assets/bcb4becf-63b6-47a2-a556-237ef3aa4f88)

  ![Update Post 2](https://github.com/user-attachments/assets/e4394a36-8718-4dc4-a2bf-a0649e4d5d09)


- **Route Management:**
  - The application leverages [react-router-dom](https://reactrouter.com/en/main) for efficient routing between different sections.
  - Specific routes handle authentication (login, logout), post creation, and post listing.

## Tech Stack

- **Frontend:** [React.js](https://react.dev/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/)
- **Rich Text Editor:** [TinyMCE](https://www.tiny.cloud/) (or similar)
- **State Management:** [Redux](https://redux.js.org/) with [react-redux](https://react-redux.js.org/)
- **Routing:** [react-router-dom](https://reactrouter.com/en/main)
- **Backend:** [Appwrite](https://appwrite.io/) (for database, storage, and authentication)

## Deployment & Repository

- **Live Demo:** https://pixel-blog-puce.vercel.app/
- **Repository:** https://github.com/harshmann10/PixelBlog

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/harshmann10/PixelBlog.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd PixelBlog
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Running the Development Server:
    ```bash
    npm run dev
    ```
5.  Access the application in your browser at `http://localhost:5173`.

### Appwrite Configuration

- Create an Appwrite account and project at [https://appwrite.io](https://appwrite.io).
- Obtain your project's endpoint URL, project ID, and API key.
- Create a `.env` file at the project root and add the following environment variables, replacing placeholders with your actual values:

  ```
  VITE_APPWRITE_URL=""
  VITE_APPWRITE_PROJECT_ID=""
  VITE_APPWRITE_DATABASE_ID=""
  VITE_APPWRITE_COLLECTION_ID=""
  VITE_APPWRITE_BUCKET_ID=""
  VITE_TINY_EDITOR_API_KEY=""
  ```

  These environment variables are used in src/config/config.js to configure the Appwrite services and TinyMCE.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the Apache License - see the [LICENSE](https://github.com/harshmann10/PixelBlog\LICENSE) file for details.

## Additional Notes

- Consider adding unit tests and end-to-end tests for robust quality assurance.
- Explore deploying the application to a production environment using a service like Vercel or Netlify. The project includes a [vercel.json](g:\web dev\chai aur react\12PixelBlog\vercel.json) file for Vercel deployment configuration.
- Refer to the official documentation for React.js, React Hook Form, TinyMCE, Redux, react-redux, react-router-dom, and Appwrite for detailed usage and configuration guidance.
- This `README.md` provides a general overview. For a complete understanding, delve into the source code available in the GitHub repository.

## Disclaimer

The information provided here serves as a starting point for understanding the Pixel Blog app. While explanations are clear, it's recommended to explore the code itself for the most comprehensive grasp of implementation details.
