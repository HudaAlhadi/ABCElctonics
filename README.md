ABCElectronics
ABCElectronics is a modern, full-featured e-commerce application designed to provide a seamless shopping experience for electronics enthusiasts. Built using JavaScript, HTML, CSS, Node.js, Express, and Redux Toolkit, this application offers robust functionalities for both customers and administrators.

Features
Customer Features
Product Browsing: Users can easily browse through a wide range of electronic products, view detailed descriptions, and see high-quality images.
Search and Filter: Advanced search and filtering options help users find exactly what they're looking for quickly.
Shopping Cart: Customers can add products to their cart, update quantities, and remove items as needed.
User Authentication: Secure user authentication allows customers to register, log in, and manage their profiles.
Order Management: Users can view their order history, track current orders, and receive notifications about order status.
Responsive Design: The application is fully responsive, providing a great user experience on both desktop and mobile devices.
Admin Features
Admin Dashboard: A comprehensive admin dashboard for managing products, orders, and users.
Product Management: Admins can add new products, update existing products, and remove products from the catalog.
Order Management: View, update, and manage all customer orders.
User Management: Admins have control over user accounts, including the ability to add, update, or delete users.
Analytics and Reports: Real-time analytics and reports on sales, user activities, and product performance.
Technologies Used
Frontend:

JavaScript: Core programming language for dynamic interactions.
HTML5 and CSS3: Markup and styling for a responsive and modern UI.
Redux Toolkit: State management library for managing application state efficiently.
Backend:

Node.js: Server-side JavaScript runtime environment.
Express.js: Fast, unopinionated, minimalist web framework for Node.js.
MongoDB: NoSQL database for storing application data.
JWT: JSON Web Tokens for secure authentication.
Key Functionalities
Authentication and Authorization:

Implemented secure user authentication using JWT.
Role-based access control to differentiate between admin and regular users.
Routing:

Efficient routing using Express.js to handle API requests and serve the frontend.
Protected routes to ensure secure access to sensitive data and admin functionalities.
State Management:

Utilized Redux Toolkit to manage global state, ensuring consistent and predictable state transitions across the application.
GitHub Repository


*****Admin Dashboard
To access the admin dashboard, you need to log in with admin credentials.
A default admin account is created during the initial setup. You can use the following credentials to log in:
        password: '525524',
        email: 'user1@example.com',


## Design
Below are some wireframes created in Figma for both desktop and mobile:

(https://github.com/HudaAlhadi/ABCElctonics/assets/139655754/3275f365-300d-4d86-a6c6-3c97bf0c54ed) 
![iPhone 14   15 Pro Max - 7](https://github.com/HudaAlhadi/ABCElctonics/assets/139655754/18cc2854-17f2-41f8-af7e-ff41816c616c)

![Desktop - 3](https://github.com/HudaAlhadi/ABCElctonics/assets/139655754/68eae456-5ba7-48c6-9c3a-fe4c1009985f)
![iPhone 14   15 Pro Max - 3](https://github.com/HudaAlhadi/ABCElctonics/assets/139655754/554c1ab3-b446-4993-bd02-5e052046f0c3)

![Desktop - 6](https://github.com/HudaAlhadi/ABCElctonics/assets/139655754/d3c7cfa7-ccde-4021-9acf-d8042efee6c3)

![iPhone 14   15 Pro Max - 8](https://github.com/HudaAlhadi/ABCElctonics/assets/139655754/d89401e6-aea8-40b1-816e-480b96249bd4)
![Desktop - 10](https://github.com/HudaAlhadi/ABCElctonics/assets/139655754/ac583cee-fd0c-4756-9b6c-a0df250ccd59)

![iPhone 14   15 Pro Max - 10](https://github.com/HudaAlhadi/ABCElctonics/assets/139655754/e27cea3c-8b40-4f1b-80b9-724fafff64a7)

# Course Code & Materials

This repository contains the course source code and other extra materials like slides.

## How to use

The code snapshots are organized in multiple **branches** where every branch **represents a course section**.

For example, the branch [01-getting-started](https://github.com/academind/react-complete-guide-code/tree/01-getting-started) holds all code snapshots and extra materials for section 1 of the course ("Getting Started").

You can switch branches via the branch dropdown above the directory explorer.

![Click on the branch dropdown and then select the appropriate branch for the course section you're looking for](./selecting-a-branch.jpg)

In most branches, you'll find multiple folders which organize the section-specific content further:

- Often, you'll find a `/code` subfolder which contains any relevent code snapshots for the given course section
- You also often find `/slides` folders which - guess what - contain the slides for the module
- `/extra-files` typically contains extra files like `.css` files that might be attached to individual lectures in that course module

The folder names should generally be self-explanatory but also feel free to simply click around and see which materials are available.

## Using code snapshots

Code snapshots (which you find in `/code`) are there for you to compare your code to mine and find + fix errors you might have in your code.

You can either view my code directly here on Github (you can open + view code files without issues here) or you download the snapshots.

The subfolders in the `/code` folder are named such that mapping them to the course lectures is straightforward.

### Downloading code snapshots

You can download all the content of a branch via the "Code" button here on Github. You can then either [clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) the repository or simply download the selected branch content as a ZIP file.

**Important:** You always download the **entire branch content!**

You can then dive into the interesting folders (e.g. the individual code snapshots) locally on your hard drive.

### Running the attached code

You can use the attached code simply to compare it to yours. But you can also run it.

To run my code, navigate into a specific code snapshot folder via the `cd` command in your command prompt or terminal first.

Then run `npm install` to install all required dependencies (this will create a `/node_modules` folder).

**Important:** If you're using the code for a module that requires API keys or a backend (e.g. the module about sending Http requests), you'll have to use **your backend URLs** or API keys. Mine won't work (I disabled my projects).
