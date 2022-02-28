# **ColoRandom**

This web app allows users to display, customize and save random color palettes. ColoRandom was a learning assignment for the Front End Development program at Turing School of Software and Design. The following contributors had approximately 4 weeks experiences using JavaScript, HTML and CSS.
  ![Main Display](README-images/main-display.png)

# **Contributors**

[Jacob Lavarine](https://github.com/Jlavarine)

[Rachel Hill](https://github.com/rachellhill)

[Angele Williams](https://github.com/angelewilliams)


# **Technologies Used**

- JavaScript
- HTML
- CSS

# **Local Set up Instructions**
- From this repository, click the _Code_ button and copy the SSH link.
- Open terminal (can be found by using command + space bar, and searching for 'Terminal')
- Inside of you terminal type "git clone" and then paste the ssh link should look like git clone [git@github.com:Jlavarine/ColoRandom.git](git@github.com:Jlavarine/ColoRandom.git)
- In your terminal type "cd ColoRandom"
- Then type "open index.html"
- The browser should then deploy.
- The application is also accessible via this deploy link: [ColoRandom](https://jlavarine.github.io/ColoRandom/)


# **Instructions For Use**
- Upon the browser loading the user will see a random palette of colors displayed.
- The user can click _“New Palette”_ button to generate a new palette. If they would like to keep 1 or more colors but change the rest, they can click the color box and 'lock' the color. The lock icon below the color box will change from unlocked to locked.
- Once a user is satisfied with the displayed palette, they can click _“Save Palette”_ and they will see a mini representation of their favorite colors displayed in the Saved Palette section on the right side of the page.
  ![Save Palette](README-images------)


- If a user would like to remove a saved palette, they can click the trash can to the right of the miniature palette to remove it.

# **Code Architecture**

This project consists of 5 primary files - scripts.js, Palette.js, Color.js, index.html, styles.css and ancillary files containing images.

- Palette.js and Color.js are the two class files that interact with the data model.
- main.js houses our JavaScript functionality

# **Code Example**

We had a function called `displaySavedCovers`, and created another one called `deleteSavedCover` to be able to delete a cover on a doubleclick event. Our event listener, `ondblclick`, is embedded in our HTML Section because we want to view our saved covers in the console log in their own section with the ID displaying. In the Elements area of the console log, there is no button that lets us delete, so we are forced to make each saved cover have its own id and section to be able to delete upon double click .
![Code Block](README-images/Code-block.png)
