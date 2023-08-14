# Classroom Project

## Description
The **Classroom Project** is a dynamic application that empowers educators to manage and analyze students' test scores effectively. With an intuitive interface, the project displays an interactive table presenting essential statistics derived from inputted grades. The following fields are prominently featured:

* Number of tests taken
* Sum of grades
* Average grade
* List of passing grades
* List of failing grades
* List of raised grades

Upon entering grades into the input text box and clicking the "Add" button, JavaScript functions come to life, calculating and populating the table in real-time. Each field in the table is the result of a dedicated function that processes the grades array to yield accurate insights.

Here's a breakdown of the calculations:
* **Number of tests taken:** The total number of grades present in the array reflects the amount of tests taken.
* **Sum of grades:** The cumulative sum of all grades entered.
* **Average grade:** The average grade across all tests.
* **List of passing grades:** All grades greater than or equal to 10 are showcased, giving insight into the students who passed.
* **List of failing grades:** All grades below 10 are presented, representing the students who did not meet the passing threshold.
* **List of raised grades:** Grades below 20 are raised by one unit, excluding the grade 20. This feature provides a glimpse into potential improvements for students who fell slightly short of perfection.

The **Classroom Project** ensures input validation, permitting grades only up to 20. Any grade above this limit is not accepted.

## Executing the Project
To experience the Classroom Project's dynamic grade calculations, follow these steps using the "Live Server" extension in Visual Studio Code:

### Step 1: Download and Install Visual Studio Code
If you haven't already, download and install Visual Studio Code from the official website.

### Step 2: Open the Project Folder
Launch Visual Studio Code and open the folder containing your **Classroom Project** files.

### Step 3: Install the "Live Server" Extension
Click on the "Extensions" icon in the left sidebar (or press `Ctrl+Shift+X`). In the search bar, type "Live Server" and select the extension published by Ritwick Dey. Click the "Install" button to add the extension to your environment.

### Step 4: Start the Live Server
After installing the "Live Server" extension, open the HTML file of your project in Visual Studio Code. You can initiate the "Live Server" extension using any of the following methods:

* **Right-Click and Open with Live Server:** Right-click anywhere within the HTML file or over the file name in the "Explorer" tab and select "Open with Live Server". This action will start the local server and automatically open your project in your default web browser.
* **Use the Status Bar:** Alternatively, click the "Go Live" button located on the status bar at the bottom of the Visual Studio Code window. Clicking it will activate the local server and launch your project in a web browser.
* **Keyboard Shortcut:** For keyboard enthusiasts, use `Alt+L` followed by `Alt+O` to start the "Live Server" extension.

### Step 5: Explore the Dynamic Grade Calculations
As the Classroom Project loads in your web browser, you can input grades into the text box and observe the table updating in real-time with calculated values based on your entries.

### Step 6: Stopping the Server
To halt the local server, you have two options:
* Close Visual Studio Code and the web browser tab displaying the project interface.
* Click the port number displayed in the status bar (usually located at the bottom right corner of Visual Studio Code), which will also terminate the server.

Please note that the **Classroom Project** incorporates JavaScript modules to enhance code organization and separation. JavaScript modules require a local server environment to function properly due to security measures. Attempting to execute the project by double-clicking the HTML file may result in unexpected behavior, as some features may not work as intended.

Utilizing the "Live Server" extension ensures seamless execution and interaction with the Classroom Project's dynamic grade calculations. It provides a controlled environment for JavaScript modules to function effectively, contributing to a smoother user experience.

## Ready to Enhance Your Classroom Management?
The **Classroom Project** transforms grade management into an intuitive and insightful experience. Download and explore the project to efficiently analyze student performance and gain valuable data-driven insights. Elevate your teaching with the Classroom Project today! 📊📚

## Update History

### Part II
* The project is now written with arrow functions, implicit return and inline `if` statement.

### Part I
* Release of the **Classroom Project**.

## Helpful Links
* **[Learn JavaScript](https://www.learnjavascript.com/):** Deepen your JavaScript knowledge and explore its capabilities.
* **[JavaScript Array Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array):** Understand arrays, a fundamental data structure in JavaScript.
* **[JavaScript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions):** Learn about JavaScript functions and their role in creating modular and efficient code.
* **[Visual Studio Code Download](https://code.visualstudio.com/):** Download Visual Studio Code to maximize your coding productivity and experience.

These resources will enhance your understanding of JavaScript, arrays, functions, and code editing, enriching your journey with the **Classroom Project** and empowering your educational endeavors! 🌟
